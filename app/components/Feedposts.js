import {View,FlatList,ActivityIndicator } from 'react-native';
import React, { useState,useEffect } from 'react';
import {connect} from 'react-redux'
import { withNavigation } from '@react-navigation/compat';
import * as actions from '../actions/feedactions'
import {PostCard} from '../components/PostCard'
import { colors } from '../styles';

const Feedposts = (props)=> {
  const [listdata, setListdata] = useState([]);
  const {isfetching,isrefreshing} = props;

  useEffect(()=> {
    if(!isfetching && !isrefreshing)
    {
      props.FetchPosts() 
    }
  },[])
  const renderItem =({item,idex})=>
  {
    console.log(item)
    return(
      <PostCard item={item}/>
    )
  }
  const onRefresh=()=>
  {
    const {user,isfetching,isrefreshing} = props;
    if(!isfetching && !isrefreshing)
    {
      props.FetchRefreshPosts()
    }
  }
  const onEndReached = ()=>
  {
    const {isfetching} = props;
    if( !isfetching){
      props.FetchMorePosts()
    }
  }
  const renderFooter = () => {
    if(!props.isfetching) return <View />;
    return (<ActivityIndicator/>);
  }

  return (
    <FlatList
    keyboardShouldPersistTaps={'handled'}
    ref={(list) => myFlatList = list}
    data = {props.posts}
    keyExtractor={(item, index) => item.email + index}
    renderItem={renderItem}
    onRefresh={onRefresh}
    refreshing={props.isrefreshing}
    onEndReachedThreshold={0.01}
    onEndReached={onEndReached}
    ListFooterComponent={renderFooter}
    showsVerticalScrollIndicator={false}
  />
);
}
function mapStateToProps(state)
{
  return {
    posts:state.FeedReducer.posts,
    isfetching:state.FeedReducer.isfetching,
    isrefreshing:state.FeedReducer.isrefreshing,
    listcursor:state.FeedReducer.listcursor,
    error:state.FeedReducer.error
  }
}
function mapDispatchToProps (dispatch)
{
  return({
    FetchPosts:() => { dispatch(actions.FetchPosts())},
    FetchRefreshPosts:() => { dispatch(actions.FetchRefreshPosts())},
    FetchMorePosts:() => { dispatch(actions.FetchMorePosts())},
  })
}
export default withNavigation(connect(mapStateToProps,mapDispatchToProps)(Feedposts));
