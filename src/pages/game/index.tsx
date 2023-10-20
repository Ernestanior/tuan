import { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import type CustomTabBar from '../../custom-tab-bar'
// import './index.less'
import Item from "./component/item";
export default class Index extends Component {
    pageCtx = Taro.getCurrentInstance().page

    componentDidShow () {
        const tabbar = Taro.getTabBar<CustomTabBar>(this.pageCtx)
        tabbar?.setSelected(2)
    }

    render () {
        return (
            <View>
                <Item/>
            </View>
        )
    }
}
