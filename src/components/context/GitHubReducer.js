const githubReducer = (state,action) => {
    switch(action.type){
        case 'GET_USERS':
            return{
                ...state,
                users: action.payload,
                loading: false
            }
        case 'GET_USER_AND_REPOS':
            console.log(action.payload.repos)
            return {
                ...state,
                repos:action.payload.repos,
                user: action.payload.user,
                loading:false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading:false,
            }
        case 'CLEAR':
            return {
                ...state,
                users:[]
            }
        
        default:
            return state
    }
}

export default githubReducer