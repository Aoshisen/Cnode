import React from "react";
import { Tag } from "antd";


export default function TopicTag(props){
    let {tab} =props;
    // console.log(tab)
    switch(tab){
        case "top":
          return <Tag color="#87d068" className="topic_tag">{"置顶"}</Tag>
          case "good":
    return <Tag color="#f50" className="topic_tag">{"精华"} </Tag>
            case "share":
    return <Tag color="green" className="topic_tag">{"分享"}</Tag>
          case "ask":
    return <Tag color="gold" className="topic_tag">{"问答"}</Tag>
          case "dev":
          return <Tag color="purple" className="topic_tag">{"测试"}</Tag>
          case "job":
    return <Tag color="blue" className="topic_tag">{"招聘"}</Tag>
          default:
              return null
    }
    
}