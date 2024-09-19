import React, {useContext} from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from '../screens/GetStarted';

import {AuthContext} from '../context/AuthContext';
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/Signup";
import WelcomeOnBoard from "../screens/onboard/Index";
import LocationScreen from "../screens/partials/Location";
import ClothingAndAccessoryBrands from "../screens/partials/ClothingAndAccessoryBrands";
import CreateAUserName from "../screens/partials/CreateAUserName";
import FishingLocation from "../screens/partials/FishingLocation";
import PreferredFishingBrands from "../screens/partials/ClothingAndAccessoryBrands";
import PreferredFishingLocation from "../screens/partials/PreferredFishingLocation";
import PreferredFishingTechniques from "../screens/partials/PreferredFishingTechniques";
import PreferredGearAndEquipment from "../screens/partials/PreferredGearAndEquipment";
import SelectAvatar from "../screens/partials/SelectAvatar";
import UploadPostsFromPastFishingExperiences from "../screens/partials/UploadPostsFromPastFishingExperiences";
import UploadProfilePicture from "../screens/partials/UploadProfilePicture";
import ProfilePictureUploaded from "../screens/partials/ProfilePictureUploaded";
import HomeScreen from "../screens/home/Index";

const Stack = createStackNavigator();

const Navigation = () => {
    const {userInfo} = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>

                <Stack.Screen name="GetStarted" component={GetStarted} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="WelcomeOnBoard" component={WelcomeOnBoard} />

                {/*Partial Files Routes*/}
                <Stack.Screen name="Location" component={LocationScreen} />
                <Stack.Screen name="ClothingAndAccessoryBrands" component={ClothingAndAccessoryBrands} />
                <Stack.Screen name="CreateAUserName" component={CreateAUserName} />
                <Stack.Screen name="FishingLocation" component={FishingLocation} />
                <Stack.Screen name="PreferredFishingBrands" component={PreferredFishingBrands} />
                <Stack.Screen name="PreferredFishingLocation" component={PreferredFishingLocation} />
                <Stack.Screen name="PreferredFishingTechniques" component={PreferredFishingTechniques} />
                <Stack.Screen name="PreferredGearAndEquipment" component={PreferredGearAndEquipment} />
                <Stack.Screen name="SelectAvatar" component={SelectAvatar} />
                <Stack.Screen name="UploadPostsFromPastFishingExperiences" component={UploadPostsFromPastFishingExperiences} />
                <Stack.Screen name="UploadProfilePicture" component={UploadProfilePicture} />
                <Stack.Screen name="ProfilePictureUploaded" component={ProfilePictureUploaded} />

                {/*Home Files Routes*/}
                <Stack.Screen name="HomeScreen" component={HomeScreen} />


                {/*{userInfo.access_token ? (*/}
                {/*    <Stack.Screen name="Home" component={HomeScreen} />*/}
                {/*) : (*/}
                {/*    <>*/}
                {/*        <Stack.Screen name="GetStarted" component={GetStarted} />*/}
                {/*        <Stack.Screen*/}
                {/*            name="Login"*/}
                {/*            component={LoginScreen}*/}
                {/*            options={{headerShown: false}}*/}
                {/*        />*/}
                {/*        <Stack.Screen*/}
                {/*            name="Register"*/}
                {/*            component={RegisterScreen}*/}
                {/*            options={{headerShown: false}}*/}
                {/*        />*/}
                {/*    </>*/}
                {/*)}*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;