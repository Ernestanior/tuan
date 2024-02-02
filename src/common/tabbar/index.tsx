import {useCallback} from 'react'
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'

import './index.less'
// @ts-ignore
import useStore from "@/store/store";

import home from '../../assets/tabbar/home.png';
import homefill from '../../assets/tabbar/home-fill.png';
import shop from '../../assets/tabbar/shop.png';
import shopfill from '../../assets/tabbar/shop-fill.png';
import menu from '../../assets/tabbar/menu.png';
import menufill from '../../assets/tabbar/menu-fill.png';
import user from '../../assets/tabbar/user.png';
import userfill from '../../assets/tabbar/user-fill.png';
const Index=()=>{
    const {tab,setTab}=useStore()
    const onRedirectTo=useCallback((url:string)=>{
        setTab(url)
        if (url==='index'){
            Taro.redirectTo({url:'/pages/index/index'})
        }
        else if (url==='orderList'){
            Taro.redirectTo({url:'/pages/orderList/index'})
        }
        else if (url==='merchantList'){
            Taro.redirectTo({url:'/pages/merchantList/index'})
        }
        else{
            Taro.redirectTo({url:'/pages/user/index'})
        }

    },[])
       const list:any[]=[
            {
                name:"index",
                pagePath: '/pages/index/index',
                selectedIconPath: homefill,
                iconPath: home,
                text: '首页'
            },

            {
                name:"merchantList",
                pagePath: '/pages/merchantList/index',
                selectedIconPath: shopfill,
                iconPath: shop,
                text: '商店'
            },
           {
               name:"orderList",
               pagePath: '/pages/orderList/index',
               selectedIconPath: menufill,
               iconPath: menu,
               text: '订单'
           },
            {
                name:"user",
                pagePath: '/pages/user/index',
                selectedIconPath: userfill,
                iconPath: user,
                text: '个人中心'
            }
        ]
        return (
            <CoverView className='tab-bar'>
                <CoverView className='tab-bar-border'></CoverView>
                {list.map((item, index) => {
                    return (
                        <CoverView key={index} className='tab-bar-item' onTap={()=>onRedirectTo(item.name)}>
                            <CoverImage src={tab === item.name ? item.selectedIconPath : item.iconPath} />
                            <CoverView style={{ color: tab === item.name ? '#0675c4' : '#aaa' }}>{item.text}</CoverView>
                        </CoverView>
                    )
                })}
            </CoverView>
        )
}

export default Index
