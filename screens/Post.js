import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          this.props.navigation.navigate('PostScreen', (post = this.props.post))
        }>
        <View style={styles.cardContainer}>
          <View style={styles.authorContainer}>
            <View style={styles.authorNameContainer}>
              <Text style={styles.authorNameText}>
                {this.props.post.author}
              </Text>
            </View>
          </View>
          <Image
            source={require('../assets/image_1.png')}
            style={styles.postImage}
          />
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{this.props.post.item}</Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.button}>
              <Ionicons name={'alert'} size={RFValue(30)} color={'white'} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: '#2a2a2a',
    borderRadius: RFValue(20),
    padding: RFValue(20),
  },
  authorContainer: {
    flex: 0.1,
    flexDirection: 'row',
  },
  authorNameContainer: {
    flex: 0.85,
    justifyContent: 'center',
  },
  authorNameText: {
    color: 'white',
    fontSize: RFValue(20),
  },
  postImage: {
    marginTop: RFValue(20),
    resizeMode: 'contain',
    width: '100%',
    alignSelf: 'center',
    height: RFValue(275),
  },
  itemText: {
    fontSize: 13,
    color: 'white',
    paddingTop: RFValue(10),
  },
  actionContainer: {
    justifyContent: 'center',
    marginTop: 10,
    padding: RFValue(10),
  },
});
