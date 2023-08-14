import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
    margin: 8,
    borderRadius: 8,
    shadowColor: 'gray',
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 0},
    elevation: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'gray',
  },
  titleSpecial: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'red',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  stock: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
