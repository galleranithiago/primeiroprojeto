import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default class Tela1 extends Component {  

  constructor(props){
    super(props);
    this.state={

    };
  }

  render() {


    return (
        <View style={styles.body}>
          <Text>Tela1</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    flex:1
  }
  
});
