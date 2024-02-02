import {View} from '@tarojs/components'
import './index.less'
// @ts-ignore
import Title from "@/common/title";
import profile from "@/assets/profile.png";
import {IconFont} from "@nutui/icons-react-taro";
import Taro from "@tarojs/taro";


const Index=()=> {

    const toComment=()=>{
        Taro.navigateTo({url:'/pages/comment/index'})
    }
    return (
        <View className={'merchant-comment'} >
            <Title text={'评价'}/>
            <View className={'comment-box'}>
                <View className={'comment-header'}>
                    <View style={{display:"flex"}}>
                        <img alt="" src={profile} className='profile-img'/>
                        <View className={'profile'}>
                        <span className={'profile-name'}>
                            Judy
                        </span>
                            <span className={'rate'}>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                        </span>
                        </View>
                    </View>
                    <span className={'date'}>2023-12-21</span>
                </View>
                <View className={'comment-content'}>
                    非常好！我很喜欢！
                </View>

            </View>
            <View className={'comment-box'}>
                <View className={'comment-header'}>
                    <View style={{display:"flex"}}>
                        <img alt="" src={profile} className='profile-img'/>
                        <View className={'profile'}>
                        <span className={'profile-name'}>
                            Judy
                        </span>
                            <span className={'rate'}>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                        </span>
                        </View>
                    </View>
                    <span className={'date'}>2023-12-21</span>
                </View>
                <View className={'comment-content'}>
                    非常好！我很喜欢！
                </View>

            </View>
            <View className={'comment-box'}>
                <View className={'comment-header'}>
                    <View style={{display:"flex"}}>
                        <img alt="" src={profile} className='profile-img'/>
                        <View className={'profile'}>
                        <span className={'profile-name'}>
                            Judy
                        </span>
                            <span className={'rate'}>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                        </span>
                        </View>
                    </View>
                    <span className={'date'}>2023-12-21</span>
                </View>
                <View className={'comment-content'}>
                    非常好！我很喜欢！
                </View>

            </View>
            <View className={'comment-box'}>
                <View className={'comment-header'}>
                    <View style={{display:"flex"}}>
                        <img alt="" src={profile} className='profile-img'/>
                        <View className={'profile'}>
                        <span className={'profile-name'}>
                            Judy
                        </span>
                            <span className={'rate'}>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                        </span>
                        </View>
                    </View>
                    <span className={'date'}>2023-12-21</span>
                </View>
                <View className={'comment-content'}>
                    非常好！我很喜欢！
                </View>

            </View>
            <View className={'comment-btn'} onClick={toComment}>写评价</View>

        </View>
    )
}
export default Index;
