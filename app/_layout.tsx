import { Stack } from "expo-router";
import { useFonts} from "expo-font";

export default function RootLayout() {
  useFonts({
    'RobotoFlex':require('./../assets/fonts/RobotoFlex.ttf')
  })
  return (
    <Stack>
      {/* Reference the tabs layout group */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
