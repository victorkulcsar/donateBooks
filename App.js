import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

class App extends React.Component {

  UNSAFE_componentWillMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyAlmNOXn-DKKP6ibxgnRFzWePkxyn_u5ao",
      authDomain: "repasse-livros.firebaseapp.com",
      databaseURL: "https://repasse-livros.firebaseio.com",
      projectId: "repasse-livros",
      storageBucket: "repasse-livros.appspot.com",
      messagingSenderId: "686541399469",
      appId: "1:686541399469:web:38464e4b0e79a91fa7ed24",
      measurementId: "G-LR74MWP5SS"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    //firebase.analytics;

    //set timeout
    // to update, change set to update
    // to delete use remove
    firebase.database().ref('users/001').set(
      {
        name: 'Victor',
        age: 33
      }).then(() => {
        console.log('INSERTED')
      }).catch((error) =>{}
      
      );

      //once or on
      firebase.database().ref('users').once('value', (data) => {
        const dado = data.toJSON();  
        console.log(dado);
      })


  }

  render() {

    return (
      <View style={styles.container}>
        <Text>Hello world react - Victor 1234567 </Text>
        <StatusBar style="auto" />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
