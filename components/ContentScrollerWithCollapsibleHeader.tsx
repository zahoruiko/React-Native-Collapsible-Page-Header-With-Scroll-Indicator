import React, { useRef, useState } from 'react';
import { Animated, StatusBar, StyleSheet } from 'react-native';
import PageHeader from './Header/PageHeader';

type TContentScrollerWithCollapsibleHeaderProps = {
  children: JSX.Element;
  headerTitle?: string;
  leftButton?: JSX.Element;
  rightButton?: JSX.Element;
  headerTextColor?: string;
  headerBackgroundColor?: string;
  progressBarColor?: string;
  progressBarBackgroundColor?: string;
};

const ContentScrollerWithCollapsibleHeader: React.FC<TContentScrollerWithCollapsibleHeaderProps> = ({
  children,
  headerTitle = undefined,
  leftButton = undefined,
  rightButton = undefined,
  headerTextColor = '#333',
  headerBackgroundColor = '#FDEBD0',
  progressBarColor = 'orange',
  progressBarBackgroundColor = '#FDEBD0'
}) => {
  const [frameHeight, setFrameHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [yOffset, setYOffset] = useState(0);

  const scrolling = useRef(new Animated.Value(0)).current;

  const headerTranslation = scrolling.interpolate({
    inputRange: [100, 200],
    outputRange: [0, -60],
    extrapolate: 'clamp'
  });

  const headerScrollIndicator = scrolling.interpolate({
    inputRange: [0, contentHeight - frameHeight < 0 ? 0 : contentHeight - frameHeight],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  });

  return (
    <>
      <StatusBar hidden />
      <Animated.ScrollView
        onLayout={event => {
          setFrameHeight(event.nativeEvent.layout.height);
        }}
        onContentSizeChange={(contentWidth, contentHeight) => {
          setContentHeight(contentHeight);
        }}
        onScroll={event => {
          scrolling.setValue(event.nativeEvent.contentOffset.y);
          setYOffset(event.nativeEvent.contentOffset.y);
        }}
        scrollEventThrottle={16}
        style={styles.scrollOutside}
        contentContainerStyle={styles.scrollInside}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </Animated.ScrollView>
      <Animated.View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          top: 0,
          left: 0,
          right: 0,
          height: 60,
          backgroundColor: 'lightgray',
          opacity: 1,
          transform: [{ translateY: headerTranslation }]
        }}
      >
        <PageHeader
          headerText={headerTitle}
          leftButton={leftButton}
          rightButton={rightButton}
          progressBarPosition={+JSON.stringify(headerScrollIndicator)}
          headerTextColor={headerTextColor}
          headerBackgroundColor={headerBackgroundColor}
          progressBarColor={progressBarColor}
          progressBarBackgroundColor={progressBarBackgroundColor}
        />
      </Animated.View>
    </>
  );
};

export default ContentScrollerWithCollapsibleHeader;

const styles = StyleSheet.create({
  scrollOutside: {
    flex: 1
  },
  scrollInside: {
    paddingTop: 70,
    padding: 10
  }
});
