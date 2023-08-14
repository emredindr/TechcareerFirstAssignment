import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Input.Style';

const Input = ({iconName, ...rest}) => {
  return (
    <View style={styles.container}>
      <TextInput {...rest} style={styles.text} />
      <Icon style={styles.icon} name={iconName} size={30} />
    </View>
  );
};

export default Input;
