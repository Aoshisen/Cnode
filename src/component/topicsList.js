import React from "react"
import { List,Col } from "antd"
import Avatar from "antd/lib/avatar/avatar"
import { UserOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom"
import TopicTag from "./topicTag";
import FromNow from "./fromNow"

function TopicsList(props){
    let {loading,data}= props
    return (
        <List
        className="topics_list"
        loading={loading}
        dataSource={data}
        renderItem={(data)=>{
            let {author,last_reply_at,good,top,title,id,tab}= data
            // console.log(data)
            let {loginname,avatar_url}=author
            return <List.Item>
                <Col 
                xs={24}
                md={20}
                >
                {/* 主体内容 */}
                {/* 头像 */}
                <Link to={`/user/${loginname}`}>
                <Avatar size={32} icon={<UserOutlined/>} src={avatar_url} onError={(error)=>{console.log(error)}} title={loginname}> </Avatar>
                {/* 头像后面的tag */}
                <TopicTag tab={top?"top":(good?"good":tab)}/>
                </Link>
                {/* 后面文字跳转到用户详情页面 */}
                <Link to={`/topics/${id}`} className={tab?"":'item_title'}>{title} </Link>
                </Col>

                <Col 
                xs={0}
                md={4}
                className="from_now"
                > 
                {<FromNow time={last_reply_at}/>}
                </Col>
            </List.Item>
        }}
        />
    )
}
export default TopicsList;