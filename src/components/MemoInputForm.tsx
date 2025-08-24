import { StyleSheet, Text, View } from 'react-native';
import { Input, InputField, Textarea, TextareaInput } from '@gluestack-ui/themed';

type MemoInputFormProps = {
  title: string;
  content: string;
  onTitleChange: (text: string) => void;
  onContentChange: (text: string) => void;
};

const MemoInputForm: React.FC<MemoInputFormProps> = props => {
  const { content, title, onTitleChange, onContentChange } = props;

  return (
    <View style={{ flex: 1, paddingBottom: 100 }}>
      <Textarea borderWidth={0} minWidth={'$full'} minHeight={'$full'}></Textarea>
    </View>
  );
};
