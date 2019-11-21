import React, { PureComponent } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView, Text, TouchableWithoutFeedback, ScrollView, Keyboard } from 'react-native';
import { hp, wp, connect } from '../Asset/Libraries/index';
import { color } from "./../Asset/Styles/fontsAndColors"
import { MystatusBar_Tran } from "./../Asset/Libraries"

class Dashboard extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        // getting values from reducer
        const { userDetail } = this.props.CommonReducer
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1, backgroundColor: color.white }}>
                    <SafeAreaView>
                        <MystatusBar_Tran />
                        <View style={{ height: hp('8%'), justifyContent: 'center', alignItems: 'center', backgroundColor: '#0cabc0', borderBottomColor: 'grey', borderBottomWidth: hp("0.5%") }}>
                            <Text style={{ fontSize: wp('5.5%'), color: color.black }}>Employee List</Text>
                        </View>
                        <FlatList
                            data={userDetail}
                            contentContainerStyle={{ paddingBottom: hp('10%') }}
                            renderItem={({ item, index }) => (
                                <View style={{ flex: 1 }}>
                                    <ScrollView>
                                        <View style={{ height: hp("20%"), justifyContent: 'center', flexDirection: 'row', marginLeft: wp('2%'), marginRight: wp('2%'), marginTop: hp('1%'), borderRadius: 15, borderColor: 'red', borderWidth: wp('0.3%') }}>
                                            <View style={{ flex: 3, justifyContent: 'center', paddingLeft: wp('3%') }}>
                                                <View style={styles.textView}>
                                                    <Text style={styles.textStyle}>Name</Text>
                                                </View>
                                                <View style={styles.textView}>
                                                    <Text style={styles.textStyle}>Age</Text>
                                                </View>
                                                <View style={styles.textView}>
                                                    <Text style={styles.textStyle}>Gender</Text>
                                                </View>
                                                <View style={styles.textView}>
                                                    <Text style={styles.textStyle}>Email</Text>
                                                </View>
                                                <View style={styles.textView}>
                                                    <Text style={styles.textStyle}>Phone No</Text>
                                                </View>
                                            </View>
                                            <View style={{ flex: 8, justifyContent: 'center' }}>
                                                <View style={styles.textView}>
                                                    <Text style={styles.textStyle}>: {item.name}</Text>
                                                </View>
                                                <View style={styles.textView}>
                                                    <Text style={styles.textStyle}>: {item.age}</Text>
                                                </View>
                                                <View style={styles.textView}>
                                                    <Text style={styles.textStyle}>: {item.gender}</Text>
                                                </View>
                                                <View style={styles.textView}>
                                                    <Text style={styles.textStyle}>: {item.email}</Text>
                                                </View>
                                                <View style={styles.textView}>
                                                    <Text style={styles.textStyle}>: {item.phoneNo}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </ScrollView>
                                </View>
                            )}
                        />
                    </SafeAreaView>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
const styles = StyleSheet.create({
    textView: {
        flex: 1, justifyContent: 'center'
    },
    textStyle: {
        fontSize: wp('4.0'), color: color.black
    },
})
const mapStateToProps = (state) => {
    return {
        CommonReducer: state.CommonReducer
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);