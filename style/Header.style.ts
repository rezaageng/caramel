import { StyleSheet } from 'react-native';

const HeaderStyle = StyleSheet.create({
  wrapper: {
    paddingBottom: 16,
    flexDirection: 'row',
  },
  pressable: {
    backgroundColor: '#fc0384',
    padding: 12,
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: 12,
    marginRight: 8,
  },
  textInput: {
    backgroundColor: '#242424',
    flex: 1,
    paddingHorizontal: 12,
    color: '#ffffff',
    borderRadius: 12,
  },
});

export default HeaderStyle;
