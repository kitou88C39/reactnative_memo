import { Modal, ModalBackdrop, ModalContent, ModalHeader, ModalBody, Heading, ModalCloseButton, Icon, CloseIcon } from '@gluestack-ui/themed';
import { TouchableOpacity, Text } from 'react-native';
import { LabelTag } from './LabelTag';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type LabelListModalProps = {
  visible: boolean;
  title: string;
  data: { id: number; name: string; color: string }[];
  onPress: (labelId?: number) => void;
  onClose: () => void;
};

const LabelListModal: React.FC<LabelListModalProps> = props => {
  const { visible, title, data, onPress, onClose } = props;
  return (
    <Modal isOpen={visible} onClose={onClose}>
      <ModalBackdrop />
      <ModalContent width={'85%'} backgroundColor="#ffffff">
        <ModalHeader>
          <Heading size="lg">{title}</Heading>
          <ModalCloseButton>
            <Icon size="lg" as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }} onPress={() => onPress(undefined)}>
            <MaterialCommunityIcons name="label" size={26} color={'gray'} />
            <Text style={{ marginLeft: 5 }}>ラベル削除</Text>
          </TouchableOpacity>
          {data.map(label => (
            <TouchableOpacity key={label.id} style={{ marginVertical: 2 }} onPress={() => onPress(label.id)}>
              <LabelTag color={label.color} name={label.name} />
            </TouchableOpacity>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export { LabelListModal };
