import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors,fonts,Appstyles } from '../styles/index'
import React, { useState } from 'react';
import {home} from '../tabs/index';
import Icon from 'react-native-vector-icons/Feather';
import {View} from 'react-native';
import {Tab,Tabs,TabHeading,Text,Button} from 'native-base';
import { createSwitchNavigator } from '@react-navigation/compat';

export const Welcome = (props) => {
  return (
    <View style={{justifyContent:'center',flex:1,backgroundColor:colors.black}}>
    <Text style={Appstyles.RozeeText}>Rozeegram</Text>
    <Text style={Appstyles.Rozeeslogan}>Agay Barho!</Text>
    </View>
  );
}
const comments = (props) => {
  return (
    <View style={{justifyContent:'center',flex:1}}>
    <Text style={Appstyles.comingSoonText}>Coming Soon!</Text>
    </View>
  );
}
const send = (props) => {
  return (
    <View style={{justifyContent:'center',flex:1}}>
    <Text style={Appstyles.comingSoonText}>Coming Soon!</Text>
    </View>
  );
}
const myprofile = (props) => {
  return (
    <View style={{justifyContent:'center',flex:1}}>
    <Text style={Appstyles.comingSoonText}>Coming Soon!</Text>
    </View>
  );
}
const discover = (props) => {
  return (
    <View style={{justifyContent:'center',flex:1}}>
    <Text style={Appstyles.comingSoonText}>Coming Soon!</Text>
    </View>
  );
}
const notifications = (props) => {
  const [activeIndex, setState] = useState(0);
  return (
  
    <Tabs tabBarUnderlineStyle={{backgroundColor: colors.black}} onChangeTab={({ i }) => setState( i )}>
    <Tab style={{backgroundColor:colors.searchlistgrey}}  heading={ <TabHeading style={{backgroundColor:colors.white}}><Text style={[ activeIndex=== 0 ? Appstyles.activeTabtext :Appstyles.unactiveTabtext ]}>Following</Text></TabHeading>}>
    <View style={{justifyContent:'center',flex:1}}> 
    <Text style={Appstyles.comingSoonText}>Coming Soon!</Text>  
    </View>
    </Tab>
     <Tab style={{backgroundColor:colors.searchlistgrey}} heading={ <TabHeading style={{backgroundColor:colors.white}}><Text style={[activeIndex=== 1 ? Appstyles.activeTabtext  :Appstyles.unactiveTabtext ]}>You</Text></TabHeading>}>
     <View style={{justifyContent:'center',flex:1}}> 
     <Text style={Appstyles.comingSoonText}>Coming Soon!</Text>  
    </View> 
     </Tab>
    </Tabs>    
 
  );
}
const post = (props) => {
  return (
    <View style={{justifyContent:'center',flex:1}}>
    <Text style={Appstyles.comingSoonText}>Coming Soon!</Text>      
    </View>
  );
}
const NewsStack = createStackNavigator();
const NewsFlow = ()=> {
  return (
    <NewsStack.Navigator
    screenOptions={{
      headerTitleAlign:'center',
      headerTitle:'Rozeegram',
      headerTitleStyle:Appstyles.homeheader,
      headerBackTitle:null,
      gestureEnabled:true,
      headerLeft:()=> <Button onPress={()=>alert("Coming Soon!")} transparent style={{paddingLeft:10}}><Icon name={"camera"} size={24} /></Button>,
      headerRight:()=> <Button onPress={()=>alert("Coming Soon!")} transparent style={{paddingRight:10}}><Icon name={"send"} size={24} /></Button>

    }}>
      <NewsStack.Screen name="home" component={home} />
      <NewsStack.Screen name="comments" component={comments} />
      <NewsStack.Screen name="send" component={send} />

    </NewsStack.Navigator>
  );
}

const DiscoverStack = createStackNavigator();
const DiscoverFlow = ()=> {
  return (
    <DiscoverStack.Navigator
    screenOptions={{
      headerTitleAlign:'center',
      headerTitle:'Rozeegram',
      headerTitleStyle:Appstyles.homeheader,
      headerBackTitle:null,
      gestureEnabled:true,
    }}>
      <DiscoverStack.Screen name="discover" component={discover} />
    </DiscoverStack.Navigator>
  );
}

const PostStack = createStackNavigator();
const PostFlow = ()=> {
  return (
    <PostStack.Navigator
    screenOptions={{
      headerTitleAlign:'center',
      headerTitle:'Rozeegram',
      headerTitleStyle:Appstyles.homeheader,
      headerBackTitle:null,
      gestureEnabled:true,
    }}>
      <PostStack.Screen name="post" component={post} />
    </PostStack.Navigator>
  );
}

const NotificationStack = createStackNavigator();
const NotificationFlow = ()=> {
  return (
    <NotificationStack.Navigator
    screenOptions={{
      headerTitleAlign:'center',
      headerTitle:'Rozeegram',
      headerTitleStyle:Appstyles.homeheader,
      headerBackTitle:null,
      gestureEnabled:true,
    }}>
      <NotificationStack.Screen name="notifications" component={notifications} />
    </NotificationStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();
const Profilelow = ()=> {
  return (
    <ProfileStack.Navigator
    screenOptions={{
      headerTitleAlign:'center',
      headerTitle:'Rozeegram',
      headerTitleStyle:Appstyles.homeheader,
      headerBackTitle:null,
      gestureEnabled:true, 
      headerRight:()=> <Button onPress={()=>alert("Coming Soon!")} transparent style={{paddingRight:10}}><Icon name={"align-justify"} size={24} /></Button>

    }}>
      <ProfileStack.Screen name="myprofile" component={myprofile} />
    </ProfileStack.Navigator>
  );
}
  //Tabs
  const AppTab = createBottomTabNavigator();
  export const AppNavigation = () => {
  return (
      <AppTab.Navigator
      initialRouteName="home"
      tabBarOptions={{ 
        activeTintColor: colors.black,
        inactiveTintColor:colors.lightgr,
        labelStyle: {
          fontSize:  12
        },
        style: {
          borderTopWidth:0,
          borderColor:colors.lightgr,
          elevation:0
        } 
      }}>
      <AppTab.Screen name="home" component={NewsFlow}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (<Icon name={"home"}  style={{color:color}} size={size} />)}}/>
      <AppTab.Screen name="discover" component={DiscoverFlow}
          options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color, size }) => (<Icon name={"search"} style={{color:color}} size={size} />)}}/>
      <AppTab.Screen name="post" component={PostFlow}
        options={{
          tabBarLabel: 'Post',
          tabBarIcon: ({ color, size }) => (<Icon name={"plus-circle"} style={{color:color}} size={size} />)}}/>
      <AppTab.Screen  name="notifications" component={NotificationFlow}
          options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color, size }) => (<Icon name={"heart"} size={size} style={{color:color}}/>) }}/>
      <AppTab.Screen name="myprofile" component={Profilelow}
          options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (<Icon name={"user"} style={{color:color}} size={size}  />)}} />
      </AppTab.Navigator>
    );
}


 