import {View, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

import {
  Easing,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {Canvas, Rect, SweepGradient, vec} from '@shopify/react-native-skia';

import {useTheme} from '../../../Context/ThemeProvider';

const {height, width} = Dimensions.get('window');
export default function ClockSkia() {
  const {theme: colors} = useTheme();
  const centerX = width / 2;
  const centerY = height / 2;
  const centerVec = vec(centerX, centerY);
  const rotateValue = useSharedValue(0);
  const derivedValue = useDerivedValue(() => {
    return [{rotate: Math.PI * rotateValue.value}];
  }, [rotateValue]);
  React.useEffect(() => {
    rotateValue.value = withRepeat(
      withTiming(2, {
        duration: 4000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, []);
  //styles
  const styles = StyleSheet.create({
    contianer: {
      flex: 1,
    },
  });
  return (
    <View style={styles.contianer}>
      <Canvas style={styles.contianer}>
        <Rect x={0} y={0} width={width} height={height} />
        <SweepGradient
          origin={centerVec}
          c={centerVec}
          colors={[
            colors.white,
            colors.primary,
            colors.grey600,
            colors.primary,
          ]}
          start={0}
          end={360}
          transform={derivedValue}
        />
      </Canvas>
    </View>
  );
}
