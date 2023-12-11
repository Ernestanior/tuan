import {View} from '@tarojs/components'
import cup from '@/assets/navigation/cup.png'
import cart from '@/assets/navigation/cart.png'
import activity from '@/assets/navigation/activity.png'
import camera from '@/assets/navigation/camera.png'
import car from '@/assets/navigation/car.png'

import './index.less'
import Taro from "@tarojs/taro";
const Index=()=> {
    const goto=(page:string)=>{
        Taro.navigateTo({url:page})
    }
    return (
            <View className='navigation-container'>
                <View className='navigation-item' onClick={()=>goto('a')}>
                    <img alt="" src={car} className={'navigation-image'}/>
                    <div className={'navigation-text'}>拼饭</div>
                </View>
                <View className='navigation-item'>
                    <img alt="" src={cart} className={'navigation-image'}/>
                    <div className={'navigation-text'}>同城团购</div>
                </View>
                <View className='navigation-item'>
                    <img alt="" src={activity} className={'navigation-image'}/>
                    <div className={'navigation-text'}>活动</div>
                </View>
                <View className='navigation-item' onClick={()=>goto('/pages/noteList/index')}>
                    <img alt="" src={camera} className={'navigation-image'}/>
                    <div className={'navigation-text'}>校园约拍</div>
                </View>
                <View className='navigation-item' onClick={()=>goto('/pages/noteList/index')}>
                    <img alt="" src={cup} className={'navigation-image'}/>
                    <div className={'navigation-text'}>暂定</div>
                </View>
            </View>
    )
}
export default Index;
