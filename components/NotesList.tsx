import { Text, View } from 'react-native';
import AppStyle from '../style/App.style';
import NotesListStyle from '../style/NotesList.style';

function NotesList() {
  return (
    <View style={NotesListStyle.wrapper}>
      <Text
        style={{
          ...AppStyle.textColor,
          ...NotesListStyle.title,
          ...NotesListStyle.child,
        }}
      >
        NotesList
      </Text>
      <Text
        style={{ ...AppStyle.textColor, ...NotesListStyle.child }}
        numberOfLines={1}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        accusamus quae, voluptas provident eius neque necessitatibus totam
        deleniti vitae quod eligendi sunt ut porro voluptatum dolor laboriosam
        nemo odit esse!
      </Text>
      <Text style={{ ...AppStyle.textColor, ...NotesListStyle.child }}>
        8 April 2022
      </Text>
    </View>
  );
}

export default NotesList;
