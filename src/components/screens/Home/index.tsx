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
      name: 'Bending Circle',
      using: 'Skia and Reanimated',
      onPress: () => {
        navigation?.navigate(routes.clockSkia);
      },
    },
    {
      id: 3,
      name: 'Chassing Bubbles',
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
