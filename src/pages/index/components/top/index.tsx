import {ScrollView, View} from '@tarojs/components'
import aaa from '../../../../assets/aaa.jpeg'
import { Image } from '@nutui/nutui-react-taro'
import './index.less'
import Taro from "@tarojs/taro";
import right from "../../../../assets/common/right.png";
const Index=()=> {
    const goto=(page:string)=>{
        Taro.navigateTo({url:page})
    }
    return (
        <View className='top-note'>
            <View className='top-note-title'>
                <View className='top-note-label'>新开特惠</View>
                <View className='top-note-more'>全部 <Image src={right} width={10} height={10}/></View>
            </View>
            <ScrollView  className='top-note-container' enhanced={true} enableFlex={true} showScrollbar={false} scrollX={true}>
                <View className='top-note-box' onClick={()=>goto('a')}>
                    <img alt="" src={aaa} className={'top-note-image'}/>
                    <div className={'top-note-text'}>KFC</div>
                </View>
                <View className='top-note-box' onClick={()=>goto('a')}>
                    <img alt="" src={aaa} className={'top-note-image'}/>
                    <div className={'top-note-text'}>KFC</div>
                </View>
                <View className='top-note-box' onClick={()=>goto('a')}>
                    <img alt="" src={aaa} className={'top-note-image'}/>
                    <div className={'top-note-text'}>KFC</div>
                </View>
                <View className='top-note-box' onClick={()=>goto('a')}>
                    <img alt="" src={aaa} className={'top-note-image'}/>
                    <div className={'top-note-text'}>KFC</div>
                </View>
                <View className='top-note-box' onClick={()=>goto('a')}>
                    <img alt="" src={aaa} className={'top-note-image'}/>
                    <div className={'top-note-text'}>KFC</div>
                </View>
                <View className='top-note-box' onClick={()=>goto('a')}>
                    <img alt="" src={aaa} className={'top-note-image'}/>
                    <div className={'top-note-text'}>KFC</div>
                </View>
                <View className='top-note-box' onClick={()=>goto('a')}>
                    <img alt="" src={aaa} className={'top-note-image'}/>
                    <div className={'top-note-text'}>KFC</div>
                </View>
                <View className='top-note-box' onClick={()=>goto('a')}>
                    <img alt="" src={aaa} className={'top-note-image'}/>
                    <div className={'top-note-text'}>KFC</div>
                </View>
            </ScrollView>
        </View>
    )
}
export default Index;
