import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red-500">
        Edit app/index.tsx to edit this screen modern and fast.
      </Text>
      <Link
        className="py-2 px-6 bg-blue-600 text-white rounded-md mt-4"
        href="/login"
      >
        Login
      </Link>
    </View>
  );
}
