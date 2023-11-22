import React from 'react';
import { GestureResponderEvent, Image, StyleSheet, TouchableOpacity } from 'react-native';

type TUserAccountButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
};

const UserAccountButton: React.FC<TUserAccountButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.profilePhoto}
        source={{
          uri: 'https://unsplash.it/30/30'
        }}
      />
    </TouchableOpacity>
  );
};

export default UserAccountButton;

const styles = StyleSheet.create({
  scrollOutside: {
    flex: 1
  },
  scrollInside: {
    paddingTop: 70,
    padding: 10
  },
  profilePhoto: {
    height: 40,
    width: 40,
    borderRadius: 10,
  }
});
