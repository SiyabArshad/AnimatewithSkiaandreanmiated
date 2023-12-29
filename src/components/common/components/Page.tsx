import {View, StyleSheet, Text, Dimensions} from 'react-native';
import React from 'react';

import Animated, {
  SharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');
const SIZE = width * 0.7;
interface PageProps {
  index: number;
  text: string;
  translateX: SharedValue<number>;
}
export default function Page({index, text, translateX}: Readonly<PageProps>) {
  const inputRange = [(-index - 1) * width, index * width, (index + 1) * width];
  const radiusStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolation.CLAMP,
    );

    const borderRadius = interpolate(
      translateX.value,
      inputRange,
      [0, SIZE / 2, 0],
      Extrapolation.CLAMP,
    );

    return {
      borderRadius,
      transform: [{scale}],
    };
  });
  const textAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        translateX.value,
        inputRange,
        [-1, 1, -1],
        Extrapolation.CLAMP,
      ),
      transform: [
        {
          translateY: interpolate(
            translateX.value,
            inputRange,
            [height / 2, 0, -height / 2],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });
  //styles
  const styles = StyleSheet.create({
    container: {
      width,
      height,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: `rgba(21, 116, 108, 0.${index + 2})`,
    },
    square: {
      width: SIZE,
      height: SIZE,
      backgroundColor: 'rgba(21, 116, 108, 0.4)',
    },
    text: {
      fontSize: 30,
      color: 'white',
      textTransform: 'uppercase',
      fontWeight: '700',
    },
    textContainer: {position: 'absolute'},
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.square, radiusStyle]} />
      <Animated.View style={[styles.textContainer, textAnimationStyle]}>
        <Text style={styles.text}>{text}</Text>
      </Animated.View>
    </View>
  );
}
