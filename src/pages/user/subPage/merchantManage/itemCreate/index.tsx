import {useState} from 'react'
import { View } from '@tarojs/components'
import './index.less'
import {Button, Form, Input, Uploader} from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";
import {init_url} from "../../../../../store/request";
import {IconFont} from "@nutui/icons-react-taro";
const Index=()=> {
    const [type,setType]=useState<string[]>([''])
    const onSubmit = (e) => {
        console.log(e)
        // console.log(uploadRef.current)
    }

    const onBlur=(e,index)=>{
        setType(type.map((v,i)=>i===index?e:v))
    }
    const beforeXhrUpload = async(_, options: any) => {
        // const file = await fileToBase64(options.taroFilePath)
        // const result = await fileUploadBase64([file])
        // console.log('result',result)
        // console.log(options)
        Taro.uploadFile({
            url: init_url+'/file/upload',
            filePath: options.taroFilePath,
            name: 'file',
            formData:{
                'user': 'test'
            },
            success: function (res){
                console.log('lll',res)
                //do something
            }
        })
    }

        return (
            <View className='food-create-container'>
                <Form divider labelPosition="left" onFinish={onSubmit}
                    footer={
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                width: '100%',
                                position:"fixed",
                                bottom:50
                            }}
                        >
                            <Button formType="submit" type="primary">
                                下一步
                            </Button>
                        </div>
                    }
                >
                    <Form.Item label="商品名称" name="label">
                        <Input placeholder="请输入商品名称" type="text" />
                    </Form.Item>
                    <Form.Item label="备注" name="remark">
                        <Input placeholder="请输入商品备注" type="text" />
                    </Form.Item>
                    <View style={{display:"flex",padding:"8px 28px"}}>
                        <span style={{fontSize:13,marginRight:50}}>类型</span>
                        <View>
                            {type.map((_,index)=>
                                <View style={{display:"flex",width:200,alignItems:"center"}}>
                                    <Input className={'type-input'} placeholder="请输入类型" type="text" onBlur={(e)=>onBlur(e,index)} />
                                    {index===type.length-1 && <IconFont onClick={()=>setType([...type,''])} style={{color:"#aaa"}} name={'plus1'} fontClassName="iconfont" classPrefix='icon' size={25}/>}
                                </View>
                            )}
                        </View>
                    </View>
                </Form>
                {/*<Button onClick={onUpload}>点击</Button>*/}
                {/*{image && <img src={image}/>}*/}
                <Uploader
                    method={'put'}
                    url={init_url+'/file/upload'}
                    beforeXhrUpload={beforeXhrUpload}
                    maxCount={5}
                />
            </View>
        )
}
export default Index;
