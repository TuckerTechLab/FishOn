import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import appStyle from '../../../styles/StyleSheet';

const HomeScreenHeader = ({navigation}) => {
    return (
        <View
            style={[appStyle.homeHeader, appStyle.dFlex, appStyle.JustifyContentBetween,
                appStyle.alignItemCenter,
                appStyle.borderBottom,
                appStyle.borderColorLight,
                appStyle.px20,
                appStyle.header
            ]}>
            <View>
                <Image
                    source={require('../../../../assets/home/profile.png')}
                    style={styles.profile}
                    resizeMode="cover"
                />
            </View>
            <View>
                <Image
                    source={require('../../../../assets/home/fish-on-logo.png')}
                    style={styles.logo}
                />
            </View>
            <View>
                <View
                    style={[appStyle.homeHeader, appStyle.dFlex, appStyle.JustifyContentBetween, appStyle.alignItemCenter]}>

                    <View>
                        <Image
                            source={require('../../../../assets/home/notification-icon.png')}
                            style={styles.icon}
                            resizeMode="cover"
                        />
                    </View>
                    <View>
                        <Image
                            source={require('../../../../assets/home/share-icon.png')}
                            style={[styles.icon, appStyle.ml10]}
                            resizeMode="cover"
                        />
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    profile: {
        width: 35,
        height:35

    },
    logo: {
        width: 60,
        height:40
    },
    icon: {
        width: 20,
        height:20
    },
});

export default HomeScreenHeader;