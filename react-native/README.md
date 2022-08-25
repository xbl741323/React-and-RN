# React Native学习记录

## 一、环境配置（完整版配置请看官网：https://www.reactnative.cn/docs/environment-setup）
### 1、基本运行环境
+ 1、安装Node（Node版本应大于等于14）
+ 2、安装java运行环境（React Native 需要 Java Development Kit [JDK] 11）
+ 3、安装yarn（Yarn是 Facebook 提供的替代 npm 的工具，可以加速 node 模块的下载）
```
npm install -g yarn
```
### 2、Android 开发环境
+ 1、安装Android Studio（官网地址：https://developer.android.google.cn/studio）
+ 2、安装Android SDK（目前编译 React Native 应用需要的是Android 12 (S)版本的 SDK）
+ 3、配置ANDROID_SDK_ROOT环境变量
+ 4、把一些工具目录添加到环境变量Path
```
%ANDROID_SDK_ROOT%\platform-tools
%ANDROID_SDK_ROOT%\emulator
%ANDROID_SDK_ROOT%\tools
%ANDROID_SDK_ROOT%\tools\bin
```

### 3、创建新项目
+ 1、注意事项：如果你之前全局安装过旧的react-native-cli命令行工具，请使用npm uninstall -g react-native-cli卸载掉它以避免一些冲突。
```
必须要看的注意事项一：
请不要在目录、文件名中使用中文、空格等特殊符号。
请不要单独使用常见的关键字作为项目名（如 class, native, new, package 等等）。
请不要使用与核心模块同名的项目名（如 react, react-native 等）。
必须要看的注意事项二：请不要在某些权限敏感的目录例如 System32 目录中 init 项目！会有各种权限限制导致不能运行！
必须要看的注意事项三：
请不要使用一些移植的终端环境，例如git bash或mingw等等，这些在 windows 下可能导致找不到环境变量。
请使用系统自带的命令行（CMD 或 powershell）运行。
```
+ 2、创建命令
```
npx react-native init AwesomeProject
```
+ 3、使用 Android Studio 打开项目下的"android"目录，然后使用"AVD Manager"来查看可用的虚拟设备
+ 4、编译并运行 React Native 应用
```
cd AwesomeProject
yarn android
# 或者
yarn react-native run-android
```

### 4、模拟器调试
+ 1、点击模拟器（使模拟器获取焦点) 
+ 2、快捷键ctrl+m
+ 3、点选debug（之后会自动跳转到浏览器）

# 二、基础语法
### 1、掌握React（需要有React学习基础）
+ 1、JSX语法
+ 2、组件（分类、传参、属性、状态）
+ 3、生命周期
+ 4、Hook API
+ 5、Redux
+ 6、常用安装包

### 2、StyleSheet
+ StyleSheet是RN中声明样式的API
+ RN中的样式与CSS的不同:
```
1、没有继承性（RN中的继承只发生在Text组件上）
2、样式名采用小驼峰命名（fontSize）
3、所有尺寸都是没有单位（width：100）
4、有些特殊的样式名（marginHorizontal(水平外边距)，marginVertical（垂直外边距)）
```
示例：
```
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function index() {
  return (
    <View>
      <Text style={styles.colorSty}>index</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  colorSty: {
    fontSize: 54,
    color: 'pink'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

```

### 3、Flexbox（和css中的flex布局基本一样）
+ 1、术语
```
1、容器（container）
采用Flex布局的元素，称为Flex容器（flex container），简称“容器”
2、项目（item）
容器所有子元素，称为Flex项目（flex item），简称“项目”
3、主轴（main axis）
4、交叉轴（cross axis）
```

### 4、组件和API
+ 1、简介
```
RN中的核心组件，是对原生组件的封装
原生组件：Android或ios内的组件
核心组件：RN中最常用的，用在react-native的组件
```
+ 2、核心组件
```
1、View 视图组件       
2、Text 文本组件       
3、Alert 警告框组件    
4、Button 按钮组件
5、Switch 开关组件
6、StatusBar 状态栏组件
7、ActivityIndicator 加载指示器组件
8、Image 图片组件
9、TextInput 输入框组件
10、Touchable 触屏组件（共三个）
11、ScrollView 滚动视图组件
12、SectionList 分组列表组件
13、FlatList 高性能列表组件
14、Animated 动画组件
```
+ 3、第三方组件
```
1、WebView 相当于内置浏览器（https://github.com/react-native-webview/react-native-webview）
2、Picker 下拉框（https://github.com/react-native-picker/picker）
3、Swiper 展示轮播效果（https://github.com/leecade/react-native-swiper）
4、AsyncStorage 持久化存储系统（https://github.com/react-native-async-storage/async-storage）
5、Geolocation 获取定位信息（https://github.com/react-native-geolocation/react-native-geolocation）
6、Camera 调用摄像头（https://github.com/mrousavy/react-native-vision-camera）
7、ImagePicker（https://github.com/react-native-image-picker/react-native-image-picker）          
```
+ 4、自定义组件
### 5、路由和导航
