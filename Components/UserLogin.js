import React from 'react';
import { View, Text } from 'react-native';

const UserLogin = ({ route }) => {
  const { userData } = route.params;

  return (
    <View>
      <Text>User Profile</Text>
      <Text>Email: {userData.email}</Text>
      <Text>Password: {userData.password}</Text>
    </View>
  );
};

export default UserLogin;