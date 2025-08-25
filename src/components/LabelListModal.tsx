import { Modal, ModalBackdrop, ModalContent, ModalHeader, ModalBody } from '@gluestack-ui/themed';
import { Heading, ModalCloseButton, Icon, CloseIcon } from '@gluestack-ui/themed';

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
    <Modal>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">{title}</Heading>
          <ModalCloseButton>
            <Icon size="lg" as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody></ModalBody>
      </ModalContent>
    </Modal>
  );
};
