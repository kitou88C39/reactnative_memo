import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

type LabelTagProps = {
  color: string;
  name: string;
};

const LabelTag: React.FC<LabelTagProps> = ({ color, name }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export { LabelTag };
