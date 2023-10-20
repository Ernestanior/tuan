import {ScrollView, View} from '@tarojs/components'
import image from '../../../../assets/demo.jpg'
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
                <View className='top-note-label'>同城精选</View>
                <View className='top-note-more'>全部 <Image src={right} width={10} height={10}/></View>
            </View>
            <ScrollView  className='top-note-container' enhanced={true} enableFlex={true} showScrollbar={false} scrollX={true}>
                <View className='top-note-box' onClick={()=>goto('a')}>
                    <img alt="" src={image} className={'top-note-image'}/>
                    <div className={'top-note-text'}>雪乡连环事件真的太惨了</div>
                </View>
                <View className='top-note-box' onClick={()=>goto('a')}>
                    <img alt="" src={image} className={'top-note-image'}/>
                    <div className={'top-note-text'}>科举</div>
                </View>
                <View className='top-note-box' onClick={()=>goto('a')}>
                    <img alt="" src={image} className={'top-note-image'}/>
                    <div className={'top-note-text'}>洗劫伦敦所以然</div>
                </View>
                <View className='top-note-box' onClick={()=>goto('a')}>
                    <img alt="" src={image} className={'top-note-image'}/>
                    <div className={'top-note-text'}>拆迁2：买房</div>
                </View>
                <View className='top-note-box' onClick={()=>goto('a')}>
                    <img alt="" src={image} className={'top-note-image'}/>
                    <div className={'top-note-text'}>病娇男孩的精分</div>
                </View>
                <View className='top-note-box' onClick={()=>goto('a')}>
                    <img alt="" src={image} className={'top-note-image'}/>
                    <div className={'top-note-text'}>病娇男孩的精分</div>
                </View>
                <View className='top-note-box' onClick={()=>goto('a')}>
                    <img alt="" src={image} className={'top-note-image'}/>
                    <div className={'top-note-text'}>病娇男孩的精分</div>
                </View>
                <View className='top-note-box' onClick={()=>goto('a')}>
                    <img alt="" src={image} className={'top-note-image'}/>
                    <div className={'top-note-text'}>病娇男孩的精分</div>
                </View>
            </ScrollView>
        </View>
    )
}
export default Index;
