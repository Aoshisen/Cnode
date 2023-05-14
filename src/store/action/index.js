import axios from "axios";
import { useDispatch } from "react-redux";
const http=axios.create({
    baseURL:"https://cnodejs.org/api/v1"
})


//获取主题列表数据
function useTopicList(){

    let dispatch=useDispatch();
    //定义成一个高阶函数
    return function(tab="all",page=1,limit=20,mdrender=true){
        http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then(res=>{

            //改变状态,并向仓库里面的data赋值
            dispatch({
                type:"topics_loadingover",
                data:res.data.data
            })
        })
    }
}
// 获取主题列表详情
function useTopic(){
    let dispatch=useDispatch();
    return function(id){
        http.get(`/topic/${id}`).then(res=>{
            dispatch({
                type:"topic_loadingover",
                data:res.data.data
            })
        }).catch((res)=>{
            dispatch(
                {
                    type:"topic_error",
                    err_msg:res.response.data.error_msg
                }
            )
        })
    }
}
// 获取用户详情
function useUser(){
    let dispatch=useDispatch();
    return function(loginname){
        http.get(`/user/${loginname}`).then(res=>{
            console.log(res)
            dispatch({
                type:"user_loadingover",
                data:res.data.data,
            })
        })
    }
}
export {useTopicList,useTopic,useUser}