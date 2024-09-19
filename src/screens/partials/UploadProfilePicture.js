import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import appStyle from "../../styles/StyleSheet";

const UploadProfilePicture = ({navigation}) => {


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
                        Step 7/10
                    </Text>
                </View>
                <Text style={appStyle.fs26}>Upload Profile Picture</Text>


            </View>
            <View style={[styles.section2]}>

                <TouchableOpacity style={[ appStyle.w100, appStyle.mb20]}

                                  // onPress={() => navigation.navigate('PreferredFishingLocation')}
                >

                        <Image
                            style={[appStyle.w100]}
                            source={require('../../../assets/uploadImg.png')}
                        />

                </TouchableOpacity>


            </View>
            <View style={[styles.section3, appStyle.pt15,]}>

                <TouchableOpacity style={[appStyle.btnPrimaryOutline, appStyle.w100, appStyle.mb20]}
                                  onPress={() => navigation.navigate('ProfilePictureUploaded')}>
                    <Text style={[appStyle.btnTextPrimary]}>
                        Select an Avatar
                        <Image
                            style={[appStyle.nextBtnImg]}
                            source={require('../../../assets/next-icon.png')}
                        />
                    </Text>

                </TouchableOpacity>


                <TouchableOpacity style={[appStyle.btnPrimary, appStyle.w100, appStyle.mr5]}
                                  onPress={() => navigation.navigate('ProfilePictureUploaded')}>
                    <Text style={[appStyle.btnTextWhite]}>
                        Upload Picture
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


export default UploadProfilePicture;
