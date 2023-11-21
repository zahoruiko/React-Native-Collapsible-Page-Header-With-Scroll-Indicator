import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, } from 'react-native';
import BackArrowIcon from './assets/left-arrow.svg';
import PageHeader from './components/PageHeader';
import Slider from '@react-native-community/slider';

const PageHeaderScreen = () => {
  const [sliderPosition, setSliderPosition] = useState(0);

  const handleOnPressLeftNode = () => {
    console.log('Pressed Left Node');
  };
  const handleOnPressRightNode = () => {
    console.log('Pressed Right Node');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <PageHeader
        leftNode={<BackArrowIcon width={20} height={20} />}
        handleOnPressLeftNode={handleOnPressLeftNode}
        handleOnPressRightNode={handleOnPressRightNode}
        headerText="Page Header"
        rightNode={
          <Image
            style={styles.profilePhoto}
            source={{
              uri: 'https://placehold.co/40x40/A6ACAF/FFFFFF/png'
            }}
          />
        }
        progressBarPosition={sliderPosition}
      />
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#333333"
        maximumTrackTintColor="#000000"
        value={sliderPosition}
        onValueChange={setSliderPosition}
      />
      <View style={styles.sliderValueWrapper}>
        <Text style={styles.sliderValue}>Position: {sliderPosition}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    flexDirection: 'column'
  },
  profilePhoto: {
    height: 36,
    width: 36,
    borderRadius: 36,
    backgroundColor: 'white'
  },
  slider: {
    width: '100%',
    height: 40,
    marginTop: 20
  },
  sliderValueWrapper: {
    width: '100%',
    alignItems: 'center'
  },
  sliderValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange'
  }
});

export default PageHeaderScreen;
