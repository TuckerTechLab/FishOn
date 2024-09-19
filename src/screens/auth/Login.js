import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

import appStyle from '../../styles/StyleSheet';

const Login = ({navigation}) => {
    return (
        <View style={[styles.container,appStyle.appContainer,appStyle.px20]}>
            {/*<StatusBar hidden />*/}

            <TouchableOpacity style={appStyle.btnBack} onPress={() => navigation.navigate('GetStarted')}>
                <Text style={appStyle.backBtnText}>
                    <Image
                        source={require('../../../assets/Back.png')}
                        style={styles.image}
                        resizeMode="cover"
                    /> Back</Text>
            </TouchableOpacity>
            <Text style={appStyle.title}>Welcome Back</Text>

            <View style={appStyle.formGroup}>
                <Text style={appStyle.label}>Email or username</Text>
                <TextInput
                    style={appStyle.input}
                    placeholderTextColor="#888"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <View style={appStyle.formGroup}>
                <Text style={appStyle.label}>Password</Text>
                <TextInput
                    style={appStyle.input}
                    placeholderTextColor="#888"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>


            <View style={{marginTop: 20}}>
                <TouchableOpacity style={appStyle.btnPrimary} onPress={() => navigation.navigate('WelcomeOnBoard')}>
                    <Text style={appStyle.btnTextWhite}>Sign In</Text>
                </TouchableOpacity>
            </View>

            <View style={appStyle.dividerContainer}>
                <View style={appStyle.dividerLine}/>
                <Text style={appStyle.orText}>or</Text>
            </View>


            <View style={appStyle.centerView}>
                <View style={appStyle.socialIconsContainer}>
                    <TouchableOpacity style={appStyle.socialIcon}>
                        <Image source={require('../../../assets/onboard/gmail.png')} style={appStyle.socialIconImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={appStyle.socialIcon}>
                        <Image source={require('../../../assets/onboard/facebook.png')} style={appStyle.socialIconImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={appStyle.socialIcon}>
                        <Image source={require('../../../assets/onboard/gmail.png')} style={appStyle.socialIconImage}/>
                    </TouchableOpacity>
                </View>
            </View>


            {/*<View style={styles.dFlex}>*/}
            {/*    <Text>Already Have an Account?</Text>*/}
            {/*     <TouchableOpacity>*/}
            {/*        <Text>Login</Text>*/}
            {/*    </TouchableOpacity>*/}
            {/*</View>*/}

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    image: {},



});
export default Login;