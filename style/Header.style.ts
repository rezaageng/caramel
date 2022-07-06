import { StyleSheet } from 'react-native';

const HeaderStyle = StyleSheet.create({
  wrapper: {
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pressable: {
    backgroundColor: '#fc0384',
    padding: 12,
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: 12,
    marginRight: 8,
  },
  title: {
    color: '#ffffff',
    fontFamily: 'BalsamiqSans_400Regular',
    fontSize: 24,
  },

  image: {
    width: 38,
    height: 38,
    borderRadius: 9999,
  },
});

export default HeaderStyle;
