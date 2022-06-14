import { Text, View } from 'react-native';
import header from '../style/Header.style';

function Header() {
  return (
    <View>
      <Text style={header.text}>Header</Text>
    </View>
  );
}

export default Header;
