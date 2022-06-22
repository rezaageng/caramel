import { Text, View } from 'react-native';
import HeaderStyle from '../style/Header.style';

function Header() {
  return (
    <View style={HeaderStyle.container}>
      <Text style={HeaderStyle.text}>Header</Text>
    </View>
  );
}

export default Header;
