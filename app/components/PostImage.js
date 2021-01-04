import * as Progress from 'react-native-progress';
import {Dimensions} from 'react-native';
import React, { useState } from 'react';
import { colors } from '../styles/index'
const  {width,height} = Dimensions.get('window');
import FastImage from 'react-native-fast-image'
import { createImageProgress } from 'react-native-image-progress';
const Image = createImageProgress(FastImage);
 
const PostImage =(props)=> {
  const [bgcolor, setBgcolor] = useState(colors.searchlistgrey);
  const onError = () =>
  {
    setBgcolor(colors.searchlistgrey)
  }
  const onLoad = ()=>
  {
    setBgcolor('transparent')
  }
  return(
 
     <Image
    {...props}
    resizeMode={FastImage.resizeMode.contain}
    overflow= 'hidden'
    onError={onError}
    onLoad={onLoad}
    backgroundColor={bgcolor}
    indicator={Progress.Circle}
    indeterminate={false}
    hidesWhenStopped={true}
    indicatorProps={{
      size: 40,
      borderWidth: 0,
      color: colors.lightgr
    }}
    style={{borderWidth: 0,height:width}}
    />
 


  )
}
export default PostImage;
