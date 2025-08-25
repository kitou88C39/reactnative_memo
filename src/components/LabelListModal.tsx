import { Modal, ModalBackdrop, ModalContent, ModalHeader, ModalBody, Heading, ModalCloseButton, Icon, CloseIcon } from '@gluestack-ui/themed';
import { LabelTag } from './LabelTag';
import { TouchableOpacity } from 'react-native';

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
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">{title}</Heading>
          <ModalCloseButton>
            <Icon size="lg" as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
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
