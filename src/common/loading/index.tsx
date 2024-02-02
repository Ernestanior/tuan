import {ConfigProvider} from "@nutui/nutui-react-taro";
import {Loading} from "@nutui/icons-react-taro";
import {View} from "@tarojs/components";

const LoadingX = ()=> {
    return <View style={{position:'absolute',right:0,left:0,top:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center",opacity:.7}}>
                <ConfigProvider theme={{ nutuiLoadingTextSize: '80px' }}>
                    <Loading style={{fontSize:40}}></Loading>
                </ConfigProvider>
            </View>
}

export default LoadingX;


