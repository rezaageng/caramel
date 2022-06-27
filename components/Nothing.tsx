import { Text, View } from 'react-native';
import NothingStyle from '../style/Nothing.style';

function Nothing() {
  return (
    <View style={NothingStyle.wrapper}>
      <Text style={NothingStyle.text}>Nothing here...</Text>
    </View>
  );
}

export default Nothing;
