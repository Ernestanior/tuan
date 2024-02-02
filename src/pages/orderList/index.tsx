import {useEffect, useState} from 'react'
import { View } from '@tarojs/components'
import image from '@/assets/aaa.jpeg'
import {goodList} from "../../store/network";
import './index.less'
import Tabbar from "../../common/tabbar";
import Taro from "@tarojs/taro";
const statusBarHeight:any=Taro.getSystemInfoSync().statusBarHeight

const Index=()=> {
    const [data,setData]=useState<any[]>([])

    useEffect(()=>{
        goodList({searchPage:{page:1,pageSize:10,sort:'',desc:0}}).then((res:any)=>{
            console.log('good',res)
            setData(res.content)
        })
    },[])

    // const toDetail =useCallback(async(id:number)=>{
    //     const res = await goodDetail(id)
    //     console.log('detail',res)
    // },[])


        return (
            <View className='order-list-container' style={{paddingTop:statusBarHeight+14}}>
                <View className={'header'}>
                    订单
                </View>
                <View className='order-list'>
                    {data.map((item:any,index:number)=><View className='order-box' key={index}>
                        <img alt="" src={image} className={'order-box-image'}/>
                        <View className='order-box-content'>
                            <div className='title'>林记烧烤</div>
                            <div className='set'>猪脚饭一份 白斩鸡米饭 例汤2份</div>
                            <div className='price'>
                                    ￥
                                <span className='price-amount'>{item.promotionPrice}</span>
                            </div>
                            <View style={{display:"flex",justifyContent:"flex-end"}}>
                                <div className='order-box-btn'>再次拼团</div>
                            </View>
                        </View>
                    </View>)}

                </View>
                <Tabbar/>
            </View>
        )
}
export default Index;
