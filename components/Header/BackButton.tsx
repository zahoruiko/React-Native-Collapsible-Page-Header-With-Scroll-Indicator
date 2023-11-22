import React from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import BackArrowIcon from '../../assets/left-arrow.svg';

type TBackButtonProps = {
  onPress: (event: GestureResponderEvent) => void
}

const BackButton: React.FC<TBackButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <BackArrowIcon width={20} height={20} />
    </TouchableOpacity>
  );
};

export default BackButton;
