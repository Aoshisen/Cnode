import React, { useEffect } from "react";
import {Card} from "antd"
import { useParams } from "react-router-dom"
import { useUser } from "../../store/action";
import { useSelector } from "react-redux";
import TopicsList from "../../component/topicsList";
import Avatar from "antd/lib/avatar/avatar";
import FromNow from "../../component/fromNow";
import {UserOutlined} from "@ant-design/icons"
function UserPage(){
    let {loginname}=useParams();
    let getData=useUser();
    let {loading,data}=useSelector(state=>state.user)
    let {recent_topics=[],recent_replies=[],avatar_url,create_at,githubUsername,score} =data;
    useEffect(()=>{
        getData(loginname)
    },[])
    console.log(loading,data)

    return (
        <div className="user_page">
            <Card loading={loading} className="user_detail">
                {/* 头像信息相关 */}
                <Avatar size={80} icon={<UserOutlined />}
                src={avatar_url}
                />
                <p>
                    用户名：{loginname} 
                    注册时间:{<FromNow time={create_at}/>}
                    积分:{score}
                </p>
              <p>github地址:<a target={`https://github.com/${githubUsername}`}>https://github.com/{githubUsername}</a></p>
            </Card>

            <Card 
            loading={loading}
            title={"最近创建的话题"}
            >
                <TopicsList loading={loading} data={recent_replies}/>
            </Card>
            <Card
            loading={loading}
            title={"最近参与的话题"}>
                <TopicsList loading={loading} data={recent_topics}/>
            </Card>


        </div>
    )
}
export default UserPage;