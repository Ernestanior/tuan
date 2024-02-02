import Taro from "@tarojs/taro";

// 转base64
export const fileToBase64 = (filePath) => {
    return new Promise((resolve) => {
        let fileManager = Taro.getFileSystemManager();
        fileManager.readFile({
            filePath,
            encoding: 'base64',
            success: (e: any) => {
                resolve(`data:image/jpg;base64,${e.data}`);
            }
        });
    });
};
