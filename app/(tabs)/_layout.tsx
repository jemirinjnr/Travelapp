import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, useColorScheme, StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { Feather } from '@expo/vector-icons';
import { BerlinTabBarNavigator, DotSize, JanmTabBarNavigator } from 'rn-slick-bottom-tabs';
import TabOneScreen from '.';
import TabTwoScreen from './destination';
import TabThreeScreen from './map';
import TabFourScreen from './liked';
import TabFiveScreen from './profile';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }

const Tabs: any = BerlinTabBarNavigator()


const TabBarIcon = (props: any) => {
  return (
    <Entypo
      name={props.name}
      size={props.size ? props.size : 24}
      color={props.tintColor}
    />
  )
}
export default () => (
  <Tabs.Navigator backBehavior='history'
    screenOptions={{
      animation: 'slide_from_right'

    }}

    initialRouteName="TabOne"
    tabBarOptions={{
      activeTintColor: "#7A28CB",
      inactiveTintColor: "#9e9e9e",
      activeBackgroundColor: "#e5cfff",
    }}
    appearance={{
      dotSize: DotSize.MEDIUM,

    }}
  >
    <Tabs.Screen
      name="index"
      component={TabOneScreen}
      options={{
        title: " ",
        tabBarIcon: ({ focused, color }: any) => (
          <TabBarIcon
            focused={focused}
            tintColor={color}
            name="home"
          />
        ),

      }}
    />

    <Tabs.Screen
      name="destination"
      component={TabTwoScreen}
      options={{
        title: " ",
        tabBarIcon: ({ focused, color }: any) => (
          <TabBarIcon
            focused={focused}
            tintColor={color}
            name="location-pin"
          />
        ),
      }}
    />
    <Tabs.Screen
      name="map"
      component={TabThreeScreen}
      options={{
        title: " ",
        tabBarIcon: ({ focused, color }: any) => (
          <TabBarIcon
            focused={focused}
            tintColor={color}
            name="map"
          />
        ),
      }}
    />

    <Tabs.Screen
      name=" "
      component={TabFourScreen}
      options={{
        tabBarIcon: ({ focused, color }: any) => (
          <TabBarIcon
            focused={focused}
            tintColor={color}
            name="heart"
          />
        ),
      }}
    />
    <Tabs.Screen
      name="profile"
      component={TabFiveScreen}
      options={{
        title: " ",
        tabBarIcon: ({ focused, color }: any) => (
          <TabBarIcon
            focused={focused}
            tintColor={color}
            name="user"
          />
        ),
      }}
    />
  </Tabs.Navigator>
);

