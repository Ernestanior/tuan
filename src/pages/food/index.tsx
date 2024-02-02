import {useCallback, useEffect, useState} from 'react'
import { View,Image } from '@tarojs/components'
import './index.less'
import image from '@/assets/aaa.jpeg'
import {getCurrentInstance} from "@tarojs/runtime";
import {goodDetail} from "../../store/network";
import Taro from "@tarojs/taro";
const Index=()=> {
    const [times,setTimes]=useState<number>(1)
    const [data,setData]=useState<any[]>([])
    useEffect(()=>{
        const params:any= getCurrentInstance().router?.params
        const id:number = params.id
        console.log(id)
        goodDetail(id).then((res)=>setData(res))

    },[])

    const toPay=useCallback(()=>{
        Taro.redirectTo({url:'/pages/orderList/index'})
    },[])

    console.log(data)
        return (
            <View className='food-container'>
                <View>
                    <View className='food-box'>
                        <View className='row'>
                            <span className={'food-title'}>猪脚饭</span>
                            <span className={'food-price'}>￥19.9</span>
                        </View>
                        {/*<View style={{width:150,height:200,backgroundColor:"pink"}}>*/}
                        <Image mode={'aspectFit'} src={image} className={'food-image'}/>
                        {/*</View>*/}
                    </View>
                    <View className='food-box' style={{display:"flex",justifyContent:"space-between"}}>
                        <span className={'food-amount'}>数量</span>
                        <View className={'calculator'}>
                            <View onTap={()=>setTimes(times>1 ?times-1:times)} >
                                <span style={{fontSize:16}}>-</span>
                            </View>
                            <span style={{fontSize:14,color:"#84b1d0"}}>{times}</span>
                            <View onTap={()=>setTimes(times+1)} >
                                <span style={{fontSize:16}}>+</span>
                            </View>
                        </View>
                    </View>
                </View>

                <View className={'food-btn'} onClick={toPay}>立即拼饭</View>

            </View>
        )
}
export default Index;
