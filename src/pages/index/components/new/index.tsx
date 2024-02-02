import {ScrollView, View} from '@tarojs/components'
import aaa from '../../../../assets/aaa.jpeg'
import right from '../../../../assets/common/right.png'
import { Image } from '@nutui/nutui-react-taro'
import './index.less'
import Taro from "@tarojs/taro";
const Index=()=> {
    const goto=()=>{
        Taro.navigateTo({url:'/pages/merchant/index'})
    }
    return (<View className='new-note'>
            <View className='new-note-title'>
                <View className='new-note-label'>精选菜馆</View>
                <View className='new-note-more'>全部 <Image src={right} width={10} height={10}/></View>
            </View>
            <ScrollView  className='new-note-container' scrollX={true}  enhanced={true} enableFlex={true} showScrollbar={false} >
                <View className='new-note-box' onClick={()=>goto()}>
                    <img alt="" src={aaa} className={'new-note-image'}/>
                    <div className={'new-note-text'}>KFC</div>
                </View>
                <View className='new-note-box' onClick={()=>goto()}>
                    <img alt="" src={aaa} className={'new-note-image'}/>
                    <div className={'new-note-text'}>福州大胜靠德</div>
                </View>
                <View className='new-note-box' onClick={()=>goto()}>
                    <img alt="" src={aaa} className={'new-note-image'}/>
                    <div className={'new-note-text'}>麦当劳</div>
                </View>
                <View className='new-note-box' onClick={()=>goto()}>
                    <img alt="" src={aaa} className={'new-note-image'}/>
                    <div className={'new-note-text'}>荣记猪脚饭</div>
                </View>
                <View className='new-note-box' onClick={()=>goto()}>
                    <img alt="" src={aaa} className={'new-note-image'}/>
                    <div className={'new-note-text'}>牛肉粉</div>
                </View>
                <View className='new-note-box' onClick={()=>goto()}>
                    <img alt="" src={aaa} className={'new-note-image'}/>
                    <div className={'new-note-text'}>菜饭</div>
                </View>


            </ScrollView>
        </View>

    )
}
export default Index;
