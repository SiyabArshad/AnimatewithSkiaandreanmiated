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
  const gestureHandler = Gesture.Pinch()
    .onUpdate(event => {
      scale.value = event.scale;
    })
    .onEnd(() => {
      scale.value = withTiming(1);
    });
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  //styles
  const styles = StyleSheet.create({
    img: {
      height,
      width,
      resizeMode: 'cover',
    },
  });
  //styles
  return (
    <GestureDetector gesture={gestureHandler}>
      <Animated.Image style={[styles.img, rStyle]} source={Images.nature} />
    </GestureDetector>
  );
}
