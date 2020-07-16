// import React, { Component, useEffect, useState, useContext } from 'react';
// import {
//     View,
//     ImageBackground,
//     Image,
//     StatusBar,
//     Dimensions,
//     Animated,
//     Easing
// } from 'react-native'
// import { useSelector, useDispatch, shallowEqual } from 'react-redux';
// import { BookContext } from '../../Contexts';
// import Colors from '../../utils/Colors';
// import RegularText from '../Common/RegulatText'
// import { IMG_SPLASH_LOGO, IMG_TAB_INDIA_ACTIVE } from '../../utils/ImageRes';
// import { FONT_FAMILY_RIGHTEOUS_REGULAR, FONT_RALEWAY_MEDIUM, FONT_RALEWAY_LIGHT, FONT_RALEWAY_EXTRALIGHT, FONT_RALEWAY_THIN } from '../../utils/Typography';

// const screenWidth = Math.round(Dimensions.get('window').width);

// const Splash = ({ navigation }) => {

//     let opacity = new Animated.Value(0);

//     const animate = easing => {
//         opacity.setValue(0);
//         Animated.timing(opacity, {
//             toValue: 1,
//             duration: 1200,
//             easing
//         }).start();
//     };


//     const size = opacity.interpolate({
//         inputRange: [0, 1],
//         outputRange: [0, 200]
//     });

//     const animatedStyles = [
//         {
//             marginTop: 500
//         },
//         {
//             opacity,
//             width: size,
//             height: size
//         }
//     ];

//     useEffect(() => {
//         animate(Easing.in(Easing.elastic(1)))
//         // setTimeout(() => {
//         //     // navigation.navigate('App')
//         // }, 3000);
//     }, [])

//     return (
//         <View
//             style={{
//                 flex: 1,
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 backgroundColor: Colors.grey900,
//                 paddingVertical: 20
//             }}
//         >
//             <StatusBar hidden />

//             <Animated.View style={animatedStyles}>
//                 <Image
//                     source={IMG_TAB_INDIA_ACTIVE}
//                     style={{ height: 100, width: 100 }}
//                 />
//             </Animated.View>
//             {/* <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                 <Image
//                     source={IMG_SPLASH_LOGO}
//                     style={{
//                         height: 150,
//                         marginTop: screenWidth / 3,
//                         marginBottom: 20,
//                     }}
//                     resizeMode='contain'
//                 />
//                 <RegularText
//                     textStyle={{
//                         fontSize: 20,
//                         color: Colors.green500
//                     }}
//                     title={'CORONA TRACKER'}
//                     font={FONT_FAMILY_RIGHTEOUS_REGULAR}
//                 />
//             </View>
//             <RegularText
//                 textStyle={{
//                     fontSize: 12,
//                     color: Colors.grey100
//                 }}
//                 title={'- By SR Devops'}
//             //font={FONT_RALEWAY_LIGHT}
//             /> */}
//         </View>
//     )
// }

// export default Splash;

import React, { Component } from 'react';
import {
    View,
    Dimensions,
    Animated,
    Easing,
    Image,
    StyleSheet,
    ImageBackground,
    ActivityIndicator,
    Text
} from 'react-native'
import { IMG_BG2, IMG_DOWN_ARROW } from '../../utils/ImageRes';
const { width, height } = Dimensions.get('window');
const x = width / 2 - 100;
const y = height / 3.25
const xtext = width / 2 - (width / 1.1) / 2
const ytext = height / 2

class Splash extends Component {

    constructor() {
        super();

        this.state = {
            size: { width, height },
            text: '',
            imgPosition: new Animated.ValueXY({ x: x, y: 0 }),
            textPosition: new Animated.ValueXY({ x: -350, y: ytext }),
        };
        Animated.sequence([
            Animated.timing(this.state.imgPosition, {
                useNativeDriver: false,
                toValue: { x: x, y: y },
                duration: 1500,
                easing: Easing.bounce
            }),
            Animated.spring(this.state.textPosition, {
                useNativeDriver: false,
                toValue: { x: xtext, y: ytext },
                stiffness: 100
            })]).start();
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('BottomNav')
        }, 4000)
    }

    _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        this.setState({ size: { width: layout.width, height: layout.height } });

    }

    render() {
        return (
            <View style={styles.container} onLayout={this._onLayoutDidChange} >
                <ImageBackground source={IMG_BG2} style={styles.image}>
                    <View style={[styles.caraBackground, this.state.size]}>
                        <Animated.View style={this.state.imgPosition.getLayout()}>
                            <Image source={IMG_DOWN_ARROW} style={styles.img} />
                        </Animated.View>
                        <Animated.View style={this.state.textPosition.getLayout()}>
                            <View style={{ width: width / 1.19, alignItems: 'center' }}>
                                <Text style={[styles.brand, { fontSize: 38 }]}>
                                    Corona Tracker
                            </Text>
                            </View>
                        </Animated.View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    caraBackground: {
        flex: 1,
        margin: 10,
    },
    img: {
        height: 200,
        maxHeight: 250,
        width: 200,
        maxWidth: 250,
        padding: 10,
    },
    brand: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ead7bc',
        marginBottom: 20,
        fontFamily: 'serif'
    },
    ActivityIndicator: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }

});
export default Splash