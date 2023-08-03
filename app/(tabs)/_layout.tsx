import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { Feather } from '@expo/vector-icons';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen 
        name="index"
        options={{
          title: ' ',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="destination"
        options={{
          title: ' ',
          tabBarIcon: ({ color }) => <Entypo name="location-pin" size={25} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: ' ',
          tabBarIcon: ({ color }) => <Entypo name="map" size={25} color={color} />,

        }}
      />
      <Tabs.Screen
        name="liked"
        options={{
          title: ' ',
          tabBarIcon: ({ color }) => <Entypo name="heart" size={25} color={color}/>,

        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: ' ',
          tabBarIcon: ({ color }) => <Feather name="user" size={25} color={color} />,

        }}
      />
    </Tabs>
  );
}
