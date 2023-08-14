import {Text, View} from 'react-native';
import styles from './Product.Style';
import React from 'react';

const Product = ({product}) => {
  return (
    <View style={styles.container}>
      <Text
        style={product.unitPrice >= 50 ? styles.titleSpecial : styles.title}>
        {product?.name}
      </Text>
      <View style={styles.row}>
        <Text style={styles.price}>Price : {product?.unitPrice} $</Text>
        <Text style={styles.stock}>Stock : {product?.unitsInStock}</Text>
      </View>
    </View>
  );
};

export default Product;
