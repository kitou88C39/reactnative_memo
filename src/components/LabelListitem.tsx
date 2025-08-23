import { StyleSheet, View } from 'react-native';
import { ListItem } from '@rneui/themed';
import { MaterialCommunityIcons } from 'expo/vector-icons';

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
      <ListItem bottomDivider style={styles.ListItem}>
        <MaterialCommunityIcons name="label" size={26} color={color} style={styles.labelIcon} />
        <ListItem.Content>
          <ListItem.Title style={styles.title}>{name}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  labelIcon: {
    marginRight: 10
  },
  ListItem: {
    flex: 1
  },
  title: {
    fontSize: 18
  }
});

export { LabelListItem };
