import React, { useState } from 'react';
import { Dimensions, GestureResponderEvent, Pressable, StyleSheet, Text, View, ViewProps } from 'react-native';

type PageHeaderProps = {
  progressBarPosition?: number;
  leftNode?: JSX.Element;
  rightNode?: JSX.Element;
  headerText?: string;
  handleOnPressLeftNode?: (event: GestureResponderEvent) => void;
  handleOnPressRightNode?: (event: GestureResponderEvent) => void;
  rightContainerStyle?: ViewProps['style'] | null;
  leftContainerStyle?: ViewProps['style'] | null;
};

const PageHeader: React.FC<PageHeaderProps> = ({
  progressBarPosition = 0,
  leftNode = null,
  rightNode = null,
  headerText = '',
  handleOnPressLeftNode = null,
  handleOnPressRightNode = null,
  rightContainerStyle = null,
  leftContainerStyle = null
}) => {
  const [screenWidth, setScreenWidth] = useState(0);

  const handleChangeOrientation = () => {
    setScreenWidth(Dimensions.get('window').width);
  };

  return (
    <View style={styles.mainWrapper} onLayout={handleChangeOrientation}>
      <View style={styles.pageHeaderContainer}>
        <Pressable onPress={handleOnPressLeftNode} style={leftContainerStyle || styles.leftItem}>
          {leftNode}
        </Pressable>
        <View style={styles.headerItem}>
          <Text style={styles.headerItemText}>{headerText}</Text>
        </View>
        <Pressable onPress={handleOnPressRightNode} style={rightContainerStyle || styles.rightItem}>
          {rightNode}
        </Pressable>
      </View>
      <View style={[styles.progressBar, { width: screenWidth * progressBarPosition }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'column'
  },
  pageHeaderContainer: {
    flexDirection: 'row',
    backgroundColor: '#FDEBD0'
  },
  headerItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerItemText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  leftItem: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  rightItem: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  progressBar: {
    height: 3,
    backgroundColor: 'orange'
  }
});

export default PageHeader;
