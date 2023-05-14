import React, { Fragment } from "react"
import {Card} from "antd"
import TopicTag from "../../component/topicTag";
import {Link} from "react-router-dom"
import FromNow from "../../component/fromNow"
export default function Details(props){
    let {loading,data}=props;
    //這裡的坑，由於之前沒有拿到數據，導致所有的數據都是unddfined所以會有報錯阿
    //在之前的列表裡面表現不明顯，因為列表的信息加載不完是不會顯示數據的，但是卡片不一樣，只要把reducer裡面的topic.js做一下修改就行
    let {author,content,good,top,tab,title,create_at,author_id,visit_count}=data;
    return (
        <Card
        bordered
        loading={loading}
        title={
            <Fragment>
                <h1><TopicTag tab={top?"top":(good?"good":tab)}/>{title}</h1>
        <p>-作者：<Link to={`/user/${author_id}`}>{author.loginname}</Link>
        -創建時間：{<FromNow time={create_at}/>}
        - 浏览人数：{visit_count}
        </p>
            </Fragment>
        } 
        type="inner"
        >
            <div dangerouslySetInnerHTML={
                {__html:content}
            }></div>

        </Card>
    )
}