export default function user(user={
    loading:true,
    data:{},
},action){
    switch(action.type){
        case "user_loading":
            return{
                loading:true,
                data:{},
            }

        case  "user_loadingover":
            return {
                loading:false,
                data:action.data,
            }
        default:
            return user;
    }
}