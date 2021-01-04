const initialstate = {
    isfetching:false,isrefreshing:false,cursor:[],message:"",error:false,posts:[],message:"",isfetched:false
}
export const FeedReducer  =(state = initialstate, action) => {
    switch (action.type) {
        case "FETCH_POST_REQUEST":
            {
                return {isrefreshing:false,posts:[],isfetching: true,message:"",error:false};
            }
        case "FETCH_POSTS_SUCCESS":
            {
                let { values } = action;
                return {...state,posts:state.posts.concat(...values.data),isfetching: false};
            }
        case "FETCH_POSTS_FAIL":
            return { ...state,error:true,message:action.error.message,isfetching: false};
        case "FETCH_MORE_POSTS_REQUEST":   
        return {...state,isfetching: true,message:"",error:false};
        case "REFRESH_START":
            return { posts:state.posts, isrefreshing: true,message:"",error:false};
        case "REFRESH_SUCCESS":
                {
                  let { values } = action;
                  return {...state,posts:values.data,isfetching: false,isrefreshing:false};
                }
        case "REFRESH_FAIL":
            return { error:true,isrefreshing:false, message:action.error.message,isfetching: false,isfetched:false};
            default:
                return state;
        }
    

}