import React from "react"
import { Layout,Affix,Row,Col, Menu} from "antd"
import {Link, useLocation} from "react-router-dom"
import { nav } from "../router/index"
function Header(){

    //根据url找到对应的nav并返回nav的下标
    let {pathname}=useLocation();
    let activeIndex=nav.findIndex(navData=>
        pathname===navData.to 
    )
    return (
        <Affix 
        offsetTop={0}
        >
            <Layout.Header id="header">
                <div className="wrap"> 
                
                <Row>
                    <Col xs={6} sm={4} md={2}> <h1 id="logo"><Link to="/"> logo</Link></h1></Col>
                    <Col  xs={18} sm={20} md={22}>
                        <Menu mode="horizontal" theme="dark" selectedKeys={[activeIndex+'']}>
                            {
                                nav.map((item,index)=>{
                                    return <Menu.Item key={index}> <Link to={item.to}>
                                    {item.txt}
                                    </Link></Menu.Item>
                                })
                            }
                        </Menu>
                    </Col>
                </Row>
                
                </div>
            </Layout.Header>
        </Affix>
    )
}
export default Header;