import {View} from "@tarojs/components";
import {IconFont} from "@nutui/icons-react-taro";

const Index=()=> {
    return (
        <View style={styles.empty}>
            <IconFont style={{color:"#aaa"}} name={'empty'} fontClassName="iconfont" classPrefix='icon' size={100}/>
            <span style={{fontSize:20,color:"#aaa"}}>目前无商品</span>
        </View>
    )
}
export default Index;

const styles:any={
    empty:{
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
}
