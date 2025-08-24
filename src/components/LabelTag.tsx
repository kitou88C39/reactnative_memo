type LabelTagProps = {
  color: string;
  name: string;
  onPress: () => void;
  onEditPress: () => void;
};

const LabelTag: React.FC<LabelTagProps> = props => {
  const { color, name, onPress, onEditPress } = props;