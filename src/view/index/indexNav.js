import React from "react";
import { Menu } from "antd"
import { Link, useLocation} from "react-router-dom"
import { indexHeadNav,types} from "../../router/index.js"
import qs from "qs"
function IndexNav(){
    let {search}=useLocation();
    let { tab="all" }=qs.parse(search.substr(1))
    let activeIndex=types.indexOf(tab)
    // console.log(activeIndex)
    return (
    <Menu mode="horizontal" 
    // defaultSelectedKeys={["0"]}
    selectedKeys={[activeIndex+'']}
    className="index_nav"
    >
        {
            indexHeadNav.map((item,index)=><Menu.Item key={index}>  <Link to={item.url}> { item.name}</Link></Menu.Item>)
        }
    </Menu>
    )
}
export default IndexNav;