import {StyleSheet} from 'react-native';
import generatedClasses from '../common/GeneratedClasses';


const appStyle = StyleSheet.create({
    appContainer: {
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
    },
    appContainerForLocation: {
        paddingTop: 40,
        paddingBottom: 20,
        backgroundColor: '#ffffff',
    },
    appContainer20: {
        paddingHorizontal: 20,
    },
    appContainerFluid: {
        paddingTop: 40,
        paddingBottom: 20,
        backgroundColor: '#ffffff',
    },
    appContainerFluidHomeScreen: {
        paddingTop: 40,
        // paddingBottom: 20,
        backgroundColor: '#ffffff',
    },
    px20: {
        paddingHorizontal: 20
    },

    h2: {
        fontSize: 38,
        fontWeight: '700',
        color: '#444444'
    },
    h2title: {
        fontSize: 28,
        fontWeight: '500',
        color: '#444444',
        textAlign: 'center'
    },
    p: {
        color: '#808080',
        marginVertical: 8,
    },
    btnPrimary: {
        backgroundColor: '#26AD59', // Button background color
        paddingVertical: 14,
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    btnPrimaryOutline: {
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#26AD59',
    },
    btnTextWhite: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff'
    },
    btnTextPrimary: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
        color: '#26AD59'
    },
    dividerContainer: {
        width: '100%',
        position: 'relative'
    },
    dividerLine: {
        // flex: 1,
        height: 2,
        backgroundColor: '#C0C0C0',
        marginVertical: 15
    },
    orText: {
        color: '#C0C0C0',
        fontSize: 16,
        position: 'absolute',
        top: 4,
        left: '45%',
        zIndex: 11,
        backgroundColor: '#ffffff',
        paddingHorizontal: 10
    },
    socialIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        width: '70%',
    },
    socialIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialIconImage: {
        width: 50,
        height: 50,
    },
    btnBack: {
        marginBottom: 20,
    },
    mb15: {
        marginBottom: 15,
    },
    title: {
        color: '#474747',
        fontSize: 30,
        fontWeight: '600',
        marginBottom: 20,
    },
    fs26: {
        color: '#474747',
        fontSize: 28,
        fontWeight: '700',
        marginBottom: 20,
    },

    titleSm: {
        color: '#474747',
        fontSize: 20,
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
    input2: {
        borderWidth: 1,
        borderColor: '#D5D5D5',
        borderRadius: 10,
        padding: 8,
        fontSize: 14,
        color: '#000',
        paddingVertical: 11,
    },
    dropDownInput: {
        borderColor: '#D5D5D5',
    },
    formGroup: {
        marginBottom: 12,
    },
    centerView: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    textCenter: {
        textAlign: 'center',
        // alignItems: 'center'
    },
    nextBtnImg: {
        width: '40%',
    },
    pt15: {
        paddingTop: 15,
    },
    btnGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    w33: {
        width: '33%'
    },

    w50: {
        width: '50%'
    },

    w75: {
        width: '75%'
    },

    w100: {
        width: '100%'
    },

    mAuto: {
       marginHorizontal: 'auto'
    },

    dFlex: {
        flexDirection: 'row',
    },

    JustifyContentBetween: {
        justifyContent: 'space-between',
    },
    JustifyContentStart: {
        justifyContent: 'space-start',
    },
    alignItemCenter: {
        alignItems: 'center',
    },
    stepText: {
        color: '#6A6A6A',
        fontSize: 12,
        fontWeight: '600',
    },
    fs12: {
        fontSize: 12,
        color: '#474747',
        fontWeight: '500'
    }
    ,
    checkBoxFontSize: {
        fontSize: 12,
        color: '#4e8f3e',
        fontWeight: '500'
    },
    unCheckBoxFontSize: {
        fontSize: 12,
        color: '#888888',
        fontWeight: '500'
    },
    col7: {
        flex: 0.70
    },
    col3: {
        flex: 0.30
    },

    // Home Screen styling

    homeHeader: {
        paddingVertical: 3,
    },

    borderBottom: {
        borderBottomWidth: 1,
    },
    borderBottom2: {
        borderBottomWidth: 2,
    },
    borderColorLight: {
        borderBottomColor: '#E4E4E4',
    },
    borderColorDark: {
        borderBottomColor: '#D2D2D2',
    },
    body: {
        paddingTop: 10,
    },

    homeFooter: {
        paddingVertical: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderWidth: 1,
        borderColor: '#DDD',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        // backdropFilter: blur(15),
    },
    textPrimary: {
        color: '#26AD59',
    },

    fw500: {
        fontWeight: '500'
    },

    fw600: {
        fontWeight: '600'
    },

    fw700: {
        fontWeight: '700'
    },
    fs16: {
        fontSize: 16
    }
    ,
    bginfo: {
        backgroundColor: '#2656cb'
    }


});


const combinedStyles = StyleSheet.create({
    ...appStyle,
    ...generatedClasses,
});


export default combinedStyles;
