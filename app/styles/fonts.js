import { StyleSheet,Platform,Dimensions } from 'react-native';

export const fonts = {
  Billabong :Platform.OS === 'ios' ? 'Billabong' : 'Billabong',
  NeoSans_Light: Platform.OS === 'ios' ? 'NeoSansStd-Light'  : 'Neo_Sans_Std_Light' ,
  NeoSans_Bold: Platform.OS === 'ios' ? 'NeoSansStd-Bold'  : 'Neo_Sans_Std_Bold' ,
  NeoSans_Regular: Platform.OS === 'ios' ? 'NeoSansStd-Regular'  : 'Neo_Sans_Std_Regular' ,
  Remachine :Platform.OS === 'ios' ? 'RemachineScriptPersonalUse' : 'Re_machine_Script',
  Lato_LightItalic:Platform.OS === 'ios' ? 'Lato-LightItalic' : 'Lato_LightItalic',
  Lato_Black: Platform.OS === 'ios' ? 'Lato-Black' : 'Lato_Black',
  Lato_Light:Platform.OS === 'ios' ? 'Lato-Light' : 'Lato_Light',
  Lato_Bold:Platform.OS === 'ios' ? 'Lato-Bold' : 'Lato_Bold',
  Lato_BoldItalic:Platform.OS === 'ios' ? 'Lato-BoldItalic' : 'Lato_BoldItalic',
  Lato_Medium:Platform.OS === 'ios' ? 'Lato-Medium' : 'Lato_Medium',
  Lato_Italic:Platform.OS === 'ios' ? 'Lato-Italic' : 'Lato_Italic',
  Lato_MediumItalic:Platform.OS === 'ios' ? 'Lato-MediumItalic' : 'Lato_MediumItalic',
  Lato_Regular:Platform.OS === 'ios' ? 'Lato-Regular' : 'Lato_Regular',
}
