import { StyleSheet } from 'react-native';
import { ListItem } from '@rneui/themed';

type LabelListItemProps = {
  color: string;
  name: string;
  onPress: () => void;
  onEditPress: () => void;
};

const LabelListItem: React.FC<LabelListItemProps> = props => {
  const { color, name, onPress, onEditPress } = props;
};
