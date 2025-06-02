import { Stack } from 'expo-router';
import React from 'react';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="(tabs)" 
        options={{ 
          headerShown: false
        }} 
      />
      <Stack.Screen
        name="sign-in"
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen name="(root)" />
    </Stack>
  );
}