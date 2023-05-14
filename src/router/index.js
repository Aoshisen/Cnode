import React from "react"
import IndexPage from "../view/index/index.js"
import TopicPage from "../view/topic/index.js"
import AboutPage from "../view/about/index.js"
import GetStartPage from "../view/getstart/index.js"
import Page404 from "../view/page404/index.js"
import UserPgae from "../view/user/index.js"
import qs from 'qs'

const types=['all','good','share','ask','job','dev']

//全局导航
const route = [
    {
    path: "/",
    exact: true,
    render( props) {
        let {location}=props;
        let { search}= location;
        let { tab,page }=qs.parse(search.substr(1));
        // console.log(tab,page)
        // console.log(types)
        if((tab===undefined&&page===undefined)
        ||types.includes(tab)&&(page===undefined||Number(page)>0))
            {
              return <IndexPage {...props}/>
            }
            return <Page404  {...props}/>
    }
},
{
    path: "/topics/:id",
    exact: true,
    render( props) {
        return <TopicPage {...props} />
    }
},{
    path: "/user/:loginname",
    exact: true,
    render( props) {
        return <UserPgae {...props}/>
    }
},{
    path: "/getstart",
    exact: true,
    render( props) {
        return <GetStartPage {...props}/>
    }
},{
    path: "/about",
    exact: true,
    render( props) {
        return <AboutPage {...props}/ >
    }
},{
    path: "",
    exact: true,
    render( props) {
        return <Page404 {...props}/>
    }
}
]

{/* 头部导航 */}
const nav=[ {
    to:"/",
    txt:"首页",

},
{
    to:"/getstart",
    txt:"新手入门",

},{
    to:"/about",
    txt:"关于我们",
},
]

{/* 首页头部导航 */}
const indexHeadNav=[{
    name:"全部",
    url:"/?tab=all"
},{
    name:"精华",
    url:"/?tab=good"
},{
    name:"分享",
    url:"/?tab=share"
},{
    name:"问答",
    url:"/?tab=ask"
},{
    name:"招聘",
    url:"/?tab=job"
},{
    name:"客户端测试",
    url:"/?tab=dev"
},
]




export  {route,nav,indexHeadNav,types};