import React from 'react';
import { View, Button, Alert } from 'react-native';

const App = () => {
  const handlePress = () => {
    Alert.alert('hello');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Press Me" onPress={handlePress} />
    </View>
  );
};

export default App;
