import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import appStyle from '../../../styles/StyleSheet';

const HomeScreenFooter = ({navigation }) => {
    return (
        <View style={[appStyle.homeFooter, appStyle.dFlex, appStyle.JustifyContentBetween, appStyle.px20,appStyle.footer]}>

            <View>
                <TouchableOpacity
                    style={[appStyle.centerView]}
                    onPress={() => navigation.navigate('WelcomeOnBoard')}>
                    <Image
                        source={require('../../../../assets/home/footer/home-icon.png')}
                        style={[styles.icon]}
                        resizeMode="cover"
                    />
                    <Text style={styles.iconActiveText}>Home</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                    style={[appStyle.centerView]}
                    onPress={() => navigation.navigate('WelcomeOnBoard')}>
                    <Image
                        source={require('../../../../assets/home/footer/search-icon.png')}
                        style={[styles.icon]}
                        resizeMode="cover"
                    />
                    <Text style={styles.iconText}>Discover</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                    style={[appStyle.centerView]}
                    onPress={() => navigation.navigate('WelcomeOnBoard')}>
                    <Image
                        source={require('../../../../assets/home/footer/video-icon.png')}
                        style={[styles.icon2]}
                        resizeMode="cover"
                    />
                    <Text style={styles.iconText}>Watch</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                    style={[appStyle.centerView]}
                    onPress={() => navigation.navigate('WelcomeOnBoard')}>
                    <Image
                        source={require('../../../../assets/home/footer/map-icon.png')}
                        style={[styles.icon]}
                        resizeMode="cover"
                    />
                    <Text style={styles.iconText}>Map</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                    style={[appStyle.centerView]}
                    onPress={() => navigation.navigate('WelcomeOnBoard')}>
                    <Image
                        source={require('../../../../assets/home/footer/channel-icon.png')}
                        style={[styles.icon]}
                        resizeMode="cover"
                    />
                    <Text style={styles.iconText}>Channels</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    icon: {
        width: 25,
        height: 25
    },
    icon2: {
        width: 35,
        height: 20,
        marginBottom: 5
    },
    iconText: {
        color: '#666666',
        fontWeight: '600',
        fontSize: 12
    },
    iconActiveText: {
        color: '#26AD59',
        fontWeight: '700',
        fontSize: 12
    },
    footer: {
        // Additional styles for the footer if needed
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },


});

export default HomeScreenFooter;