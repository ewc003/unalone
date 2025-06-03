import { Stack } from "expo-router";
import { SessionProvider } from "../ctx";

export default function RootLayout() {
  return (
    <SessionProvider>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      </Stack>
    </SessionProvider>
   
  );
}
