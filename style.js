import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  title: {
    fontSize: 14,
    textAlign: 'justify',
    paddingHorizontal: 8,
  },
  overview: {
    fontSize: 14,
    textAlign: 'justify',
  },
  gridBox: {
    flex: 1,
    height: 300,
    margin: 2,
    elevation: 5,
  },
  stlImg: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    textAlign: 'justify',
    paddingHorizontal: 8,
  }
});
export default styles;
