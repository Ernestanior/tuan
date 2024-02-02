import {useCallback, useState} from 'react'
import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
import './index.less'
import Header from "./component/header";
import Nav from "./component/nav";
import Main from "./component/main";
import Group from "./component/group";
import Comment from "./component/comment";

export default function Index () {
    const [nav,setNav]=useState<number>(3)

    const jumpTo=useCallback((nav:number)=>{
        setNav(nav)
        const selector=nav===3?'.merchant-main':nav===4?'.merchant-group':'.merchant-comment'
        Taro.pageScrollTo({selector})
    },[nav])

    return (
        <>
            <View className='merchant-container'>
                <Header/>
                <Nav nav={nav} onChangeNav={(nav)=>jumpTo(nav)}/>
                <Main/>
                <Group />
                <Comment/>
            </View>

        </>

    )
}
