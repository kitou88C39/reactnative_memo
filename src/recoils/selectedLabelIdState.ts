import { atom } from 'recoil';

const selectedLabelIdState = atom<number | undefined>({
  key: 'selectedLabelIdState',
  default: undefined
});
