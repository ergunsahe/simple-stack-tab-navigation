import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';

const Post = (props) => {
  const data = props.route.params.userPost;
  return (
    <View>
      <Image
        source={{uri: data.img}}
        style={{height: Dimensions.get('window').height / 2}}
      />
      <Text>{data.userName}</Text>
      <Text>{data.description}</Text>
      <Image style={[styles.heart, {tintColor: data.isLiked ? "red":"blue",}]} source={require('../img/heart.png')} />
    </View>
  );
};

export {Post};

const styles = StyleSheet.create({
  heart: {
    width: 35,
    height: 30,
        alignSelf: 'flex-end',
  },
});
