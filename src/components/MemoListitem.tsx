type MemoListItemProps = {
  color: string;
  name: string;
  onPress: () => void;
  onEditPress: () => void;
};

const MemoListItem: React.FC<MemoListItemProps> = props => {
  const { color, name, onPress, onEditPress } = props;