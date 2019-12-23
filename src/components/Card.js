import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
     <View style={styles.containerStyle}>
       {props.children}
     </View>
  );
};

const styles = {
  containerStyle: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000'
  },
};
export default Card;
