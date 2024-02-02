import {ScrollView, View} from '@tarojs/components'
import aaa from '../../../../assets/aaa.jpeg'
import { Image } from '@nutui/nutui-react-taro'
import './index.less'
import Taro from "@tarojs/taro";
import right from "../../../../assets/common/right.png";
import {useEffect, useState} from "react";
import {merchantList} from "../../../../store/network";
import {init_url} from "../../../../store/request";
const Index=()=> {
    const [data,setData]=useState<any[]>([])

    useEffect(()=>{
        merchantList({searchPage:{page:1,pageSize:10,sort:'',desc:0}}).then((res:any)=>{
            console.log('新开',res)
            setData(res.content)
        })
    },[])
    const goto=()=>{
        Taro.navigateTo({url:'/pages/merchant/index'})
    }
    return (
        <View className='top-note'>
            <View className='top-note-title'>
                <View className='top-note-label'>新开特惠</View>
                <View className='top-note-more'>全部 <Image src={right} width={10} height={10}/></View>
            </View>
            <ScrollView  className='top-note-container' enhanced={true} enableFlex={true} showScrollbar={false} scrollX={true}>
                {data.map((item:any)=><View className='top-note-box' onClick={()=>goto()}>
                    <img alt="" src={init_url+item.cover} className={'top-note-image'}/>
                    <div className={'top-note-text'}>{item.label}</div>
                </View>)}
                <View className='top-note-box' onClick={()=>goto()}>
                    <img alt="" src={aaa} className={'top-note-image'}/>
                    <div className={'top-note-text'}>KFC</div>
                </View>
                <View className='top-note-box' onClick={()=>goto()}>
                    <img alt="" src={aaa} className={'top-note-image'}/>
                    <div className={'top-note-text'}>KFC</div>
                </View>
                <View className='top-note-box' onClick={()=>goto()}>
                    <img alt="" src={aaa} className={'top-note-image'}/>
                    <div className={'top-note-text'}>KFC</div>
                </View>
                <View className='top-note-box' onClick={()=>goto()}>
                    <img alt="" src={aaa} className={'top-note-image'}/>
                    <div className={'top-note-text'}>KFC</div>
                </View>
                <View className='top-note-box' onClick={()=>goto()}>
                    <img alt="" src={aaa} className={'top-note-image'}/>
                    <div className={'top-note-text'}>KFC</div>
                </View>
                <View className='top-note-box' onClick={()=>goto()}>
                    <img alt="" src={aaa} className={'top-note-image'}/>
                    <div className={'top-note-text'}>KFC</div>
                </View>
                <View className='top-note-box' onClick={()=>goto()}>
                    <img alt="" src={aaa} className={'top-note-image'}/>
                    <div className={'top-note-text'}>KFC</div>
                </View>
                <View className='top-note-box' onClick={()=>goto()}>
                    <img alt="" src={aaa} className={'top-note-image'}/>
                    <div className={'top-note-text'}>KFC</div>
                </View>
            </ScrollView>
        </View>
    )
}
export default Index;
