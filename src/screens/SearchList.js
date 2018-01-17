import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FlatList,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import debounce from 'debounce';
import { fetchCoins, addToFavorites } from '../dispatchers/coinsActions';

class SearchList extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  componentDidMount() {
    this.props.fetchCoins();
  }

  handleTextChange = text => {
    this.setState({ search: text });
  };

  handleAddToFavorites = e => {
    this.props.addToFavorites(e);
  };

  _keyExtractor = item => item.symbol;

  render() {
    const { allCoins } = this.props;
    const { search } = this.state;
    return (
      <View style={{ marginTop: 50 }}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => this.handleTextChange(text)}
          value={this.state.search}
        />
        <FlatList
          data={allCoins.filter(e => {
            if (search.length === 0) {
              return true;
            }
            return (
              (e.symbol &&
                e.symbol.toLowerCase().includes(search.toLowerCase())) ||
              (e.name && e.name.toLowerCase().includes(search.toLowerCase()))
            );
          })}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (
            <View key={item.name || item.symbol} style={{ margin: 10 }}>
              <Image
                style={{ width: 20, height: 20 }}
                source={{
                  uri: `https://coincap.io/images/coins/${item.name}.png`
                }}
              />
              <Text>{item.name}</Text>
              <Text>{item.symbol}</Text>
              <TouchableOpacity
                onPress={() => this.handleAddToFavorites(item.symbol)}
              >
                <Icon name={'plus'} size={20} color="green" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { coinsReducer } = state;
  return {
    allCoins: coinsReducer.allCoins
  };
};

const mapDispatchToProps = {
  fetchCoins,
  addToFavorites
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
