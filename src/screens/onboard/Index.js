// GetStartedScreen.js

import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import appStyle from '../../styles/StyleSheet';

const WelcomeOnBoard = ({navigation}) => {

    return (
        <View style={styles.container}>
            {/*<StatusBar hidden />*/}

            <View style={styles.topSection}>

                <Image
                    source={require('../../../assets/onboard/get-started.png')}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>

            <View style={styles.bottomSection}>

                <View style={[appStyle.textCenter, appStyle.mt25,appStyle.centerView]}>
                    <Text style={appStyle.h2title}>You have Successfully Onboarded!</Text>
                    <Text style={[appStyle.p, appStyle.mt15]}>Let’s Personalise Your Account</Text>
                </View>

                <TouchableOpacity style={[appStyle.btnPrimary,appStyle.w100]} onPress={() => navigation.navigate('Location')}>
                    <Text style={[appStyle.btnTextWhite]}>
                        Next
                        <Image
                            source={require('../../../assets/next-icon.png')}
                            resizeMode="cover"
                        />
                    </Text>

                </TouchableOpacity>

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
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 0,
    },
    image: {
        width: '88%',
        height: '90%',
    },
    bottomSection: {
        flex: 0.4,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 20,
        alignItems: 'center',
    },

});

export default WelcomeOnBoard;
