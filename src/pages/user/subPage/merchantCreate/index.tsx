import { View } from '@tarojs/components'
import './index.less'
import {Button, Form, Input, Uploader} from "@nutui/nutui-react-taro";
import {init_url} from "../../../../store/request";
import {fileUploadBase64} from "../../../../store/network";
import {fileToBase64} from "../../../../common/ulit";
const Index=()=> {
    const onSubmit = (e) => {
        console.log(e)
        // console.log(uploadRef.current)
    }
    const beforeXhrUpload = async(_, options: any) => {
        const file = await fileToBase64(options.taroFilePath)
        const result = await fileUploadBase64([file])
        console.log('result',result)

        // Taro.uploadFile({
        //     url: init_url+'/file/upload',
        //     filePath: options.taroFilePath,
        //     name: 'file',
        //     formData:{
        //         'user': 'test'
        //     },
        //     success: function (res){
        //         console.log('lll',res)
        //         //do something
        //     }
        // })
    }

        return (
            <View className='food-list-container'>
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
                    <Form.Item label="商店名称" name="label">
                        <Input placeholder="请输入商店名称" type="text" />
                    </Form.Item>
                    <Form.Item label="联系人" name="name">
                        <Input placeholder="请输入联系人姓名" type="text" />
                    </Form.Item>
                    <Form.Item label="联系手机" name="contact">
                        <Input placeholder="便于后续联系开店事宜" type="number" />
                    </Form.Item>
                </Form>
                {/*<Button onClick={onUpload}>点击</Button>*/}
                {/*{image && <img src={image}/>}*/}
                <Uploader
                    method={'put'}
                    url={init_url+'/file/upload'}
                    beforeXhrUpload={beforeXhrUpload}
                />
            </View>
        )
}
export default Index;
