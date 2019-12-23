import React from 'react';
import { View } from 'react-native';

const CardSection = (p) => {
  return (
    <View style={styles.containerStyle}>{p.children}</View>
  );
};

const styles = {
  containerStyle: {
    boarderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  }
};
export default CardSection;
