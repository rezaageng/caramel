import { StyleSheet } from 'react-native';

const DeleteConfirmStyle = StyleSheet.create({
  wrapper: {
    backgroundColor: '#242424',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 32,
    alignItems: 'center',
    width: '100%',
    maxHeight: '100%',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 28,
  },
  text: {
    color: '#CA6D36',
  },
});

export default DeleteConfirmStyle;
