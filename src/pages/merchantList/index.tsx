import {useCallback, useEffect, useState} from 'react'
import { View } from '@tarojs/components'
import {merchantDetail, merchantList} from "../../store/network";
import './index.less'
import Tabbar from "../../common/tabbar";
import image from "@/assets/aaa.jpeg";
import {IconFont} from "@nutui/icons-react-taro";
import Title from "../../common/title";
import Taro from "@tarojs/taro";
const statusBarHeight:any=Taro.getSystemInfoSync().statusBarHeight

const ll = ['','','','','',]

const Index=()=> {
    const [data,setData]=useState<any[]>([])
    const [rate,setRate]=useState<number>(5)

    useEffect(()=>{
        merchantList({searchPage:{page:1,pageSize:10,sort:'',desc:0}}).then((res:any)=>{
            console.log('merchant',res)
            setData(res.content)
        })
    },[])

    const toDetail =useCallback(async(id:number)=>{
        const res = await merchantDetail(id)
        console.log('detail',res)
        Taro.navigateTo({url:`/pages/merchant/index?id=${id}`})
    },[])


        return (
            <View className='merchant-list-container' style={{paddingTop:statusBarHeight+14}}>
                <View className={'header'}>
                    商家
                </View>
                <Title text={'热门商家'}/>
                <View className='merchant-list'>
                    {!!data.length?data.map((item:any)=><View className='merchant-box' onClick={()=>toDetail(item.id)}>
                        <img alt="" src={image} className={'merchant-box-image'}/>
                        <View className='merchant-box-content'>
                            <div className='title'>{item.name}</div>
                            <div className='rate'>
                                {ll.map((_,index)=><>
                                    <IconFont size={12} name={'star-fill'}  onClick={()=>setRate(index+1)} style={{color:rate>index?"#ffc227":'#ddd'}}/>
                                </>)}
                                <span style={{marginLeft:4}}>5分</span>
                            </div>
                            <div className='sale'>
                                <span>营业中</span>
                                <span style={{color:"#0b6e00"}}>已售 657单</span>
                            </div>

                            <div className='group'>
                                <span className='group-title'>团</span>
                                <span>情侣双人餐 实惠四人套餐</span>
                            </div>
                        </View>
                    </View>):<>空的</>}
                </View>
                <Tabbar/>
            </View>
        )
}
export default Index;
