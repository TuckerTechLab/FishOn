import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import appStyle from "../../styles/StyleSheet";

const UploadPostsFromPastFishingExperiences = ({navigation}) => {


    return(
        <View style={[styles.container, appStyle.appContainer]}>
            <View style={[styles.section1]}>
                <View style={[appStyle.dFlex, appStyle.JustifyContentBetween, appStyle.alignItemCenter,appStyle.mb15]}>
                    <TouchableOpacity  onPress={() => navigation.navigate('WelcomeOnBoard')}>
                        <Text style={appStyle.backBtnText}>
                            <Image
                                source={require('../../../assets/Back.png')}
                                style={styles.image}
                                resizeMode="cover"
                            /> Back</Text>
                    </TouchableOpacity>

                    <Text style={appStyle.stepText}>
                        Step 10/10
                    </Text>
                </View>
                <Text style={appStyle.fs26}>Upload posts from past fishing experiences</Text>


            </View>
            <View style={styles.section2}>

                <TouchableOpacity style={[ appStyle.w100, appStyle.mb20]}

                    // onPress={() => navigation.navigate('PreferredFishingLocation')}
                >

                    <Image
                        style={[appStyle.w100]}
                        source={require('../../../assets/uploadImg.png')}
                    />

                </TouchableOpacity>


            </View>
            <View style={[styles.section3, appStyle.px20, appStyle.pt15, appStyle.btnGroup]}>
                <TouchableOpacity style={[appStyle.btnPrimary, appStyle.w50, appStyle.mr5]}
                                  onPress={() => navigation.navigate('GetStarted')}>
                    <Text style={[appStyle.btnTextWhite]}>
                        Upload Profile
                        <Image
                            style={[appStyle.nextBtnImg]}
                            source={require('../../../assets/next-icon.png')}
                        />
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity style={[appStyle.btnPrimaryOutline, appStyle.w50, appStyle.mx0]}
                                  onPress={() => navigation.navigate('GetStarted')}>
                    <Text style={[appStyle.btnTextPrimary]}>
                        Skip
                        <Image
                            style={[appStyle.nextBtnImg]}
                            source={require('../../../assets/next-icon.png')}
                        />
                    </Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    section1: {

    },
    section2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    section3: {
        justifyContent: 'center',
        alignItems: 'center',
    },

});


export default UploadPostsFromPastFishingExperiences;

