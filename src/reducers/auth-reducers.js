const INITIAL_STATE = {
    isAuth:false,
    errors:[],
    username:''
}

export const authReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case 'LOGIN_SUCCESS':
        return Object.assign({},state,{isAuth:true,token:action.token,errors:[],username:action.username});
        case 'LOGIN_FAILURE':
        return Object.assign({},state,{errors:action.errors})
        case 'LOGOUT':
        return Object.assign({},state,{isAuth:false,username:''});
        default:return state
    }
}