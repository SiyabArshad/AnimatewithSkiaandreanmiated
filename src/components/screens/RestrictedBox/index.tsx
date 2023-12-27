import {View, StyleSheet} from 'react-native';
import React from 'react';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {Gesture, GestureDetector} from 'react-native-gesture-handler';

import {useTheme} from '../../../Context/ThemeProvider';

const SIZE = 90;
const CIRCLE_RADIUS = SIZE * 2;

export default function RestrictedBox() {
  const {theme: colors} = useTheme();
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const prevX = useSharedValue(0);
  const prevY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      prevX.value = translateX.value;
      prevY.value = translateY.value;
    })
    .onUpdate(event => {
      translateX.value = event.translationX + prevX.value;
      translateY.value = event.translationY + prevY.value;
    })
    .onFinalize(() => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
      if (distance < CIRCLE_RADIUS + SIZE / 2) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    });
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });
  //styles
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    square: {
      width: SIZE,
      height: SIZE,
      backgroundColor: colors.primary,
      borderRadius: 20,
    },
    circle: {
      width: CIRCLE_RADIUS * 2,
      height: CIRCLE_RADIUS * 2,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: CIRCLE_RADIUS,
      borderWidth: 5,
      borderColor: colors.primary,
    },
  });
  //end
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.square, rStyle]} />
        </GestureDetector>
      </View>
    </View>
  );
}
