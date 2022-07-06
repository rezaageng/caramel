import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppStyle from '../style/App.style';

function Todo() {
  return (
    <SafeAreaView style={AppStyle.safeArea}>
      <View>
        <Text style={{ color: 'white' }}>Todo</Text>
      </View>
    </SafeAreaView>
  );
}

export default Todo;
