import React from "react"
import {Pagination} from "antd"
import qs from "qs"
import { useLocation,Link } from "react-router-dom"
export default function IndexPagination(){
    let {search}=useLocation();
    let {tab="all",page=1}=qs.parse(search.substr(1));
    // console.log(tab,page)
    return (
        <div className="index_pagination">
            <Pagination 
            // bug 修复 ant-design 里面的current 接收的是一个数字类型的字符，这里要用隐式类型转换把字符串变成数字
            current={page-0}
            defaultPageSize={20}
            total={1000}
            itemRender={
                (page,type)=>{
                    // console.log(page,type)
                    // 这里是Pagination组件里面自带的方法点击相应的功能组件就会调用相应的方法
                    switch(type){
                        case "page":
                    return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>
                    case "prev":
                    return  <Link to={`/?tab=${tab}&page=${page-1}`}>{"<"}</Link>
                    
                    case "next":
                        return  <Link to={`/?tab=${tab}&page=${page+1}`}>{">"}</Link>
                        default :
                            return  <Link to={`/?tab=${tab}&page=${page}`}>{"..."}</Link>
                  }
                }
            }
            
            />
        </div>
    )
}