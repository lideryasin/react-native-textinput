import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {
  Kaede,
  Hoshi,
  Jiro,
  Isao,
  Madoka,
  Akira,
  Hideo,
  Kohana,
  Makiko,
  Sae,
  Fumi,
} from 'react-native-textinput-effects';

export default class TextInputEffectsExample extends Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >

        <View style={[styles.card2, { backgroundColor: '#a9ceca' }]}>
          <Text style={styles.title}>Kitap Ekle</Text>
          <Fumi
            label={'Ad Soyad'}
            yazı//labelStyle={{ color: '#a3a3a3' }}
            inputStyle={{ color: '#f95a25' }}
            iconClass={FontAwesomeIcon}
            iconName={'book'}
            iconColor={'#77116a'}
            iconSize={15}
          />
          <Fumi
            style={styles.input}
            label={'Kitap Adı'}
            iconClass={FontAwesomeIcon}
            iconName={'graduation-cap'}
            iconColor={'#77116a'}
          />
          <Fumi
            style={styles.input}
            label={'Yazarın Adı'}
            yazı//labelStyle={{ color: '#a3a3a3' }}
            inputStyle={{ color: '#f95a25' }}
            iconClass={FontAwesomeIcon}
            iconName={'book'}
            iconColor={'#77116a'}
            iconSize={15}
          />
          <Fumi
            style={styles.input}
            label={'Yayın Evi'}
            yazı//labelStyle={{ color: '#a3a3a3' }}
            inputStyle={{ color: '#f95a25' }}
            iconClass={FontAwesomeIcon}
            iconName={'book'}
            iconColor={'#77116a'}
            iconSize={15}
          />
          <Fumi
            style={styles.input}
            label={'Kitap Kimde'}
            yazı//labelStyle={{ color: '#a3a3a3' }}
            inputStyle={{ color: '#f95a25' }}
            iconClass={FontAwesomeIcon}
            iconName={'book'}
            iconColor={'#77116a'}
            iconSize={15}
          />
        </View>
        <Image style={styles.image} source={require('./images/ana.jpg')}></Image>

        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.textStyle}> SAVE </Text>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: 'white',
  },
  content: {
    // not cool but good enough to make all inputs visible when keyboard is active
    paddingBottom: 300,
  },
  card1: {
    paddingVertical: 16,
  },
  card2: {
    padding: 16,
  },
  input: {
    marginTop: 4,
  },
  title: {
    paddingBottom: 16,
    textAlign: 'center',
    color: '#404d5b',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 75,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5
  }
});