import { StyleSheet, Text, View } from 'react-native';

type MemoInputFormProps = {
  title: string;
  content: string;
  onTitleChange: (text: string) => void;
  onContentChange: (text: string) => void;
};

const MemoInputForm: React.FC<MemoInputFormProps> = props => {
  const { content, title, onTitleChange, onContentChange } = props;
};
