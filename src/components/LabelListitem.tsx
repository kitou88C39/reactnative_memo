import { StyleSheet, View } from 'react-native';
import { ListItem } from '@rneui/themed';

type LabelListItemProps = {
  color: string;
  name: string;
  onPress: () => void;
  onEditPress: () => void;
};

const LabelListItem: React.FC<LabelListItemProps> = props => {
  const { color, name, onPress, onEditPress } = props;

  return (
    <View style={styles.container}>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title style={styles.title}>{name}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 18
  }
});
