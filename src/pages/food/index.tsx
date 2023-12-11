import {useEffect, useState} from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import image from '@/assets/aaa.jpeg'
import type CustomTabBar from '../../custom-tab-bar'
import {goodList} from "../../store/network";
import './index.less'
const Index=()=> {

    const [data,setData]=useState<any[]>([])
    const pageCtx = Taro.getCurrentInstance().page

    useEffect(()=>{
        const tabbar = Taro.getTabBar<CustomTabBar>(pageCtx)
        tabbar?.setSelected(1)
    },[])

    useEffect(()=>{
        goodList({searchPage:{page:1,pageSize:10,sort:'',desc:0}}).then((res:any)=>{
            console.log('good',res)
            setData(res.content)
        })
    },[])


        return (
            <View className='food-list-container'>
                <View className='food-list'>
                    {data.map((item:any,index:number)=><View className='food-box' key={index}>
                        <img alt="" src={image} className={'food-box-image'}/>
                        <View className='food-box-content'>
                            <div className='title'>{item.name}</div>
                            <div className='sale'>月售 600+</div>
                            <div className='price'>
                                <span className='team-price'>团购价 ￥19.99</span>
                                /
                                <span className='normal-price'>￥25.99</span></div>
                            <View style={{display:"flex",justifyContent:"flex-end"}}>
                                <div className='btn'>一键拼团</div>
                            </View>
                        </View>
                    </View>)}
                </View>
            </View>
        )
}
export default Index;
