import { ListItem, Button } from '@rneui/themed';
import { StyleSheet } from 'react-native';

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
const styles = StyleSheet.create({
  title: {
    color: '#4A5054',
    fontWeight: 'bold',
    fontSize: 20
  },
  subTitle: {
    color: '#95A2AC',
    fontSize: 15,
    padding: 4,
    maxHeight: 100
  }
});

export { MemoListItem };
