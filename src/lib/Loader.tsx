import * as React from "react";
import {View, Image, Animated, Easing} from "react-native";
import AppStyle from "./AppStyle";
import LinearIcons from "./LinearIcons";
interface BizLoaderProps {
    backgroundColor?: string
}
export default class Loader extends React.Component<BizLoaderProps>{
    private RotateValueHolder;
    constructor(props) {
        super(props);
        this.RotateValueHolder = new Animated.Value(0,);
    }
    componentDidMount() {
        this.StartImageRotateFunction();
    }
    StartImageRotateFunction() {
        this.RotateValueHolder.setValue(0);
        Animated.timing(this.RotateValueHolder, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(() => this.StartImageRotateFunction());
    }
    render(){
        const RotateData = this.RotateValueHolder.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });
        const backgroundColor = this.props.backgroundColor || "#191A21"
        return (
            <View style={{flex:1,justifyContent:'center',
                backgroundColor: backgroundColor,
                alignItems:'center',}}>
                <Animated.View
                    style={{transform: [{ rotate: RotateData }],}}
                >
                    <LinearIcons name={'refresh'} size={24} color={AppStyle.DEFAULT.color.main}/>
                </Animated.View>
            </View>
        )
    }
}
