type LabelListModalProps = {
  visible: boolean;
  title: string;
  data: { id: number; name: string; color: string }[];
  onPress: (labelId?: number) => void;
  onClose: () => void;
};

const LabelListModal: React.FC<LabelListModalProps> = props => {
  const {} = props;
};
