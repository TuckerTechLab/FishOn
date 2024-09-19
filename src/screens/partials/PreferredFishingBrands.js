import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import appStyle from "../../styles/StyleSheet";

const PreferredFishingBrands = ({navigation}) => {

    const [checkboxes, setCheckboxes] = useState([true, true, true, true,]);

    const [unCheckboxes, setUnCheckboxes] =
        useState(
            [false, false, false, false, false,
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,
                false, false, false, false, false, false, false, false,
                false, false, false,]
        );

    const handleCheckboxToggle = (index) => {
        const updatedCheckboxes = [...checkboxes];
        updatedCheckboxes[index] = !updatedCheckboxes[index];
        setCheckboxes(updatedCheckboxes);
    };

    const handleUnCheckboxToggle = (index) => {
        const updatedUnCheckboxes = [...unCheckboxes];
        updatedUnCheckboxes[index] = !updatedUnCheckboxes[index];
        setUnCheckboxes(updatedUnCheckboxes);
    };

    return (
        <View style={[styles.container, appStyle.appContainer]}>
            <View style={[styles.section1]}>
                <View style={[appStyle.dFlex, appStyle.JustifyContentBetween, appStyle.alignItemCenter, appStyle.mb15]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Location')}>
                        <Text style={appStyle.backBtnText}>
                            <Image
                                source={require('../../../assets/Back.png')}
                                style={styles.image}
                                resizeMode="cover"
                            /> Back</Text>
                    </TouchableOpacity>

                    <Text style={appStyle.stepText}>
                        Step 5/10
                    </Text>
                </View>

                <Text style={appStyle.titleSm}>Preferred Fishing Brands</Text>

                <Text style={appStyle.fs12}>Selected</Text>

                <View style={[styles.checkedBox, styles.dFlex, appStyle.JustifyContentStart]}>
                    {checkboxes.map((isChecked, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.checkbox, isChecked ? styles.checked : styles.unchecked]}
                            onPress={() => handleCheckboxToggle(index)}
                        >
                            <Text style={appStyle.checkBoxFontSize}>{`Checkbox ${index + 1}`}</Text>
                        </TouchableOpacity>
                    ))}
                </View>


                <Text style={[appStyle.fs12, appStyle.my10]}>Click to add suggestions</Text>
            </View>
            <ScrollView style={styles.section2}>
                <View style={styles.unCheckedBox}>
                    <View style={[styles.checkedBox, styles.dFlex, appStyle.JustifyContentStart]}>
                        {unCheckboxes.map((isChecked, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.checkbox, isChecked ? styles.checked : styles.unchecked]}
                                onPress={() => handleCheckboxToggle(index)}
                            >
                                <Text style={appStyle.unCheckBoxFontSize}>{`Checkbox ${index + 1}`}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                </View>
            </ScrollView>
            <View style={[styles.section3, appStyle.pt15, appStyle.btnGroup]}>
                <TouchableOpacity style={[appStyle.btnPrimary, appStyle.w100, appStyle.mr5]}
                                  onPress={() => navigation.navigate('ClothingAndAccessoryBrands')}>
                    <Text style={[appStyle.btnTextWhite]}>
                        Next
                        <Image
                            style={[appStyle.nextBtnImg]}
                            source={require('../../../assets/next-icon.svg')}
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
    },
    section3: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    checkedBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    checkbox: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: '#1b744b10',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        marginBottom: 5,
        fontSize: 12,
    },
    checked: {
        borderColor: '#1b744b',
        backgroundColor: '#4e8f3e10', // Change to your checked color
    },
    unchecked: {
        backgroundColor: 'white', // Change to your unchecked color
    },
});




export default PreferredFishingBrands;
