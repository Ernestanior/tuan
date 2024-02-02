import {View} from '@tarojs/components'
import './index.less'

const Index=({nav,onChangeNav})=> {

    return (
        <View className={'nav-bar'} >
            <View className={'nav-item'}>
                <View onTap={()=>onChangeNav(3)} style={{fontWeight:nav===3?900:400,fontSize:nav===3?18:15}}>简介</View>
            </View>
            <View className={'nav-item'}>
                <View onTap={()=>onChangeNav(4)} style={{fontWeight:nav===4?900:400,fontSize:nav===4?18:15}}>团购</View>
            </View>
            <View className={'nav-item'}>
                <View onTap={()=>onChangeNav(5)} style={{fontWeight:nav===5?900:400,fontSize:nav===5?18:15}}>评价</View>
            </View>
        </View>
    )
}
export default Index;
