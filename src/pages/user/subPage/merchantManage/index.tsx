import { View } from '@tarojs/components'
import './index.less'
import Taro from "@tarojs/taro";
import folder from '@/assets/profile/folder.png'
import order from '@/assets/profile/order.png'
import right from '@/assets/profile/right.png'
import {useCallback} from "react";
const Index=()=> {
    const toItemManage=useCallback(()=>{
        Taro.navigateTo({url:'/pages/user/subPage/merchantManage/itemManage/index'})
    },[])
        return (
            <View className='merchant-management-container' >
                <View className="merchant-management-box" >
                    <div className="merchant-management-box-item-container" onClick={toItemManage}>
                        <div className="merchant-management-box-item-text">
                            <img alt="" src={order} className="merchant-management-box-item-icon"/>
                            商品列表管理
                        </div>
                        <img alt="" src={right} className="merchant-management-box-item-right-icon"/>
                    </div>
                    <div className="merchant-management-box-item-container" >
                        <div className="merchant-management-box-item-text">
                            <img alt="" src={folder} className="merchant-management-box-item-icon"/>
                            商店信息修改
                        </div>
                        <img alt="" src={right} className="merchant-management-box-item-right-icon"/>
                    </div>

                </View>
            </View>
        )
}
export default Index;
