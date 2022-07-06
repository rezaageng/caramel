import { Modal, Pressable, Text, View } from 'react-native';
import AppStyle from '../style/App.style';
import DeleteConfirmStyle from '../style/DeleteConfirm.style';
import NotesModalStyle from '../style/NotesModal.style';

interface IProps {
  popup: boolean;
  deleteNote: () => void;
  cancelDelete: () => void;
}

function DeleteConfirm({ popup, deleteNote, cancelDelete }: IProps) {
  return (
    <Modal
      onRequestClose={cancelDelete}
      visible={popup}
      transparent
      animationType="slide"
    >
      <View style={NotesModalStyle.modal}>
        <View style={DeleteConfirmStyle.wrapper}>
          <View>
            <Text style={AppStyle.textColor}>
              Are you sure you want to delete this note?
            </Text>
          </View>
          <View style={DeleteConfirmStyle.buttonWrapper}>
            <Pressable onPress={cancelDelete}>
              <Text style={DeleteConfirmStyle.text}>No</Text>
            </Pressable>
            <Pressable onPress={deleteNote}>
              <Text style={DeleteConfirmStyle.text}>Yes</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default DeleteConfirm;
