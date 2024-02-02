import {View} from '@tarojs/components'
import './index.less'
// @ts-ignore
import Title from "@/common/title";
import image from '@/assets/aaa.jpeg'

import {useCallback, useEffect, useState} from "react";
import {goodList} from "../../../../store/network";
import Taro from "@tarojs/taro";


const Index=()=> {
    const [data,setData]=useState<any[]>([])

    useEffect(()=>{
        goodList({searchPage:{page:1,pageSize:10,sort:'',desc:0}}).then((res:any)=>{
            console.log('good',res)
            setData(res.content)
        })
    },[])

    const toDetail =useCallback(async(id:number)=>{
        Taro.navigateTo({url:`/pages/food/index?id=${id}`})
    },[])
    return (
        <View className={'merchant-group'} >
            <Title text={'团购'} style={{marginLeft:18}}/>
            <View className='food-list'>
                {!!data.length?data.map((item:any,index:number)=><View className='food-box' key={index} onClick={()=>toDetail(item.id)}>
                    <img alt="" src={image} className={'food-box-image'}/>
                    <View className='food-box-content'>
                        <div className='title'>{item.name}</div>
                        <div className='sale'>月售 {item.monthSell}</div>
                        <div className='price'>
                            <span className='team-price'>团购价 {item.promotionPrice}</span>
                            /
                            <span className='normal-price'>￥{item.originalPrice}</span></div>
                        <View style={{display:"flex",justifyContent:"flex-end"}}>
                            <div className='btn'>一键拼团</div>
                        </View>
                    </View>
                </View>):<View style={{paddingLeft:18,paddingTop:10,color:"#888"}}>暂无团购商品~</View>}
            </View>

        </View>
    )
}
export default Index;
