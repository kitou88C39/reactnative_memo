import { Input, InputField, Textarea, TextareaInput } from '@gluestack-ui/themed';
import { View } from 'react-native';
import { Button, InputAccessoryView, Keyboard, Platform } from 'react-native';

type MemoInputFormProps = {
  title: string;
  content: string;
  onTitleChange: (text: string) => void;
  onContentChange: (text: string) => void;
};

const inputAccessoryViewID = 'INPUT_ACCESSORY_VIEW_ID';

const MemoInputForm: React.FC<MemoInputFormProps> = props => {
  const { content, title, onTitleChange, onContentChange } = props;

  return (
    <View style={{ flex: 1, paddingBottom: 100 }}>
      <Textarea borderWidth={0} minWidth={'$full'} minHeight={'$full'}>
        <Input borderWidth={0} minWidth={'$full'} marginTop={'$4'} marginBottom={'$1'} paddingHorizontal={'$1'}>
          <InputField defaultValue={title} onChangeText={onTitleChange} fontSize={'$2xl'} fontWeight={'$bold'} placeholder="タイトル" />
        </Input>
        <TextareaInput
          scrollEnabled={true}
          paddingHorizontal={'$5'}
          defaultValue={content}
          onChangeText={onContentChange}
          fontSize={'$md'}
          placeholder="メモを入力してください"
          inputAccessoryViewID={inputAccessoryViewID}
        />
      </Textarea>

      {Platform.OS === 'ios' && <InputAccessoryView backgroundColor={'#F1F1F1'} style={{ alignContent: 'flex-end' }} />}
      <Button title="閉じる" onPress={() => Keyboard.dismiss()} />
    </View>
  );
};

export { MemoInputForm };
