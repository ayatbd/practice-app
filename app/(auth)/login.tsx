import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (email === "" || password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    Alert.alert("Success", `Welcome back, ${email}!`);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* <StatusBar style="dark" /> */}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 justify-center px-8"
      >
        {/* Header Section */}
        <View className="mb-10">
          <Text className="text-3xl font-bold text-gray-800">Welcome Back</Text>
          <Text className="text-base text-gray-500 mt-2">
            Enter your details to sign in
          </Text>
        </View>

        {/* Form Section */}
        <View className="">
          {/* Email Input */}
          <View className="flex-row items-center bg-gray-100 rounded-xl px-4 h-14 border border-gray-200 focus:border-blue-500">
            <Ionicons name="mail-outline" size={20} color="#6B7280" />
            <TextInput
              className="flex-1 ml-3 text-gray-800 text-base"
              placeholder="Email Address"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password Input */}
          <View className="flex-row items-center bg-gray-100 rounded-xl mt-4 px-4 h-14 border border-gray-200">
            <Ionicons name="lock-closed-outline" size={20} color="#6B7280" />
            <TextInput
              className="flex-1 ml-3 text-gray-800 text-base"
              placeholder="Password"
              placeholderTextColor="#9CA3AF"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#6B7280"
              />
            </TouchableOpacity>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity className="items-end mb-4">
            <Text className="text-blue-600 font-semibold">
              Forgot Password?
            </Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-blue-600 h-14 rounded-xl justify-center items-center shadow-md shadow-blue-300"
          >
            <Text className="text-white text-lg font-bold">Login</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View className="flex-row justify-center mt-8">
          <Text className="text-gray-500">Don't have an account? </Text>
          <TouchableOpacity>
            <Text className="text-blue-600 font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
