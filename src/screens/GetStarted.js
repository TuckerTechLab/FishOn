// GetStartedScreen.js

import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StatusBar} from "expo-status-bar";

import appStyle from '../styles/StyleSheet';

const GetStarted = ({navigation}) => {

    return (
        <View style={styles.container}>
            {/*<StatusBar hidden />*/}

            <View style={styles.topSection}>

                <Image
                    source={require('../../assets/onboard/get-started.png')}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>

            <View style={styles.bottomSection}>

                <Text style={appStyle.h2}>Let's get started</Text>
                <Text style={appStyle.p}>Everything is started from here</Text>

                <View style={[appStyle.dFlex,appStyle.JustifyContentBetween]}>
                    <TouchableOpacity  onPress={() => navigation.navigate('HomeScreen')} >
                        <Text>Home Screens</Text>
                    </TouchableOpacity>
                    {/*<TouchableOpacity style={[appStyle.mx20]}>*/}
                    {/*    <Text>...</Text>*/}
                    {/*</TouchableOpacity>*/}

                    {/*<TouchableOpacity >*/}
                    {/*    <Text>...</Text>*/}
                    {/*</TouchableOpacity>*/}

                </View>

                <TouchableOpacity style={[appStyle.btnPrimary,appStyle.w100,appStyle.my20]} onPress={() => navigation.navigate('Login')}>
                    <Text style={appStyle.btnTextWhite}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[appStyle.btnPrimaryOutline,appStyle.w100]} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={appStyle.btnTextPrimary}>Sign Up</Text>
                </TouchableOpacity>

                <View style={appStyle.dividerContainer}>
                    <View style={appStyle.dividerLine}/>
                    <Text style={appStyle.orText}>or</Text>
                </View>


                <View style={appStyle.socialIconsContainer}>
                    <TouchableOpacity style={appStyle.socialIcon}>
                        <Image source={require('../../assets/onboard/gmail.png')} style={appStyle.socialIconImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={appStyle.socialIcon}>
                        <Image source={require('../../assets/onboard/facebook.png')} style={appStyle.socialIconImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={appStyle.socialIcon}>
                        <Image source={require('../../assets/onboard/gmail.png')} style={appStyle.socialIconImage}/>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    topSection: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        // Set your background color
    },
    image: {
        width: '100%',
        height: '100%',
    },
    bottomSection: {
        flex: 0.5,
        justifyContent: 'center',
        paddingHorizontal: 20,
        alignItems: 'center'
    },

});

export default GetStarted;
