import axios from 'react-native-axios';

    const FetchpostsRequest = () => ({
    type: "FETCH_POST_REQUEST",
    });
    const FetchpostsSuccess = (values) => ({
    type: "FETCH_POSTS_SUCCESS",
    values
    });
    const FetchpostsFail = (error)  => ({
    type: "FETCH_POSTS_FAIL",
    error
    });
    const FetchpostsMoreRequest = () => ({
    type: "FETCH_MORE_POSTS_REQUEST",
    });
    const RefreshpostsRequest = () => ({
    type: 'REFRESH_START',
    });
    const RefreshpostsSuccess = (values) => ({
    type: 'REFRESH_SUCCESS',
    values
    });
    const RefreshpostsFail = (error) => ({
    type: 'REFRESH_FAIL',
    error
     });  
 
    const payload = {
        "token": "aUpeH0x5wL3oAlX9wi-0tg",
        "data": {
          "first_name": "nameFirst",
          "last_name": "nameLast",
          "email": "internetEmail",
          "nickname": "personNickname",
           "avatar": "personAvatar",
           "naughtyQuotes":"naughtyQuotes",
           "dateUnix":"dateUnix",
           "_repeat": 3
      }
      }
    export const FetchPosts = ()=>
    {
        return async(dispatch) => {
            dispatch(FetchpostsRequest());
              axios({ 
                method: "POST",
                url: "https://app.fakejson.com/q",
                data: payload
              }).then((values)=> {
                dispatch(FetchpostsSuccess(values));
              }).catch((error)=>{
                  console.log(error.message)
                dispatch(FetchpostsFail(error));
              })
        }
    }
    export const FetchMorePosts = ()=>
    {
        return async(dispatch) => {
            dispatch(FetchpostsMoreRequest());
            axios({ 
                method: "POST",
                url: "https://app.fakejson.com/q",
                data: payload
              }).then((values)=> {
                dispatch(FetchpostsSuccess(values));
              }).catch((error)=>{
                dispatch(FetchpostsFail(error));
              })
        }
    }
    export const FetchRefreshPosts = ()=>
    {
        return async(dispatch) => {
            dispatch(RefreshpostsRequest());
            axios({ 
                method: "POST",
                url: "https://app.fakejson.com/q",
                data: payload
              }).then((values)=> {
                dispatch(RefreshpostsSuccess(values));
              }).catch((error)=>{
                dispatch(RefreshpostsFail(error));
              })
        }
    }