import axios from 'axios'


//封装参数
//参数1：get/post,参数2：api地址，参数3：参数对象params，参数4：回调函数callback

//定义变量保存服务器地址和资源服务器地址
export const SERVER_IP=`http://172.16.12.59:3333`
export const SOURCES_IP=`http://172.16.12.59:3344`

//封装请求
export function req(api,callback,params={},methods='get'){
    //1.先封装一个请求地址（后端提供）
    let reqUrl=SERVER_IP+api

    //2.根据请求类型get 或者 post调用axios，这里用容错方式，不管用户输入大小写全部转为大写toUpperCase()
    //进行判断
    if(methods.toUpperCase()==='GET'){
        axios.get(reqUrl,{params}).then(callback)
    }else if(methods.toUpperCase()==='POST'){
        axios.get(reqUrl,params).then(callback)
    }

}