import { AntDesign } from '@expo/vector-icons';
import { Dispatch, SetStateAction } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import HeaderStyle from '../style/Header.style';

interface IProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

function Header({ setModalOpen }: IProps) {
  return (
    <View style={HeaderStyle.wrapper}>
      <Pressable
        style={HeaderStyle.pressable}
        android_ripple={{ color: '#ff369e', radius: 20 }}
        android_disableSound
        onPress={() => setModalOpen(true)}
      >
        <AntDesign name="plus" size={16} color="white" />
      </Pressable>
      <TextInput
        style={HeaderStyle.textInput}
        placeholder="Search"
        placeholderTextColor="#6e6e6e"
        selectionColor="#4338ca"
      />
    </View>
  );
}

export default Header;
