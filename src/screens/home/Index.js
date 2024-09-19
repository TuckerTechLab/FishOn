import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import appStyle from '../../styles/StyleSheet';
import HomeLayout from "./Layout/Layout";

const HomeScreen = ({navigation}) => {

    return (
        <View style={[styles.container, appStyle.appContainerFluidHomeScreen]}>
            <HomeLayout navigation={navigation}>
                <View style={[appStyle.px20, appStyle.mt10]}>

                    <View style={[appStyle.dFlex, appStyle.JustifyContentBetween, appStyle.py10,]}>

                        <View style={[
                            appStyle.w33,
                        ]}>
                            <TouchableOpacity
                                style={[
                                    appStyle.borderBottom2,
                                    appStyle.borderColorDark,
                                    appStyle.centerView
                                ]}

                                // onPress={() => navigation.navigate('WelcomeOnBoard')}
                            >
                                <Text style={[appStyle.textPrimary, appStyle.fs16, appStyle.fw500]}>For You</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[
                            appStyle.w33,
                        ]}>
                            <TouchableOpacity
                                style={[
                                    appStyle.borderBottom2,
                                    appStyle.borderColorDark,
                                    appStyle.centerView
                                ]}

                                // onPress={() => navigation.navigate('WelcomeOnBoard')}
                            >
                                <Text style={[appStyle.textPrimary, appStyle.fs16, appStyle.fw500]}>For You</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[
                            appStyle.w33,
                        ]}>
                            <TouchableOpacity
                                style={[
                                    appStyle.borderBottom2,
                                    appStyle.borderColorDark,
                                    appStyle.centerView
                                ]}

                                // onPress={() => navigation.navigate('WelcomeOnBoard')}
                            >
                                <Text style={[appStyle.textPrimary, appStyle.fs16, appStyle.fw500]}>For You</Text>
                            </TouchableOpacity>
                        </View>


                    </View>


                </View>
                <ScrollView style={[appStyle.px20, appStyle.body]}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Sapien et ligula ullamcorper malesuada proin. Aliquam ultrices
                        sagittis orci a scelerisque purus. Quam vulputate dignissim suspendisse in est ante in nibh. Id
                        leo in vitae turpis. Vehicula ipsum a arcu cursus vitae congue mauris. Tristique sollicitudin
                        nibh sit amet commodo nulla facilisi. Et sollicitudin ac orci phasellus egestas tellus rutrum
                        tellus. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Hac habitasse platea
                        dictumst quisque sagittis purus sit amet volutpat. Faucibus a pellentesque sit amet porttitor
                        eget. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Dolor sit amet
                        consectetur adipiscing. Urna molestie at elementum eu facilisis sed odio. Faucibus et molestie
                        ac feugiat sed lectus vestibulum. Vitae elementum curabitur vitae nunc. Urna condimentum mattis
                        pellentesque id nibh tortor id. Scelerisque varius morbi enim nunc faucibus.

                        Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Dictumst quisque sagittis
                        purus sit amet volutpat consequat. Arcu dui vivamus arcu felis bibendum ut tristique et.
                        Tristique sollicitudin nibh sit amet commodo nulla. Consectetur purus ut faucibus pulvinar
                        elementum integer enim neque. Sit amet aliquam id diam maecenas ultricies mi. Velit euismod in
                        pellentesque massa. Tincidunt lobortis feugiat vivamus at augue eget. Ultricies tristique nulla
                        aliquet enim tortor. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Lectus sit
                        amet est placerat in egestas erat. Dolor purus non enim praesent elementum facilisis leo vel.
                        Elit ut aliquam purus sit amet. Sed libero enim sed faucibus turpis in eu mi. Ipsum suspendisse
                        ultrices gravida dictum fusce ut placerat orci nulla. Dictum varius duis at consectetur lorem.

                        Feugiat in ante metus dictum at tempor commodo ullamcorper a. Mauris in aliquam sem fringilla ut
                        morbi tincidunt. Libero nunc consequat interdum varius sit amet mattis. Faucibus turpis in eu mi
                        bibendum. Curabitur vitae nunc sed velit. Mauris augue neque gravida in. Natoque penatibus et
                        magnis dis parturient montes nascetur ridiculus mus. Id venenatis a condimentum vitae. Sed
                        vulputate mi sit amet mauris. Aenean sed adipiscing diam donec adipiscing tristique risus.
                        Nullam ac tortor vitae purus faucibus. Quis imperdiet massa tincidunt nunc pulvinar. Mattis
                        ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Habitant morbi tristique
                        senectus et netus et malesuada fames. Pellentesque sit amet porttitor eget dolor morbi non arcu
                        risus. Augue mauris augue neque gravida in fermentum. Fermentum dui faucibus in ornare quam
                        viverra orci. Duis ut diam quam nulla porttitor. Ac tortor dignissim convallis aenean et tortor
                        at.

                        Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Ut enim blandit volutpat
                        maecenas volutpat blandit aliquam etiam erat. Pulvinar neque laoreet suspendisse interdum
                        consectetur. Nisl purus in mollis nunc sed id semper risus. Nascetur ridiculus mus mauris vitae
                        ultricies leo integer malesuada nunc. Sodales neque sodales ut etiam sit. Quam adipiscing vitae
                        proin sagittis nisl rhoncus mattis rhoncus urna. Ut sem viverra aliquet eget sit amet tellus
                        cras. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Laoreet id donec
                        ultrices tincidunt arcu non sodales neque sodales. Non consectetur a erat nam at lectus urna
                        duis. Amet luctus venenatis lectus magna fringilla. Sit amet venenatis urna cursus eget. Iaculis
                        at erat pellentesque adipiscing commodo elit.

                        Rhoncus dolor purus non enim praesent elementum facilisis. Varius duis at consectetur lorem
                        donec massa. In metus vulputate eu scelerisque felis imperdiet proin. Nunc mattis enim ut tellus
                        elementum sagittis vitae. Proin sed libero enim sed. Sed risus ultricies tristique nulla aliquet
                        enim. Neque volutpat ac tincidunt vitae. Vulputate dignissim suspendisse in est ante in nibh
                        mauris cursus. Ultrices vitae auctor eu augue ut lectus. Commodo elit at imperdiet dui accumsan
                        sit. Lacinia quis vel eros donec ac odio tempor orci dapibus. Sed augue lacus viverra vitae
                        congue eu consequat ac felis. Euismod elementum nisi quis eleifend quam adipiscing vitae proin.
                        At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Mauris commodo quis imperdiet
                        massa tincidunt nunc. Cras sed felis eget velit aliquet sagittis id consectetur purus. Quis
                        lectus nulla at volutpat diam ut.
                    </Text>
                </ScrollView>
            </HomeLayout>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        // Additional styles for the header if needed
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default HomeScreen;