import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  modal: {
    flex: 1,
    margin: 0,
  },
  title: {
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    color: '#212F3D',
    fontStyle: 'italic',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#CCD1D1',
    padding: 10,
  },
  input_container: {
    flex: 1,
  },
  button_container: {
    padding: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#CCD1D1',
  },
  cancel_button: {
    backgroundColor: '#E74C3C',
    flex: 1,
    padding: 12,
    alignItems: 'center',
    margin: 3,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#A93226',
  },
  create_button: {
    backgroundColor: '#85C1E9',
    flex: 1,
    padding: 12,
    alignItems: 'center',
    margin: 3,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#2E86C1',
  },
});
