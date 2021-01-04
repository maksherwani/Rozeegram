import {
    Platform,
    StyleSheet,
  } from 'react-native';
  import { colors,fonts } from '../styles/index'

  export const Appstyles = StyleSheet.create({
    homeheader:
    {fontSize: 30,fontFamily: fonts.Billabong,color:colors.black},
    comingSoonText:
    {fontFamily:fonts.Remachine,alignSelf:'center',fontSize:40},
    activeTabtext:
    {color:colors.black,fontFamily:fonts.Lato_Bold,fontSize:17},
    unactiveTabtext:
    {color:colors.lightgr,fontFamily:fonts.Lato_Regular},
    RozeeText:
    {fontFamily: fonts.Billabong,alignSelf:'center',fontSize:70,color:colors.white},
    Rozeeslogan:
    {fontFamily: fonts.Lato_MediumItalic,alignSelf:'center',fontSize:24,color:colors.white},
    Getstarted:
    {fontFamily: fonts.Lato_Regular,alignSelf:'center',fontSize:20,color:colors.black},


  })