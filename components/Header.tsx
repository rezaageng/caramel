/* eslint-disable global-require */
import { AntDesign } from '@expo/vector-icons';
import { Dispatch, SetStateAction } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import HeaderStyle from '../style/Header.style';

interface IProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

function Header({ setModalOpen }: IProps) {
  return (
    <View style={HeaderStyle.wrapper}>
      <Image
        source={require('../assets/image/eve_e.jpg')}
        style={HeaderStyle.image}
      />
      <Text style={HeaderStyle.title}>Caramel</Text>
      <Pressable
        style={HeaderStyle.pressable}
        android_ripple={{ color: '#ff369e', radius: 20 }}
        android_disableSound
        onPress={() => setModalOpen(true)}
      >
        <AntDesign name="plus" size={16} color="white" />
      </Pressable>
    </View>
  );
}

export default Header;
