import { Swiper } from '@nutui/nutui-react-taro';
import './index.less'
import {View} from "@tarojs/components";
import address from "../../../../assets/address.png";
const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]


const Index=()=> {
    return (
        <>
            <View style={{display:"flex",alignItems:"center",marginBottom:10}}>
                <img alt="" src={address} className={'navigation-image'} style={{width:18,height:18}}/>
                <View style={{fontSize:11,color:"#888"}}>xxxx学院zz</View>
            </View>
            <Swiper
                defaultValue={0}
                loop
                autoplay
                height={150}
            >
                {list.map((item, index) => {
                    return (
                        <Swiper.Item key={item} >
                            <img style={{width:"100%",height:"100%"}} src={item} onClick={() => console.log(index)} alt="" />
                        </Swiper.Item>
                    )
                })}
            </Swiper>
        </>

    )
}
export default Index;
