import { StyleSheet } from 'react-native';

const NotesModalStyle = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  wrapper: {
    backgroundColor: '#242424',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '80%',
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
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 8,
  },
  cancelButton: {
    backgroundColor: '#fc0384',
  },
  saveButton: {
    backgroundColor: '#4338ca',
  },
  saveButtonDisabled: {
    backgroundColor: '#6366f1',
  },
});

export default NotesModalStyle;
