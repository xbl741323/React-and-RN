import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./home"
import Classify from "./classify"
import Policy from "./policy"
import Personal from "./personal"

export default function Tabs() {
  const Tab = createBottomTabNavigator();

  // 获取tabbar切换图标数据
  const getTab = (route, focused) => {
    let coverUrl;
    switch (route.name) {
      case 'Home':
        coverUrl = focused ? require('../../images/tabbar/home_active.png') : require('../../images/tabbar/home.png');
        break;
      case 'Classify':
        coverUrl = focused ? require('../../images/tabbar/policy_active.png') : require('../../images/tabbar/policy.png');
        break;
      case 'Policy':
        coverUrl = focused ? require('../../images/tabbar/service_active.png') : require('../../images/tabbar/service.png');
        break;
      case 'Personal':
        coverUrl = focused ? require('../../images/tabbar/personal_active.png') : require('../../images/tabbar/personal.png');
        break;
    }
    return coverUrl
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return <Image style={styles.tinyLogo} source={getTab(route, focused)} />
        },
        tabBarActiveTintColor: '#36A6FE',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      })}>
      <Tab.Screen name="Home" component={Home} options={{ title: "首页" }} />
      <Tab.Screen name="Classify" component={Classify} options={{ title: "分类" }} />
      <Tab.Screen name="Policy" component={Policy} options={{ title: "政策" }} />
      <Tab.Screen name="Personal" component={Personal} options={{ title: "我的" }} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 20,
    height: 20
  }
})
