import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
} from 'react-native-reanimated';

import {TapGestureHandler} from 'react-native-gesture-handler';

import {Images} from '../../../Assets';
import {useTheme} from '../../../Context/ThemeProvider';

const {width: SIZE} = Dimensions.get('window');
export default function InstagramLike() {
  const {theme: colors} = useTheme();
  const [liked, setLiked] = React.useState<boolean>(false);
  const [likes, setLikes] = React.useState<number>(300);
  const like = useSharedValue(0);
  const doubleTapRef = React.useRef();

  const rStyle = useAnimatedStyle(() => ({
    transform: [{scale: Math.max(like.value, 0)}],
  }));

  const onDoubleTap = React.useCallback(() => {
    setLiked(prev => !prev);
    setLikes(prev => (liked ? prev - 1 : prev + 1));
    like.value = withSpring(1, undefined, isFinished => {
      if (isFinished) {
        like.value = withDelay(500, withSpring(0));
      }
    });
  }, [like, liked]);
  const onSingleTap = React.useCallback(() => {
    if (!liked) {
      setLiked(prev => !prev);
      setLikes(prev => prev + 1);
    }
  }, [liked]);
  const likeFunc = React.useCallback(() => {
    setLiked(prev => !prev);
    setLikes(prev => (liked ? prev - 1 : prev + 1));
  }, [liked]);
  //styles
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      justifyContent: 'center',
    },
    box: {
      width: '100%',
    },
    img: {
      height: 250,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Postdes: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 5,
      marginVertical: 15,
    },
    likes: {
      marginLeft: 10,
    },
    image: {
      width: SIZE / 2,
      height: SIZE / 2,
    },
  });
  return (
    <View style={styles.container}>
      <TapGestureHandler waitFor={doubleTapRef} onActivated={onSingleTap}>
        <TapGestureHandler
          maxDelayMs={250}
          ref={doubleTapRef}
          numberOfTaps={2}
          onActivated={onDoubleTap}>
          <Animated.View style={styles.box}>
            <ImageBackground style={styles.img} source={Images.nature}>
              <Animated.Image
                source={Images.heart}
                style={[
                  styles.image,
                  {
                    shadowOffset: {width: 0, height: 20},
                    shadowOpacity: 0.35,
                    shadowRadius: 35,
                  },
                  rStyle,
                ]}
                resizeMode={'center'}
              />
            </ImageBackground>
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
      <View style={styles.Postdes}>
        <TouchableOpacity onPress={likeFunc}>
          <AntDesign
            name={liked ? 'heart' : 'hearto'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <Animated.Text style={[styles.likes]}>{likes} Likes</Animated.Text>
      </View>
    </View>
  );
}
