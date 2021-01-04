import { Thumbnail,Button,ListItem,Right,Left,CardItem,Text,Body,Badge,CheckBox,Label,Form,Card } from 'native-base';
import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import PostImage from '../components/PostImage'
import { colors, fonts } from '../styles';
import moment from "moment";

const FooterButton = (props)=>
{
  return(
    <Button transparent onPress={props.onPress}>
      <Icon name={props.name} color={props.color} size={26}/>
    </Button>
  )
}
const LikeButton = (props)=>
{
  return(
    <Button transparent onPress={props.onPress}>
      <FontAwesome name={props.name} color={props.color} size={26}/>
    </Button>
  )
}
const CardHeader = (props)=>
{
    return(
        <CardItem transparent style={{borderBottomWidth:0.3,borderBottomColor:colors.silver,paddingLeft:5}}>
         <Left>
          <Thumbnail small style={{height:30,width:30}} source={{uri: props.avatar}} />
          <Body>
    <Text style={{fontSize:14,fontFamily:fonts.Lato_Bold}}>{props.first_name} {props.last_name}</Text>
          </Body>
        </Left>
          <Right>
            <Icon name={"more-horizontal"} size={20}/>
          </Right>
      </CardItem>
    )
}

const CardFooter = (props)=>
{
  const [like, setLike] = useState(false);
  const navigation = useNavigation();
  return(
        <CardItem transparent style={{paddingBottom:0,paddingTop:0}}>
            <Left>
              {like ? <LikeButton onPress={()=>setLike(false)} name={"heart"} color={colors.error}/> : <FooterButton onPress={()=>setLike(true)}  name={"heart"}/>}
              <FooterButton name={"message-circle"} onPress={()=>navigation.navigate('comments')}/>
              <FooterButton name={"send"} onPress={()=>navigation.navigate('send')}/>
            </Left>
          <Right>
              <FooterButton name={"bookmark"}/>
          </Right>
      </CardItem>
    )
}

export const PostCard = (props)=>
{
  let timestamp = "2015-06-21T06:24:44.124Z";
  const {avatar,first_name,last_name,dateUnix} = props.item;
    return( 
      <Card transparent style={{backgroundColor:colors.white}}>
        <CardHeader avatar={avatar} first_name={first_name} last_name={last_name}/>
        <PostImage source={{uri: avatar}}/>
        <CardFooter/>
        <Text style={{paddingLeft:15}}>
        <Text style={{fontSize:13,fontFamily:fonts.Lato_Regular}}>101</Text>
        <Text style={{fontSize:13,fontFamily:fonts.Lato_Bold}}> likes</Text>
        {'\n'} 
        <Text style={{fontSize:14,fontFamily:fonts.Lato_Bold}}>{first_name}</Text>
        <Text style={{fontSize:13,fontFamily:fonts.Lato_Regular}}> This is Caption Text</Text>
        {'\n'} 
      <Text style={{color:colors.lightgr,fontFamily:fonts.Lato_Regular,fontSize:11}}>{moment(dateUnix).fromNow()}</Text>
        </Text>
      </Card> 
        
    )

}