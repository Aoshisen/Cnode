import React, { useEffect, Fragment } from "react";
import {useSelector} from "react-redux";
import {useParams, useHistory} from "react-router-dom"
import {Alert} from "antd"
import { useTopic } from "../../store/action";
import Detail from "./detail"
import Replies from "./replies";
function TopicPage(){
    let {id} =useParams();
    console.log(id)
    let getData=useTopic();
    let history=useHistory();
    let {loading,data,isError,err_msg}=useSelector(state=>state.topic)
    useEffect(()=>{
        getData(id)
    },[id])
    // console.log(loading,data,isError,err_msg)
    // useSelector(state=>console.log(state))
    return (
    <div className="topic">{isError?(
    <Alert 
        closable
        message={'请求出错'}
        description={
            <Fragment>
                <p>{err_msg}</p>
                <p>点击关闭按钮返回上一页</p>
            </Fragment>
        }
        afterClose={()=>{
            history.goBack();

        }}
        />)
        :
        (<Fragment>

            <Detail loading={loading} data={data}/>
            <Replies loading={loading} data={data.replies}/>
            
            </Fragment>)
        }</div>
    )
}
export default TopicPage;