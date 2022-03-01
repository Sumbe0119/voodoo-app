import {Platform} from "react-native";

const DEFAULT = {
    font:{
        light:'SF-Pro-Display-Light',
        regular:'SF-Pro-Display-Regular',
        medium: 'SF-Pro-Display-Medium',
        thin: 'SF-Pro-Display-Thin',
        bold:'SF-Pro-Display-Bold',
    },
    color:{
        white:'#ffffff',
        black: '#181C1F',
        main:'#B069F3',
        red:'#F44',
        green: '#2fcc70',
        yellow: '#f1c40f',
    },
    defaultSpacing: 15,
}
export default {
    DEFAULT:DEFAULT,
    mainColor:'#fff',
    defaultSpacing:15,
    whiteBackgroundColor: "#ffffff",
    mainBackgroundColor:"#181C1F",
    blueBackgroundColor:"#006599",
    hardBackgroundColor:"#013C9A",
    orangeBackgroundColor:"#F25A10",
    yellowBackgroundColor:"#f1c40f",
    largeText:{
        fontSize:16
    },
    text:{
        fontFamily:DEFAULT.font.medium,
        fontSize: Platform.OS === 'ios' ? 14 : 16,
    },
    textBold:{
        fontFamily:DEFAULT.font.bold,
        fontSize: Platform.OS === 'ios' ? 16 : 18,
    },
    textLight:{
        fontFamily:DEFAULT.font.light,
        fontSize: Platform.OS === 'ios' ? 14 : 16,
    },
    ArdContainer:{
        paddingLeft:DEFAULT.defaultSpacing,
        paddingRight:DEFAULT.defaultSpacing
    },
    empty:{
        paddingLeft:DEFAULT.defaultSpacing,
        paddingRight:DEFAULT.defaultSpacing
    },
    emptyText:{
        textAlign:"center",
        color: DEFAULT.color.white
    }
}