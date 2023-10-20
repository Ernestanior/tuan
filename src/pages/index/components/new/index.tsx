import {ScrollView, View} from '@tarojs/components'
import image from '../../../../assets/demo.jpg'
import right from '../../../../assets/common/right.png'
import { Image } from '@nutui/nutui-react-taro'
import './index.less'
import Taro from "@tarojs/taro";
const Index=()=> {
    const goto=(page:string)=>{
        Taro.navigateTo({url:page})
    }
    return (
        <View className='new-note'>
            <View className='new-note-title'>
                <View className='new-note-label'>剧本速递</View>
                <View className='new-note-more'>全部 <Image src={right} width={10} height={10}/></View>
            </View>
            <ScrollView  className='new-note-container' scrollX={true}  enhanced={true} enableFlex={true} showScrollbar={false} >
                <View className='new-note-box' onClick={()=>goto('a')}>
                    <img alt="" src={image} className={'new-note-image'}/>
                    <div className={'new-note-text'}>雪乡连环事件真的太惨了</div>
                </View>
                <View className='new-note-box' onClick={()=>goto('a')}>
                    <img alt="" src={image} className={'new-note-image'}/>
                    <div className={'new-note-text'}>雪乡连环事件真的太惨了</div>
                </View>
                <View className='new-note-box' onClick={()=>goto('a')}>
                    <img alt="" src={image} className={'new-note-image'}/>
                    <div className={'new-note-text'}>雪乡连环事件真的太惨了</div>
                </View>
                <View className='new-note-box' onClick={()=>goto('a')}>
                    <img alt="" src={image} className={'new-note-image'}/>
                    <div className={'new-note-text'}>雪乡连环事件真的太惨了</div>
                </View>
                <View className='new-note-box' onClick={()=>goto('a')}>
                    <img alt="" src={image} className={'new-note-image'}/>
                    <div className={'new-note-text'}>雪乡连环事件真的太惨了</div>
                </View>
                <View className='new-note-box' onClick={()=>goto('a')}>
                    <img alt="" src={image} className={'new-note-image'}/>
                    <div className={'new-note-text'}>雪乡连环事件真的太惨了</div>
                </View>


            </ScrollView>
        </View>

    )
}
export default Index;
