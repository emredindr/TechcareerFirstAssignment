import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 78,
  },
  search_container: {
    flexDirection: 'row',
    padding: 3,
    marginBottom: 10,
  },
  search: {
    flex: 1,
    borderRadius: 7,
    padding: 5,
    paddingLeft: 20,
    borderColor: 'gray',
    backgroundColor: 'white',
    color: 'gray',
    borderWidth: 2,
  },
  create_user_icon: {
    verticalAlign: 'middle',
    marginLeft: 3,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: 'gray',
    textAlign: 'center',
    padding: 5,
  },
});
