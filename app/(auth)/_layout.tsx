import { Redirect, Stack } from "expo-router";
import { useSession } from "../../ctx";

export default function AuthLayout() {
  const { session } = useSession();

  const isAuthenticated = session !== null;

  if (!isAuthenticated) {
    console.log("Redirecting to /sign-in", session);
    return <Redirect href="/sign-in" />;
  }

  return (
    <Stack screenOptions={{ headerBackButtonDisplayMode: "minimal" }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}