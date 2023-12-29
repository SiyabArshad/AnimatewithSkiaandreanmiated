import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';

import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {Gesture, GestureDetector} from 'react-native-gesture-handler';

import {Images} from '../../../Assets';

const {height, width} = Dimensions.get('window');
export default function ZoominOut() {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);
  const gestureHandler = Gesture.Pinch()
    .onUpdate(event => {
      scale.value = event.scale;
      focalX.value = event.focalX;
      focalY.value = event.focalY;
    })
    .onEnd(() => {
      scale.value = withTiming(1);
    });
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: focalX.value},
        {translateY: focalY.value},
        {translateX: -width / 2},
        {translateY: -height / 2},
        {scale: scale.value},
        {translateX: -focalX.value},
        {translateY: -focalY.value},
        {translateX: width / 2},
        {translateY: height / 2},
      ],
    };
  });
  const focalPointStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: focalX.value}, {translateY: focalY.value}],
    };
  });
  //styles
  const styles = StyleSheet.create({
    container: {flex: 1},
    img: {
      height,
      width,
      resizeMode: 'cover',
    },
    bubble: {
      ...StyleSheet.absoluteFillObject,
      height: 20,
      width: 20,
      borderRadius: 10,
    },
  });
  //styles
  return (
    <GestureDetector gesture={gestureHandler}>
      <Animated.View style={styles.container}>
        <Animated.Image style={[styles.img, rStyle]} source={Images.nature} />
        <Animated.View style={[styles.bubble, focalPointStyle]} />
      </Animated.View>
    </GestureDetector>
  );
}
