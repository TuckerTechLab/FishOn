import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import appStyle from "../../styles/StyleSheet";
import DropDownPicker from 'react-native-dropdown-picker';
import MapView, { Marker } from 'react-native-maps';

const LocationScreen = ({navigation}) => {

    const [selectedValue, setSelectedValue] = useState(null);
    const items = [
        {label: 'Option 1', value: 'option1'},
        {label: 'Option 2', value: 'option2'},
        {label: 'Option 3', value: 'option3'},
    ];

    return (
        <View style={[styles.container, appStyle.appContainerForLocation]}>
            <View style={[styles.section1, appStyle.px20, appStyle.pb20]}>
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
                        Step 1/10
                    </Text>
                </View>
                <Text style={appStyle.titleSm}>Where are you Located?</Text>

                <View style={[appStyle.formGroup,appStyle.mb20]}>
                    <Text>Your Country Name</Text>
                    <DropDownPicker
                        items={items}
                        style={[appStyle.input,appStyle.dropDownInput]}
                        defaultValue={selectedValue}
                        containerStyle={{height: 40, marginTop: 10}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={(item) => setSelectedValue(item.value)}
                    />
                </View>

                <View style={{flexDirection: 'row'}}>
                    <View style={[appStyle.col7]}>
                        <Text>Reigon</Text>
                        <DropDownPicker
                            items={items}
                            style={[appStyle.input,appStyle.dropDownInput]}
                            defaultValue={selectedValue}
                            containerStyle={{height: 40, marginTop: 10}}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{backgroundColor: '#fafafa'}}
                            onChangeItem={(item) => setSelectedValue(item.value)}
                        />
                    </View>
                    <View style={[appStyle.col3, appStyle.ml15]}>
                        <Text style={[appStyle.label, appStyle.mb10]}>Radius</Text>
                        <TextInput
                            style={appStyle.input2}
                            placeholderTextColor="#888"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                </View>


            </View>
            <ScrollView style={styles.section2}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                        }}
                        title="Marker Title"
                        description="Marker Description"
                    />

                </MapView>
            </ScrollView>
            <View style={[styles.section3, appStyle.px20, appStyle.pt15, appStyle.btnGroup]}>
                <TouchableOpacity style={[appStyle.btnPrimary, appStyle.w50, appStyle.mr5]}
                                  onPress={() => navigation.navigate('PreferredFishingLocation')}>
                    <Text style={[appStyle.btnTextWhite]}>
                        Next
                        <Image
                            style={[appStyle.nextBtnImg]}
                            source={require('../../../assets/next-icon.png')}
                        />
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity style={[appStyle.btnPrimaryOutline, appStyle.w50, appStyle.mx0]}
                                  onPress={() => navigation.navigate('PreferredFishingLocation')}>
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
    },
    section3: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: 400,
    },
});

export default LocationScreen;
