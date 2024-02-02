import './index.less'
import Navigation from "./components/navigation";
import Swiper from "./components/swiper";
import {View} from "@tarojs/components";
import Callboard from "./components/callboard";
import Top from "./components/top";
import New from "./components/new";
import Tabbar from "../../common/tabbar";
import Taro from "@tarojs/taro";
const statusBarHeight:any=Taro.getSystemInfoSync().statusBarHeight

const Index=()=> {

    return (
        <View className={'index-container'} style={{paddingTop:statusBarHeight+14}}>
            <View className={'header'}>
                首页
            </View>
            <Swiper/>
            <Navigation/>
            <Callboard/>
            <New/>
            <Top/>
            <Tabbar/>
        </View>
    )
}
export default Index
