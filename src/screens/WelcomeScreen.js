import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TouchableOpacity } from 'react-native';

class WelcomeScreen extends Component {
  onRecipePress = () => {
    this.props.navigation.navigate('SearchList');
  };

  render() {
    return (
      <View style={viewStyle}>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: '#555',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            backgroundColor: '#fff',
            borderRadius: 100
          }}
          onPress={this.onRecipePress}
        >
          <Icon name={'plus'} size={50} color="#555" />
        </TouchableOpacity>
      </View>
    );
  }
}

const viewStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  height: '100%'
};

export default WelcomeScreen;
