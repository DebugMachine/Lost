import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDes: "",
      userName: "",
      info:""
    };
  }
  render() {
    return (
      <View style={style.beta}>
        <Text style={style.titleText}> Profile </Text>
        <View style={style.textInput}>
         <TextInput
            style={style.inputFont}
            onChangeText={(userName) => this.setState({userName})}
            placeholder={'Enter you name'}
          />
          <TextInput
            style={style.inputFont}
            onChangeText={(userDes) => this.setState({userDes})}
            placeholder={"What's on your mind?"}
          />
           <TextInput
            style={style.inputFont}
            onChangeText={(info) => this.setState({info})}
            placeholder={"Contact Info"}
          />
     
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  inputFont: {
    height: RFValue(40),
    borderColor: 'black',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(12),
    textColor: 'white',
    color: 'black',
  },
  beta: {
    flex: 1,
    backgroundColor: 'black',
  },

  titleText: {
    color: 'white',
    fontSize: 30,
    paddingTop: 90,
    paddingLeft: 20,
  },

  textInput: {
    paddingTop: 80,
    padingLeft: 40,
    margin: 20,
  },
});
