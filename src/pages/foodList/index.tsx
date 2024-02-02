import {useCallback, useEffect, useState} from 'react'
import { View } from '@tarojs/components'
import image from '@/assets/aaa.jpeg'
import {goodDetail, goodList} from "../../store/network";
import './index.less'
import Tabbar from "../../common/tabbar";
const Index=()=> {
    const [data,setData]=useState<any[]>([])

    useEffect(()=>{
        goodList({searchPage:{page:1,pageSize:10,sort:'',desc:0}}).then((res:any)=>{
            console.log('good',res)
            setData(res.content)
        })
    },[])

    const toDetail =useCallback(async(id:number)=>{
        const res = await goodDetail(id)
        console.log('detail',res)
    },[])


        return (
            <View className='food-list-container'>
                <View className='food-list'>
                    {data.map((item:any,index:number)=><View className='food-box' key={index} onClick={()=>toDetail(item.id)}>
                        <img alt="" src={image} className={'food-box-image'}/>
                        <View className='food-box-content'>
                            <div className='title'>{item.name}</div>
                            <div className='sale'>月售 {item.monthSell}</div>
                            <div className='price'>
                                <span className='team-price'>团购价 {item.promotionPrice}</span>
                                /
                                <span className='normal-price'>￥{item.originalPrice}</span></div>
                            <View style={{display:"flex",justifyContent:"flex-end"}}>
                                <div className='food-box-content-btn'>再次购买</div>
                            </View>
                        </View>
                    </View>)}
                </View>
                <Tabbar/>
            </View>
        )
}
export default Index;
