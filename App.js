import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


const App = () => (
  <View>
    <SafeAreaView>
      <Header headerText="Albums" />
      <AlbumList />
    </SafeAreaView>
  </View>
);

export default App;
