import {useEffect} from 'react'
import Taro from '@tarojs/taro'
import type CustomTabBar from '../../custom-tab-bar'

import './index.less'
import Navigation from "./components/navigation";
import Swiper from "./components/swiper";
import {View} from "@tarojs/components";
import Callboard from "./components/callboard";
import Top from "./components/top";
import New from "./components/new";
const Index=()=> {
    const pageCtx = Taro.getCurrentInstance().page

    useEffect(()=>{
        const tabbar = Taro.getTabBar<CustomTabBar>(pageCtx)
        tabbar?.setSelected(0)
    },[])

    return (
        <View style={{paddingLeft:8,paddingRight:8}}>
            <Swiper/>
            <Navigation/>
            <Callboard/>
            <New/>
            <Top/>
        </View>
    )
}
export default Index
