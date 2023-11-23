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
  
  const userAccountImage = 'https://unsplash.it/30/30';

  return (
    <ContentScrollerWithCollapsibleHeader
      headerTitle="Header title"
      leftButton={<BackButton onPress={handleOnPressLeftNode} />}
      rightButton={<UserAccountButton imgSrc={userAccountImage} onPress={handleOnPressRightNode} />}
    >
      <ScrollContent />
    </ContentScrollerWithCollapsibleHeader>
  );
};

export default App;
