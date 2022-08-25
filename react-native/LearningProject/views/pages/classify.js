import React, { useState } from 'react'
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Alert,
  StatusBar,
  Switch,
  ActivityIndicator,
  Platform,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  SectionList,
  FlatList,
  Animated
} from 'react-native'

export default function classify() {
  // alert(Platform.OS)
  const [isEnabled, setIsEnabled] = useState(false)
  const [value, onChangeText] = React.useState('Useless Placeholder');
  const [numList] = useState(['', '', '', '', '', '', '', '', '', '', '', ''])
  const DATA = [
    {
      title: 'First Item',
    },
    {
      title: 'Second Item',
    },
    {
      title: 'Third Item',
    },
    {
      title: 'First Item',
    },
    {
      title: 'Second Item',
    },
    {
      title: 'Third Item',
    },
    {
      title: 'First Item',
    },
    {
      title: 'Second Item',
    },
    {
      title: 'Third Item',
    },
    {
      title: 'First Item',
    },
    {
      title: 'Second Item',
    },
    {
      title: 'Third Item',
    },

  ];
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  function changeBtn() {
    console.log('点击了')
    Alert.alert(
      '标题',
      '内容',
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    )
  }

  function toggleSwitch(e) {
    setIsEnabled(e)
  }

  function onPress(e) {
    console.log('触碰了')
  }

  function refresh() {
    console.log('下拉刷新')
  }

  function reached() {
    console.log('上拉刷新')
  }

  return (
    <SafeAreaView style={styles.containStyle}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(index) => index}
        ItemSeparatorComponent={() => {
          return <View style={styles.borderStyle}></View>
        }}
        ListEmptyComponent={() => {
          return (
            <View>
              <Text>空空如也</Text>
            </View>
          )
        }}
        // 上拉刷新
        refreshing={false}
        onRefresh={refresh}
        // 下拉刷新
        onEndReachedThreshold={0.1}
        onEndReached={reached}
        ListHeaderComponent={() => {
          return <Text>头部</Text>
        }}

        ListFooterComponent={() => {
          return <Text>没有更多数据了</Text>
        }}
        inverted={false}
      />
      {/* <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {
          numList.map((item, index) => {
            return <Text style={styles.tabStyle}>番剧</Text>
          })
        }
      </ScrollView> */}
      {/* <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.tabStyle}>{title}</Text>
        )}
        ItemSeparatorComponent={() => {
          return <View style={styles.borderStyle}></View>
        }}
        ListEmptyComponent={() => {
          return (
            <View>
              <Text>空空如也</Text>
            </View>
          )
        }}
        // 上拉刷新
        refreshing={false}
        onRefresh={refresh}
        // 下拉刷新
        onEndReachedThreshold={0.1}
        onEndReached={reached}

        ListHeaderComponent={() => {
          return <Text>头部</Text>
        }}

        ListFooterComponent={() => {
          return <Text>没有更多数据了</Text>
        }}
      /> */}
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      {/* <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text>Touch Here</Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.button}>
          <Text>Touch Here</Text>
        </View>
      </TouchableWithoutFeedback> */}
      {/* <Text>classify</Text>
      <Button title="按钮" onPress={changeBtn} color={'pink'} />
      <StatusBar hidden={false} backgroundColor={'red'} /> */}
      {/* <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}
      {/* <TextInput
        style={{ height: 200, width: 300, borderColor: 'gray', borderWidth: 1 }}
        placeholder="请输入用户名"
        secureTextEntry={true}
        onChangeText={text => onChangeText(text)}
        value={value}
        multiline={true}
        numberOfLines={4}
        textAlignVertical="top"
        keyboardType="number-pad"
      /> */}
      {/* <ActivityIndicator size="large" color="red" /> */}
      {/* <Image style={styles.tinyLogo} source={{
        uri: "https://reactnative.dev/img/tiny_logo.png"
      }} /> */}
      {/* <Image style={styles.tinyLogo} source={require('../images/cover.jpg')} /> */}
      {/* {
          numList.map((item, index) => {
            return <View style={styles.textStyle}>
              <Text>wishing{index}</Text>
            </View>
          })
        }
        {
          Platform.OS == 'android' ? <View style={styles.activeHeight}></View> : ''
        }
      </ScrollView> */}
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  containStyle: {
    width: Dimensions.get('window').width,
    backgroundColor: 'pink',
  },
  tinyLogo: {
    width: Dimensions.get('window').width,
    height: 400,
  },
  button: {
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10
  },
  textStyle: {
    width: Dimensions.get('window').width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    backgroundColor: 'lightblue',
    borderWidth: 2
  },
  tabStyle: {
    width: 100,
    height: 50,
    lineHeight: 50,
    textAlign: 'center',
  },
  activeHeight: {
    height: 50
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  },
  borderStyle: {
    borderWidth: 1
  }
})
