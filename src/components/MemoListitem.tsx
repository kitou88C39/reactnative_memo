import { ListItem, Button } from '@rneui/themed';

type MemoListItemProps = {
  name: string;
  content: string;
  onPress: () => void;
  onLongPress?: () => void;
  onDeletePress?: () => void;
  label?: { color: string; name: string };
};

const MemoListItem: React.FC<MemoListItemProps> = props => {
  const { content, name, onPress, onLongPress, onDeletePress, label } = props;

  return (
    <ListItem.Swipeable
      rightContent={reset => (
        <Button
          title="削除"
          onPress={() => {
            if (onDeletePress) {
              onDeletePress();
            }
            reset();
          }}
          icon={{ name: 'delete', color: 'white' }}
          buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
        />
      )}
    >
      <ListItem.Content>
        <ListItem.Title>{name}</ListItem.Title>
        <ListItem.Subtitle>{content}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem.Swipeable>
  );
};
export { MemoListItem };
