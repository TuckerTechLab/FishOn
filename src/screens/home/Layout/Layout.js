import React from 'react';
import {StyleSheet} from 'react-native';
import HomeScreenHeader from "../partials/Header";
import HomeScreenFooter from "../partials/Footer";

const HomeLayout = ({navigation, children}) => {
    return (
        <>
            <HomeScreenHeader/>
                 {children}
            <HomeScreenFooter navigation={navigation} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    image: {},


});

export default HomeLayout;