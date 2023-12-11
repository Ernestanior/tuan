import {useEffect} from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import type CustomTabBar from '../../custom-tab-bar'
// import './index.less'
import Item from "./component/item";
const Index=()=> {
    const pageCtx = Taro.getCurrentInstance().page

    useEffect(()=>{
        const tabbar = Taro.getTabBar<CustomTabBar>(pageCtx)
        tabbar?.setSelected(2)
    },[])

        return (
            <View>
                <Item/>
            </View>
        )
}
export default Index;
