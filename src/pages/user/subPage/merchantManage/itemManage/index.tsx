import {useCallback, useEffect, useState} from 'react'
import {View} from '@tarojs/components'
import './index.less'
import {Button, Swipe} from "@nutui/nutui-react-taro";
import {goodDetail, goodList} from "../../../../../store/network";
import Empty from "../../../../../common/empty";
import image from '@/assets/aaa.jpeg'
import Loading from "../../../../../common/loading";
import useStore from "../../../../../store/store";
import Taro from "@tarojs/taro";

const Index = () => {
    const {setLoading,loading}=useStore()
    const [data, setData] = useState<any[]>([])

    useEffect(() => {
        setLoading(true)
        goodList({merchantId: 1}).then((res: any) => {
            console.log('good', res)
            setLoading(false)
            setData(res)
        })
    }, [])

    const toDetail = useCallback(async (id: number) => {
        const res = await goodDetail(id)
        console.log('detail', res)
    }, [])

    const toCreateItem=useCallback( () => {
        Taro.navigateTo({url:'/pages/user/subPage/merchantManage/itemCreate/index'})
    }, [])

    const handleChange = () => {
        console.log('aa')
    }

    return (
        <View className='item-manage-container'>

            <View className={'add-btn'} onClick={toCreateItem}>新增商品</View>
            <View style={{position:"relative",flex:1,display:"flex",flexDirection:"column"}}>
                {loading?<Loading/>:!!data.length?<View>
                    {data.map((item: any, index: number) =>
                        <Swipe
                            rightAction={
                                <>
                                    <Button shape="square" type="warning">
                                        修改
                                    </Button>
                                    <Button shape="square" type="danger">
                                        删除
                                    </Button>
                                </>
                            }
                            onActionClick={handleChange}
                            // onOpen={() => console.log('打开')}
                            // onClose={() => console.log('关闭')}
                            className={'food-list'}
                        >
                            <View className='food-box' key={index} onClick={() => toDetail(item.id)}>
                                <img alt="" src={image} className={'food-box-image'}/>
                                <View className='food-box-content'>
                                    <div className='title'>{item.name}</div>
                                    <div className='sale'>月售 {item.monthSell}</div>
                                    <div className='price'>
                                        <span className='team-price'>团购价 ￥{item.promotionPrice}</span>
                                        /
                                        <span className='normal-price'>￥{item.originalPrice}</span></div>

                                </View>
                            </View>
                        </Swipe>)}</View>:<Empty/>}
            </View>

        </View>
    )
}
export default Index;
