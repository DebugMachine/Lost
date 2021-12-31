import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Profile from './Profile';
import Report from './Report';

export default class PostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    if (!this.props.route.params) {
      this.props.navigation.navigate('Home');
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.postContainer}>
            <ScrollView style={styles.postCard}>
              <View style={styles.authorContainer}>
                <View style={styles.authorNameContainer}>
                  <Text style={styles.authorNameText}>
                    {this.props.route.params.author}
                  </Text>
                </View>
              </View>
              <Image
                source={require('../assets/image_1.png')}
                style={styles.postImage}
              />
              <View style={styles.captionContainer}>
                <Text style={styles.itemText}>
                  {this.props.route.params.item}
                </Text>
              </View>
              <View style={styles.info}>
                <Text>{Profile.userDes}</Text>
              </View>
              <View style={styles.actionContainer}>
                <View style={styles.reportButton}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Report')}>
                    <Text style={styles.reportText}>Report</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  postContainer: {
    flex: 1,
  },
  postCard: {
    margin: RFValue(20),
    backgroundColor: '#2a2a2a',
    borderRadius: RFValue(20),
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: RFValue(10),
  },
  reportButton: {
    width: RFValue(160),
    height: RFValue(40),
    flexDirection: 'row',
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(5),
  },
  reportText: {
    color: 'white',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
  authorContainer: {
    height: RFPercentage(10),
    padding: RFValue(10),
    flexDirection: 'row',
  },
  authorNameContainer: {
    flex: 0.85,
    padding: RFValue(10),
    justifyContent: 'center',
  },
  authorNameText: {
    color: 'white',
    fontSize: RFValue(20),
  },
  postImage: {
    width: '100%',
    alignSelf: 'center',
    height: RFValue(200),
    borderTopLeftRadius: RFValue(20),
    borderTopRightRadius: RFValue(20),
    resizeMode: 'contain',
  },
  captionContainer: {
    padding: RFValue(10),
  },
  itemText: {
    fontSize: 13,
    color: 'white',
    paddingTop: RFValue(10),
  },
  info: {},
});
