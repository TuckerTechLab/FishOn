import React, {useContext,useState} from "react";
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../../context/AuthContext';

import appStyle from '../../styles/StyleSheet';

const SignUp = ({navigation}) => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [fishingExperience, setFishingExperience] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const {register} = useContext(AuthContext);

    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleSignUp = () => {
        let newErrors = {};

        if (!fullName.trim()) {
            newErrors.fullName = 'Username is required';
        }

        if (!email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!isEmailValid(email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!bio.trim()) {
            newErrors.bio = 'Bio is required';
        }

        if (!fishingExperience.trim()) {
            newErrors.fishingExperience = 'Username is required';
        }

        if (!password.trim()) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            register(fullName,email,bio,fishingExperience, password);
        } else {
            console.log('Form has errors. Please fix them.');
            return false;
        }
    };

    return (
        <View style={styles.container}>
            {/*<StatusBar hidden />*/}

            <TouchableOpacity style={styles.btnBack} onPress={() => navigation.navigate('GetStarted')}>
                <Text style={styles.backBtnText}>
                    <Image
                        source={require('../../../assets/Back.png')}
                        style={styles.image}
                        resizeMode="cover"
                    />  Back</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Create An Account</Text>

           <ScrollView>
               <View style={styles.formGroup}>
                   <Text style={styles.label}>Full Name</Text>
                   <TextInput
                       style={[styles.input, errors.fullName && styles.inputError]}
                       placeholder="Full Name"
                       placeholderTextColor="#888"
                       keyboardType="full-name"
                       autoCapitalize="none"
                       value={fullName}
                       onChangeText={(text) => setFullName(text)}
                   />
                   {/*{errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}*/}
               </View>

               <View style={styles.formGroup}>
                   <Text style={styles.label}>Email Address</Text>
                   <TextInput
                       style={[styles.input, errors.email && styles.inputError]}
                       placeholder="Enter your email"
                       placeholderTextColor="#888"
                       keyboardType="email-address"
                       autoCapitalize="none"
                       value={email}
                       onChangeText={(text) => setEmail(text)}
                   />
                   {/*{errors.email && <Text style={styles.errorText}>{errors.email}</Text>}*/}
               </View>

               <View style={styles.formGroup}>
                   <Text style={styles.label}>Bio</Text>
                   <TextInput
                       style={[styles.input, errors.bio && styles.inputError]}
                       placeholder="Enter your bio"
                       placeholderTextColor="#888"
                       keyboardType="bio"
                       autoCapitalize="none"
                       value={bio}
                       onChangeText={(text) => setBio(text)}
                   />
                   {/*{errors.bio && <Text style={styles.errorText}>{errors.bio}</Text>}*/}
               </View>

               <View style={styles.formGroup}>
                   <Text style={styles.label}>Years of Fishing Experience</Text>
                   <TextInput
                       style={[styles.input, errors.fishingExperience && styles.inputError]}
                       placeholder="Enter your fishing experience"
                       placeholderTextColor="#888"
                       keyboardType="fishing-experience"
                       autoCapitalize="none"
                       value={fishingExperience}
                       onChangeText={(text) => setFishingExperience(text)}
                   />
                   {/*{errors.fishingExperience && <Text style={styles.errorText}>{errors.fishingExperience}</Text>}*/}
               </View>

               <View style={styles.formGroup}>
                   <Text style={styles.label}>Password</Text>
                   <TextInput
                       style={[styles.input, errors.password && styles.inputError]}
                       placeholder="Enter your email"
                       placeholderTextColor="#888"
                       keyboardType="default"
                       autoCapitalize="none"
                       secureTextEntry={true}
                       value={password}
                       onChangeText={(text) => setPassword(text)}
                   />
                   {/*{errors.password && <Text style={styles.errorText}>{errors.password}</Text>}*/}
               </View>

               <View style={{marginTop: 20}}>
                   <TouchableOpacity
                       style={styles.btnPrimary}
                       onPress={handleSignUp}>
                       <Text style={styles.btnTextWhite}>Create an Account</Text>
                   </TouchableOpacity>
                   {/*<TouchableOpacity style={styles.btnPrimary} onPress={() => navigation.navigate('Login')}>*/}
                   {/*    <Text style={styles.btnTextWhite}>Create an Account</Text>*/}
                   {/*</TouchableOpacity>*/}
               </View>
           </ScrollView>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: '#ffffff',
    },
    btnBack:{
        marginBottom: 20,
    },
    title: {
        color: '#474747',
        fontSize: 30,
        fontWeight: '600',
        marginBottom: 20,
    },
    backBtnText: {
        color: '#6A6A6A',
        fontSize: 16,
        fontWeight: '500',
    },
    image: {},

    label: {
        marginBottom: 4,
        color: '#474747',
        fontSize: 14,
        fontWeight: '400',
    },
    input: {
        borderWidth: 1,
        borderColor: '#D5D5D5',
        borderRadius: 10,
        padding: 10,
        fontSize: 14,
        color: '#000',
        paddingVertical: 13,
    },
    formGroup:{
        marginBottom: 12,
    }
    ,
    btnPrimary: {
        backgroundColor: '#26AD59', // Button background color
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginVertical: 10,
        width: '100%',
    },

    btnTextWhite: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        color: '#ffffff'
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginBottom: 8,
    },
    disabledButton: {
        backgroundColor: 'gray',
    },

});
export default SignUp;