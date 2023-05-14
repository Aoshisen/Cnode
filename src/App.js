import React from 'react';
import  { route }  from "./router/index.js"
import { Switch,Route } from "react-router-dom"
import {Layout} from "antd"
import Header from './component/Header';
import Footer from './component/footer';
function App() {
  return (
    <Layout className="page">
      <Header />
      <Layout.Content>
        <div className="wrap">
        <Switch>
         {
         route.map((item,index)=>{
          //  console.log(item)
           return (<Route
           key={index}
           path={item.path}
           exact={item.exact}
           render = {(props=>{
             return item.render(props)
           })}         
           />)
          })
         } 
       </Switch>
        </div>
       
      </Layout.Content>
      <Footer />
       
    </Layout>
    );
}

export default App;
