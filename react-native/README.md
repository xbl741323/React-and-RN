# React Native学习记录

## 一、环境配置（最新完整版配置请看官网：https://www.reactnative.cn/docs/environment-setup）
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
必须要看的注意事项一：请不要在目录、文件名中使用中文、空格等特殊符号。请不要单独使用常见的关键字作为项目名（如 class, native, new, package 等等）。请不要使用与核心模块同名的项目名（如 react, react-native 等）。
必须要看的注意事项二：请不要在某些权限敏感的目录例如 System32 目录中 init 项目！会有各种权限限制导致不能运行！
必须要看的注意事项三：请不要使用一些移植的终端环境，例如git bash或mingw等等，这些在 windows 下可能导致找不到环境变量。请使用系统自带的命令行（CMD 或 powershell）运行。
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