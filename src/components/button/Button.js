import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './Button.Style';

const Button = ({title, loading=false, ...res}) => {
  return (
    <TouchableOpacity style={styles.container} disabled={loading} {...res}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
