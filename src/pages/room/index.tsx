import { useMemo } from 'react'
import Taro, { useDidShow } from '@tarojs/taro'
import {View, ScrollView} from '@tarojs/components'

import type CustomTabBar from '../../custom-tab-bar'
const WEEK=['周日','周一','周二','周三','周四','周五','周六']

export default function Index () {
    const page = useMemo(() => Taro.getCurrentInstance().page, [])

    useDidShow(() => {
        const tabbar = Taro.getTabBar<CustomTabBar>(page)
        tabbar?.setSelected(1)
    })
    const dateList = ['','','','','','','','','','','','','','']
    const date = new Date()
    const currMonth = date.getMonth()+1
    const currDay= date.getDate()
    const currWeekDay = date.getDay()
    return (
        <View className='index'>
            <ScrollView  className='room-container' scrollX={true}  enhanced={true} enableFlex={true} showScrollbar={false} >
                <View className='room-date-container' >
                    {dateList.map((_,index)=>{
                        return <View >
                            {index===0?<div>今天</div>:index===1?<div>明天</div>:<div>{WEEK[(currWeekDay+index)%7]}</div>}
                            <div className={'new-note-text'}>{currMonth +' '+currDay}</div>
                    </View>
                    })}
                </View>
            </ScrollView>
        </View>
    )
}
