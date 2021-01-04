import {View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {PostCard} from '../components/PostCard'
import { colors } from '../styles';
import axios from 'react-native-axios';
import Feedposts from '../components/Feedposts'

const home = (props) => { 
  return ( 
    <View style={{backgroundColor:colors.white}}>
      <Feedposts/>
    </View>  
  );
} 

export default home;   
 