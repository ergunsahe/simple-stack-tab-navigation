import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

// id: 0,
//     userName: 'tesla_nikola',
//     img:
//       'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/18-nikola-tesla-edward-watts.jpg',
//     description:
//       'Cillum ad sit eiusmod magna sunt enim et velit duis elit eiusmod in. Sunt fugiat occaecat sunt nulla commodo nulla in non laboris reprehenderit ex. Consequat velit in veniam occaecat. Magna dolor amet cupidatat enim duis amet anim consectetur irure Lorem ea consectetur. Sint sunt in anim laboris incididunt aliqua enim. Sunt exercitation proident exercitation voluptate reprehenderit irure eu ipsum officia non officia cupidatat consequat incididunt. Duis sunt dolor elit enim sint minim.',
//     isLiked: false,
const PostCard = (props) => {
  
  return (
    <TouchableWithoutFeedback onPress={() => props.selectedPost()}>
      <View style={styles.container}>
        <Image
          style={{height: Dimensions.get('window').height / 4}}
          source={{uri: props.post.img}}
        />
        <View style={styles.footContainer}>
          <Text style={styles.text}>{props.post.userName}</Text>
          <Text numberOfLines={2}>{props.post.description}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
           props.changeColor(props.post.id);
          }}>
          <Image
            style={[
              styles.heart,
              {tintColor: props.post.isLiked ? 'red' : "blue"},
            ]}
            source={require('../img/heart.png')}
          />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  footContainer: {
    margin: 5,
  },
  textContainer: {
    marginVertical: 15,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  heart: {
    width: 35,
    height: 30,
    alignSelf: 'flex-end',
  },
});
