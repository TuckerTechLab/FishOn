import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import appStyle from "../../styles/StyleSheet";

const CreateAUserName = ({navigation}) => {


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
                        Step 9/10
                    </Text>
                </View>
                <Text style={[appStyle.fs26,appStyle.mb15]}>Create a Username</Text>

                <View style={appStyle.formGroup}>
                    <Text style={appStyle.label}>username</Text>
                    <TextInput
                        style={appStyle.input}
                        placeholderTextColor="#888"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

            </View>


            <View style={[styles.section3, appStyle.pt15,]}>


                <TouchableOpacity style={[appStyle.btnPrimary, appStyle.w100, appStyle.mr5]}
                                  onPress={() => navigation.navigate('UploadPostsFromPastFishingExperiences')}>
                    <Text style={[appStyle.btnTextWhite]}>
                        Next
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


export default CreateAUserName;

