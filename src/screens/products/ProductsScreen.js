import {
  RefreshControl,
  Text,
  View,
  FlatList,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import ProductCreateModal from './components/product-create/ProductCreateModal';
import Product from './components/product/Product';
import styles from './ProductsScreen.Style';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import filter from "lodash.filter";

const ProductsScreen = () => {
  const [products, setProducts] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [visibleProductCreate, setVisibleProductCreate] = useState(false);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const renderProducts = ({item: product, index}) => (
    <Product key={index} product={product} />
  );

  const renderSeparator = () => (
    <View
      style={{borderWidth: 2, marginBottom: 2, borderColor: '#e0e0e0'}}></View>
  );

  const fetchProducts = () => {
    setLoading(true);
    axios
      .get('https://northwind.vercel.app/api/products')
      .then(response => {
        setProducts(response.data);
        setAllProduct(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    setLoading(false);
  };

  const handleProductCreate = product => {
    axios
      .post('https://northwind.vercel.app/api/products', product)
      .then(response => {
        fetchProducts();
        setVisibleProductCreate(false);
      })
      .catch(error => {
        console.log(error);
        Alert.alert('Bilgilendirme !', error, [
          {text: 'Ok', onPress: () => console.log('OK Pressed')},
        ]);
      });
  };

  const handleSearch = query => {
    setSearch(query);
    const formattedQuery = query.toLowerCase();
    const filteredData = filter(allProduct, item => {
      return contains(item, formattedQuery);
    });
    setProducts(filteredData);
  };

  const contains = ({name}, query) => {
    if (name.toLowerCase().includes(query)) {
      return true;
    }
    return false;
  };

  const onRefresh = useCallback(async () => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.search_container}>
        <TextInput
          style={styles.search}
          value={search}
          onChangeText={handleSearch}
          placeholder="Search Product"
        />
        <Icon
          style={styles.create_user_icon}
          onPress={() => setVisibleProductCreate(true)}
          name="plus-circle-outline"
          size={30}
          color="gray"
        />
      </View>
      <Text style={{textAlign: 'right', color: 'gray', marginBottom: 8}}>
        ***Total Product Count : {products.length}{' '}
      </Text>

      <FlatList
        data={products}
        renderItem={renderProducts}
        ItemSeparatorComponent={renderSeparator}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
      />
      <ProductCreateModal
        visible={visibleProductCreate}
        onClose={() => setVisibleProductCreate(false)}
        onCreate={handleProductCreate}
      />
    </View>
  );
};

export default ProductsScreen;
