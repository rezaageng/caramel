import { StyleSheet } from 'react-native';

const NotesModalStyle = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  wrapper: {
    backgroundColor: '#242424',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
    alignItems: 'center',
    width: '100%',
    maxHeight: '100%',
  },
  inputWrapper: {
    width: '100%',
  },
  textInput: {
    marginVertical: 4,
    backgroundColor: '#242424',
    color: '#ffffff',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#fff',
  },
});

export default NotesModalStyle;
