import {View} from '@tarojs/components'
import './index.less'
// @ts-ignore
import Title from "@/common/title";


const Index=()=> {

    return (
        <View className={'merchant-main'} >
            <Title text={'简介'}/>
            <span className={'merchant-main-content'}>
                暂无简介~
            </span>
        </View>
    )
}
export default Index;
