import React from 'react';
import { DimensionValue, StyleSheet, Text, View } from 'react-native';

type TPageHeaderProps = {
  headerText?: string;
  leftButton?: JSX.Element;
  rightButton?: JSX.Element;
  progressBarPosition?: number;
  headerTextColor?: string;
  headerBackgroundColor?: string;
  progressBarColor?: string;
  progressBarBackgroundColor?: string;
};

const PageHeader: React.FC<TPageHeaderProps> = ({
  headerText = '',
  leftButton = undefined,
  rightButton = undefined,
  progressBarPosition = 0,
  headerTextColor = '#333',
  headerBackgroundColor = '#FDEBD0',
  progressBarColor = 'orange',
  progressBarBackgroundColor = '#FDEBD0'
}) => {
  const progressBarLength: DimensionValue = `${progressBarPosition * 100}%`;

  return (
    <View style={styles.mainWrapper}>
      <View style={[styles.pageHeaderContainer, { backgroundColor: headerBackgroundColor }]}>
        <View style={styles.leftItem}>{leftButton}</View>
        <View style={styles.headerItem}>
          <Text style={[styles.headerItemText, { color: headerTextColor }]}>{headerText}</Text>
        </View>
        <View style={styles.rightItem}>{rightButton}</View>
      </View>
      <View style={[styles.progressBarWrapper, { backgroundColor: progressBarBackgroundColor }]}>
        <View
          style={[styles.progressBar, { width: progressBarLength, backgroundColor: progressBarColor }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'column',
    width: '100%',
    height: 60
  },
  pageHeaderContainer: {
    flexDirection: 'row'
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
    padding: 10
  },
  rightItem: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  progressBarWrapper: {
    height: 3
  },
  progressBar: {
    height: 3
  }
});

export default PageHeader;
