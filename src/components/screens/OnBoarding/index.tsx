import {StyleSheet} from 'react-native';
import React from 'react';

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import {useTheme} from '../../../Context/ThemeProvider';
import Page from '../../common/components/Page';
const OBTEXTS = ['Welcome', 'mobile', 'devs?'];
export default function OnBoarding() {
  const {theme: colors} = useTheme();
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });
  //styles
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
  });
  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {OBTEXTS.map((item, index) => (
        <Page
          translateX={translateX}
          text={item}
          index={index}
          key={index.toLocaleString()}
        />
      ))}
    </Animated.ScrollView>
  );
}
