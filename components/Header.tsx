import { AntDesign } from '@expo/vector-icons';
import { Pressable, TextInput, View } from 'react-native';
import HeaderStyle from '../style/Header.style';

function Header() {
  return (
    <View style={HeaderStyle.wrapper}>
      <Pressable style={HeaderStyle.pressable}>
        <AntDesign name="plus" size={16} color="white" />
      </Pressable>
      <TextInput
        style={HeaderStyle.textInput}
        placeholder="Search"
        placeholderTextColor="#6e6e6e"
      />
    </View>
  );
}

export default Header;
