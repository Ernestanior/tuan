import {useCallback, useState} from 'react'
import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
import {userBasic, wxLogin} from "../../store/network";
import folder from '@/assets/profile/folder.png'
import empty from '@/assets/profile/image.png'
import order from '@/assets/profile/order.png'
import right from '@/assets/profile/right.png'
import crown from '@/assets/profile/crown.png'
import discover from '@/assets/profile/discover.png'
import './index.less'
import {Button} from "@nutui/nutui-react-taro";
import {saveToken} from "../../store/token";
import useStore from "../../store/store";
import Tabbar from "../../common/tabbar";
const statusBarHeight:any=Taro.getSystemInfoSync().statusBarHeight

const User= ()=> {
    const {setUserInfo,userInfo}=useStore()
    const [codeOpenId,setCodeOpenId]=useState<string>('')
    const [userData,setUserData]=useState<any>({})

    const bindPhoneNumber= async (e:any)=>{
        const res = await wxLogin({codeOpenId,codePhone:e.detail.code,...userData})
        saveToken(res,async ()=>{
            const userInfo = await userBasic()
            setUserInfo(userInfo)
        })
    }
    const login = () =>{
        Taro.login({
            success: function (res) {
                if (res.code) {
                    setCodeOpenId(res.code)
                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            }
        })
        Taro.getUserProfile({
            desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
                setUserData({encryptedData:res.encryptedData,iv:res.iv})
            }
        })
    }
    const toOrder=useCallback(()=>{
        Taro.navigateTo({url:'/pages/orderList/index'})
    },[])


    const toCreateMerchant=useCallback(()=>{
        Taro.navigateTo({url:'/pages/user/subPage/merchantCreate/index'})
    },[])

    const toMerchantManage=useCallback(()=>{
        Taro.navigateTo({url:'/pages/user/subPage/merchantManage/index'})
    },[])


    return (
        <View className="profile-page-container" style={{paddingTop:statusBarHeight+14}}>
            <View className={'header'}>
                个人中心
            </View>
            {userInfo?<div className="profile-login-button" >
                <img alt="" src={empty} className="profile-login-button-img"/>
                <span style={{marginLeft:10}}>{userInfo.name}</span>
            </div>:<div className="profile-login-button" onClick={login} >
                <img alt="" src={empty} className="profile-login-button-img"/>
                <Button style={{border:0,padding:8,fontFamily:"Gill Sans"}} openType={'getPhoneNumber'} onGetPhoneNumber={bindPhoneNumber}>点击登录</Button>
            </div>}
            <View className="profile-box" >
                <div className="profile-item-container" onClick={toOrder}>
                    <div className="profile-item-text">
                        <img alt="" src={order} className="profile-item-icon"/>
                        订单
                    </div>
                    <img alt="" src={right} className="profile-item-right-icon"/>
                </div>
                <div className="profile-item-container" >
                    <div className="profile-item-text">
                        <img alt="" src={folder} className="profile-item-icon"/>
                        我的收藏
                    </div>
                    <img alt="" src={right} className="profile-item-right-icon"/>
                </div>
                <div className="profile-item-container" onClick={toMerchantManage}>
                    <div className="profile-item-text">
                        <img alt="" src={crown} className="profile-item-icon"/>
                        商店管理
                    </div>
                    <img alt="" src={right} className="profile-item-right-icon"/>
                </div>
                <div className="profile-item-container" onClick={toCreateMerchant}>
                    <div className="profile-item-text">
                        <img alt="" src={discover} className="profile-item-icon"/>
                        商家入驻
                    </div>
                    <img alt="" src={right} className="profile-item-right-icon"/>
                </div>
            </View>
            <Tabbar/>
        </View>
    )
}

export default User
