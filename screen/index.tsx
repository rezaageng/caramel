import { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotesList from '../components/NotesList';
import HomeStyle from '../style/Home.style';
import Header from '../components/Header';

interface NotesListProps {
  title: string;
  note: string;
  date: string;
}

function Home() {
  const [notes, setNotes] = useState<NotesListProps[]>([]);

  return (
    <SafeAreaView style={HomeStyle.wrapper}>
      <Header />
      <ScrollView>
        <NotesList />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
