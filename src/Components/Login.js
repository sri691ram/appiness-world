import React, { PureComponent } from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity, TextInput, Image, TouchableWithoutFeedback, Keyboard, ToastAndroid } from 'react-native';
import { hp, wp, debounce, connect } from '../Asset/Libraries/index';
import { fontSize, color } from "./../Asset/Styles/fontsAndColors"
import { MystatusBar_Tran } from "./../Asset/Libraries"

// import login action for get api response 
import { LoginAction } from './../Redux/Actions/LoginAction';

class LoginScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.loginNavigation = debounce(this.loginNavigation.bind(this), 1000, {
      leading: true,
      trailing: false,
    });

  }

  // login button
  loginNavigation() {
    if (this.state.username == '') {
      ToastAndroid.show('Enter user name', ToastAndroid.LONG);
    }
    else if (this.state.username.toLowerCase() != 'hruday@gmail.com') {
      ToastAndroid.show('Enter valid user name', ToastAndroid.LONG);
    }
    else if (this.state.password == '') {
      ToastAndroid.show('Enter password', ToastAndroid.LONG);
    } else if (this.state.password.toLowerCase() != 'hruday123') {
      ToastAndroid.show('Invalid password', ToastAndroid.LONG);
    } else {
      this.props.LoginAction(this.state.username, this.state.password);
      this.props.navigation.navigate('Dashboard')
    }
  }
  render() {

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, backgroundColor: color.white, justifyContent: 'center' }}>
          <SafeAreaView>
            <MystatusBar_Tran />
            <View style={{ height: hp('6%'), justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: fontSize.large, color: "#0cabc0" }}>Appiness Login</Text>
            </View>

            <View style={[styles.textInputView, { marginTop: hp('7%') }]}>
              <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('./../Asset/Icons/avatar.png')} style={styles.iconStyle} />
              </View>
              <View style={{ flex: 8, justifyContent: 'center' }}>
                <TextInput
                  placeholder='Username'
                  ref='Username'
                  returnKeyType='next'
                  autoCapitalize = 'none'
                  underlineColorAndroid='transparent'
                  onChangeText={(username) => this.setState({ username })}
                  onSubmitEditing={() => this.refs.Password.focus()}
                />
              </View>
            </View>

            <View style={styles.textInputView}>
              <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('./../Asset/Icons/key.png')} style={styles.iconStyle} />
              </View>
              <View style={{ flex: 8, justifyContent: 'center' }}>
                <TextInput
                  placeholder='Password'
                  ref='Password'
                  autoCapitalize = 'none'
                  underlineColorAndroid='transparent'
                  secureTextEntry={true}
                  returnKeyType="go"
                  onChangeText={(password) => this.setState({ password })}
                  onSubmitEditing={() => this.loginNavigation('login')}
                />
              </View>
            </View>

            <TouchableOpacity onPress={() => this.props.skipDebounce ? this.props.loginNavigation : this.loginNavigation()} style={styles.loginButton}>
              <Text style={{ fontSize: fontSize.Medium, color: color.white }}>Login</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  textInputView: {
    height: hp('7%'), flexDirection: 'row', borderRadius: 30, marginLeft: wp('10%'), marginRight: wp('10%'), borderColor: color.lightGray, borderWidth: hp('0.2%'), marginTop: hp('3%')
  },
  iconStyle: {
    height: wp('6%'), width: wp('6%'), tintColor: color.lightGray
  },
  loginButton: {
    height: hp('7%'), justifyContent: 'center', alignItems: 'center', borderRadius: 30, marginLeft: wp('11%'), marginRight: wp('11%'), marginTop: hp('2.5%'), backgroundColor: '#0cabc0'
  }
})


const mapStateToProps = (state) => {
  return {
    CommonReducer: state.CommonReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    LoginAction: (Username, Password) => {
      dispatch(LoginAction(Username, Password));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);