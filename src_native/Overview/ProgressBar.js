import React from 'react'
import {
    Animated,
    Easing,
    StyleSheet,
    View
} from 'react-native'

var styles = StyleSheet.create({
    background: {
        backgroundColor: '#4d4d4d',
        height: 2,
        overflow: 'hidden'
    },
    fill: {
        backgroundColor: '#fff',
        height: 2
    }
});

export default class ProgressBar extends React.Component{

    constructor(props){
        super(props)
    }

    state = { progress: new Animated.Value(this.props.initialProgress || 0) }

    componentDidUpdate(prevProps, prevState) {
        console.log('hello')

        if (this.props.progress >= 0 && this.props.progress != prevProps.progress) {
            this.update();
        }
    }
    update() {
        Animated.timing(this.state.progress, {
            easing: this.props.easing,
            duration: this.props.easingDuration,
            toValue: this.props.progress
        }).start();
    }
    render() {
        var fillWidth = this.state.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0 * this.props.style.width, 1 * this.props.style.width],
        });

        return (
            <View style={[styles.background, this.props.backgroundStyle, this.props.style]}>
                <Animated.View style={[styles.fill, this.props.fillStyle, { width: fillWidth }]}/>
            </View>
        );
    }
}
