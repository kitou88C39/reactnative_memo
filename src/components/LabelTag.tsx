import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type LabelTagProps = {
  color: string;
  name: string;
};

const LabelTag: React.FC<LabelTagProps> = ({ color, name }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2 }}>
      <MaterialCommunityIcons name="label" size={24} color={color} />
      <Text style={{ marginLeft: 5 }}>{name}</Text>
    </View>
  );
};

export { LabelTag };
