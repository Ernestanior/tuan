import {View} from '@tarojs/components'

import './index.less'
import {NoticeBar} from "@nutui/nutui-react-taro";
const Index=()=> {
    const boardList = ['xxx学校猪脚饭4=2','福州第一高中鱼香肉丝拼饭5=1','133个饭局等你来拼~']
    return (
            <View className='callboard-container'>
                <View className='callboard-label'>同城拼饭</View>
                <NoticeBar
                    height={25}
                    className={'callboard'}
                    direction="vertical"
                    wrap={false}
                    list={boardList}
                    speed={10}
                    duration={2000}
                />
            </View>
    )
}
export default Index;
