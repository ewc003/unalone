import { Stack } from 'expo-router';
import { SessionProvider, useSession } from '../ctx';
import { SplashScreenController } from '../splash';

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <SessionProvider>
      <SplashScreenController />
      <RootNavigator />
    </SessionProvider>
  );
}

function RootNavigator() {
  const { session } = useSession();

  console.log('session', session);
  const isLoggedIn = session !== null;
  console.log('isLogged In', isLoggedIn);
  return (
    <Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen
          name="(app)"
          options={{ 
            headerShown: false
          }}
        />
      </Stack.Protected>

      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen
          name="sign-in"
          options={{ 
            headerShown: false
          }}
        />
      </Stack.Protected>
    </Stack>
  );
}
