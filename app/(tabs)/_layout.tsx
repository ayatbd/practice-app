import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
// Import Lucide Icons
import { Home, Bookmark, Search, User } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // Active tab color (e.g., iOS Blue or your brand color)
        tabBarActiveTintColor: "#2563EB",
        // Inactive tab color
        tabBarInactiveTintColor: "#94a3b8",
        // Show or hide the text label (true/false)
        tabBarShowLabel: true,

        tabBarStyle: {
          // Fix for Android having the tab bar stuck to the bottom
          height: Platform.OS === "ios" ? 88 : 60,
          paddingTop: 10,
          paddingBottom: Platform.OS === "ios" ? 28 : 10,
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#e2e8f0",
          elevation: 0, // Remove shadow on Android for a flat look
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          marginTop: -2, // Pull label closer to icon
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Home
              color={color}
              size={24}
              strokeWidth={focused ? 2.5 : 2} // Bold the icon when active
            />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <Search color={color} size={24} strokeWidth={focused ? 2.5 : 2} />
          ),
        }}
      />

      <Tabs.Screen
        name="save"
        options={{
          title: "Saved",
          tabBarIcon: ({ color, focused }) => (
            <Bookmark color={color} size={24} strokeWidth={focused ? 2.5 : 2} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <User color={color} size={24} strokeWidth={focused ? 2.5 : 2} />
          ),
        }}
      />
    </Tabs>
  );
}
