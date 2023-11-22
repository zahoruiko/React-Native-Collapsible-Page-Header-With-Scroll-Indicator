import React from 'react';

import BackButton from './components/Header/BackButton';
import ContentScrollerWithCollapsibleHeader from './components/ContentScrollerWithCollapsibleHeader';
import ScrollContent from './components/ScrollContent';
import UserAccountButton from './components/Header/UserAccountButton';

const App = () => {
  const handleOnPressLeftNode = () => {
    console.log('Pressed Left button!');
  };

  const handleOnPressRightNode = () => {
    console.log('Pressed Right button!');
  };

  return (
    <ContentScrollerWithCollapsibleHeader
      headerTitle="Header title"
      leftButton={<BackButton onPress={handleOnPressLeftNode} />}
      rightButton={<UserAccountButton onPress={handleOnPressRightNode} />}
    >
      <ScrollContent />
    </ContentScrollerWithCollapsibleHeader>
  );
};

export default App;
