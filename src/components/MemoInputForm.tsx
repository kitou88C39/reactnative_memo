type MemoInputFormProps = {
  name: string;
  content: string;
  onPress: () => void;
  onLongPress?: () => void;
  onDeletePress?: () => void;
  label?: { color: string; name: string };
};

const MemoInputForm: React.FC<MemoInputFormProps> = props => {
  const { content, name, onPress, onLongPress, onDeletePress, label } = props;
