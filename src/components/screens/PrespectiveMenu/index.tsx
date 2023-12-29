import {StyleSheet, TouchableOpacity, Text, Dimensions} from 'react-native';
import React from 'react';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

import {useTheme} from '../../../Context/ThemeProvider';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
export default function PrespectiveMenu() {
  const {theme: colors} = useTheme();
  const translateX = useSharedValue(0);

  const inset = useSafeAreaInsets();
  const onPress = React.useCallback(() => {
    if (translateX.value > 0) {
      translateX.value = withTiming(0);
    } else {
      translateX.value = withTiming(SCREEN_WIDTH / 2);
    }
  }, []);
  const rStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      translateX.value,
      [0, SCREEN_WIDTH / 2],
      [0, 3],
      Extrapolate.CLAMP,
    );

    const borderRadius = interpolate(
      translateX.value,
      [0, SCREEN_WIDTH / 2],
      [0, 15],
      Extrapolate.CLAMP,
    );

    return {
      borderRadius,
      backgroundColor: colors.primary,
      transform: [
        {perspective: 100},
        {
          translateX: translateX.value,
        },
        {
          rotateY: `-${rotate}deg`,
        },
      ],
    };
  }, []);
  //styles
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      paddingBottom: inset.bottom,
      paddingTop: inset.top,
    },
  });
  return (
    <Animated.View style={[styles.container, rStyle]}>
      <TouchableOpacity onPress={onPress}>
        <Text>Open</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
