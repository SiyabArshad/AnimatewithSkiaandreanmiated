import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {routes} from '../../navigation/routes';
import {useTheme} from '../../../Context/ThemeProvider';
export default function Home({navigation}) {
  const insets = useSafeAreaInsets();
  const {theme: colors} = useTheme();
  //animations
  const listData = [
    {
      id: 1,
      name: 'Gradient Clock',
      using: 'Skia and Reanimated',
      onPress: () => {
        navigation?.navigate(routes.clockSkia);
      },
    },
    {
      id: 2,
      name: 'Chassing Bubbles',
      using: 'Skia and Reanimated',
      onPress: () => {
        navigation?.navigate(routes.clockSkia);
      },
    },

    {
      id: 3,
      name: 'Restrict box around a circle',
      using: 'Pan-Gesture-Handler and Reanimated',
      onPress: () => {
        navigation?.navigate(routes.restrictedBox);
      },
    },

    {
      id: 4,
      name: 'Animated Onboarding animation',
      using: 'Pan-Gesture-Handler and Reanimated',
      onPress: () => {
        navigation?.navigate(routes.onBoarding);
      },
    },

    {
      id: 6,
      name: 'Zoom in and out',
      using: 'Pinch-Gesture-Handler and Reanimated',
      onPress: () => {
        navigation?.navigate(routes.zoominOut);
      },
    },

    {
      id: 7,
      name: 'Instagram Like Animation',
      using: 'Reanimated',
      onPress: () => {
        navigation?.navigate(routes.instaLike);
      },
    },

    {
      id: 8,
      name: 'Color Picker Animation',
      using: 'Gesture Handler and Reanimated',
      onPress: () => {
        navigation?.navigate(routes.clockSkia);
      },
    },

    {
      id: 9,
      name: 'Animated Circular Bar',
      using: 'Reanimated',
      onPress: () => {
        navigation?.navigate(routes.clockSkia);
      },
    },

    {
      id: 10,
      name: 'Swipe to Delete Animation',
      using: 'Gesture-Handler and Reanimated',
      onPress: () => {
        navigation?.navigate(routes.clockSkia);
      },
    },

    {
      id: 11,
      name: 'Ripple Effect Animation',
      using: 'Reanimated',
      onPress: () => {
        navigation?.navigate(routes.clockSkia);
      },
    },

    {
      id: 12,
      name: 'Clock Animation',
      using: 'Reanimated',
      onPress: () => {
        navigation?.navigate(routes.clockSkia);
      },
    },

    {
      id: 13,
      name: 'Perspective Menu Animation',
      using: 'Reanimated',
      onPress: () => {
        navigation?.navigate(routes.prespectiveMenu);
      },
    },

    {
      id: 14,
      name: 'Layout Animations',
      using: 'Reanimated',
      onPress: () => {
        navigation?.navigate(routes.clockSkia);
      },
    },

    {
      id: 15,
      name: 'Flatlist animation',
      using: 'Reanimated',
      onPress: () => {
        navigation?.navigate(routes.clockSkia);
      },
    },

    {
      id: 16,
      name: 'DropDown Animation',
      using: 'Reanimated',
      onPress: () => {
        navigation?.navigate(routes.clockSkia);
      },
    },

    {
      id: 17,
      name: 'Skelton Loading Animation',
      using: 'Reanimated',
      onPress: () => {
        navigation?.navigate(routes.clockSkia);
      },
    },

    {
      id: 18,
      name: 'D3 Skia charts ',
      using: 'Skia and Reanimated',
      onPress: () => {
        navigation?.navigate(routes.clockSkia);
      },
    },

    {
      id: 19,
      name: 'Donut Progress circle using Skia',
      using: 'Skia and Reanimated',
      onPress: () => {
        navigation?.navigate(routes.clockSkia);
      },
    },

    {
      id: 20,
      name: 'Morphing Circle Animation using Skia',
      using: 'Skia and Reanimated',
      onPress: () => {
        navigation?.navigate(routes.clockSkia);
      },
    },
    {
      id: 21,
      name: 'Focus Animation using Skia',
      using: 'Skia and Reanimated',
      onPress: () => {
        navigation?.navigate(routes.clockSkia);
      },
    },
  ];
  //styles
  const styles = StyleSheet.create({
    contianer: {
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingHorizontal: 15,
      backgroundColor: colors.white,
    },
    btn: {
      backgroundColor: colors.primary,
      marginBottom: 10,
      paddingHorizontal: 15,
      paddingVertical: 13,
      borderRadius: 7,
    },
    head: {
      color: colors.white,
      fontWeight: 'bold',
    },
    desc: {
      marginTop: 5,
      color: colors.light80,
    },
  });
  return (
    <View style={styles.contianer}>
      <FlatList
        contentContainerStyle={{paddingVertical: 20}}
        showsVerticalScrollIndicator={false}
        data={listData}
        renderItem={({item}) => (
          <TouchableOpacity onPress={item.onPress} style={styles.btn}>
            <Text style={styles.head}>{item.name}</Text>
            <Text style={styles.desc}>{item.using}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toLocaleString()}
      />
    </View>
  );
}
