import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="userSetting" options={{ title: "Cài Đặt" }} />
      <Stack.Screen name="purchaseHistory" options={{ title: "Lịch sử mua hàng "}} />
      <Stack.Screen name="changePassword" options={{ title: "Đổi Mật Khẩu" }} />
      <Stack.Screen name="editPersonalInfo" options={{ title: "Thay Đổi Thông Tin" }} />
      <Stack.Screen name="deleteAccount" options={{ title: "Xóa Tài Khoản" }} />
    </Stack>
  );
}
