type MemoListItemProps = {
  name: string;
  content: string;
  onPress: () => void;
  onLongPress?: () => void;
  onDeletePress?: () => void;
  label?:{color:string; name:string}
};

const MemoListItem: React.FC<MemoListItemProps> = props => {
  const { content, name, onPress, onLongPress, onDeletePress, label } = props;

  return ()
};
