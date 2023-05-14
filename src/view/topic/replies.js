import React from "react"
import {Card,List,Comment,Avatar} from "antd"
import {Link} from "react-router-dom"
import {UserOutlined} from "@ant-design/icons"
import FromNow from "../../component/fromNow";
export default function Replies(props){
    let {data=[],loading}=props;
    data.reverse();
    return <Card title="评论列表"
    loading={loading}
    >
        <List dataSource={data}
         renderItem={(itemData)=>{

             let {content,author,create_at}=itemData
             let {avatar_url,loginname}=author
             return <List.Item>
             
             <Comment 
             author={<Link to={`/user/${loginname}`}>{loginname}</Link>}
             avatar={<Avatar icon={UserOutlined}
             src={avatar_url}
            //  title={loginname}
                     />}
             content={<div dangerouslySetInnerHTML={{__html:content}}></div>}
             datetime={<time>发表于：<FromNow time={create_at}/></time>}
             />
             </List.Item>
         }}
         pagination={{simple:true}}
        />
    </Card>
}