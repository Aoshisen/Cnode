// 因为很多地方都用到了这个组件
// 所以把他提取出来作为一个公共的组件在使用的时候需要传入time

import moment from "moment";
import "moment/locale/zh-cn"
export default function FromNow(props){
    moment.locale('zh-cn'); 
    let {time}=props
    return moment(time).fromNow()
}