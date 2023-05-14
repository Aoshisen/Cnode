import React, { useEffect } from "react";
import IndexNav from "./indexNav"
import TopicsList from "../../component/topicsList";
import { useSelector} from "react-redux";
import { useTopicList } from "../../store/action";
import qs from "qs"
import { useLocation } from "react-router-dom";
import IndexPagination from "./indexPagination";
function IndexPage(){
    // 拿到数据
    let {data,loading}=useSelector(state=>state.topics);
    let getData=useTopicList();
    let {search}  =useLocation();
    // console.log(search)
    let {tab="all",page=1}=qs.parse(search.substr(1));
    // console.log(tab,page)
    useEffect(()=>{
//这个函数·是在store仓库里面的，这这个函数会改变data,loading的值
        getData(tab,page)
//第二个参数是这个改变的依赖项如果不写的话会出现递归调用的情况
    },[tab,page])
    // console.log(data)
    return (
        <div>
            <IndexNav />
            <TopicsList data={data} loading={loading}/>
            {loading?"": <IndexPagination />}
        </div>
    )
}
export default IndexPage;