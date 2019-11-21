import React from 'react';
import { StatusBar, View, Dimensions, Platform } from 'react-native';
import { wp, hp } from './ResponsiveScreen';

const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[{ height: hp('3%'), justifyContent: 'center' }, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);
const MystatusBar_Tran = () => {
    return (
        <View>{Platform.OS == "android" ? null : <MyStatusBar barStyle="light-content" />}</View>
    )
}

export { MystatusBar_Tran };