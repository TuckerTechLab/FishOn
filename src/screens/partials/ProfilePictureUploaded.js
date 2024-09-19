import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import appStyle from "../../styles/StyleSheet";

const ProfilePictureUploaded = ({navigation}) => {


    return (
        <View style={[styles.container, appStyle.appContainer]}>
            <View style={[styles.section1]}>
                <View style={[appStyle.dFlex, appStyle.JustifyContentBetween, appStyle.alignItemCenter, appStyle.mb15]}>
                    <TouchableOpacity onPress={() => navigation.navigate('WelcomeOnBoard')}>
                        <Text style={appStyle.backBtnText}>
                            <Image
                                source={require('../../../assets/Back.png')}
                                style={styles.image}
                                resizeMode="cover"
                            /> Back</Text>
                    </TouchableOpacity>

                    <Text style={appStyle.stepText}>
                        Step 8/10
                    </Text>
                </View>
                <Text style={appStyle.fs26}>Profile Picture Uploaded</Text>


            </View>


            <View style={[styles.section2]}>
                <View style={[appStyle.centerView]}>
                    <TouchableOpacity style={[appStyle.w100, appStyle.mb20]}
                        // onPress={() => navigation.navigate('PreferredFishingLocation')}
                    >
                        <Image
                            source={require('../../../assets/imgUploaded.png')}
                        />

                    </TouchableOpacity>

                    <Text style={[appStyle.titleSm,appStyle.textCenter]}>
                        You Profile Picture is Successfully Uploaded!
                    </Text>

                    <Text style={appStyle.p}>
                        Let’s create a username now
                    </Text>
                </View>
            </View>


            <View style={[styles.section3, appStyle.pt15,]}>


                <TouchableOpacity style={[appStyle.btnPrimary, appStyle.w100, appStyle.mr5]}
                                  onPress={() => navigation.navigate('CreateAUserName')}>
                    <Text style={[appStyle.btnTextWhite]}>
                        Create Username
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
    section1: {},
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


export default ProfilePictureUploaded;
