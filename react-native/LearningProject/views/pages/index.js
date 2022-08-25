import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, SafeAreaView, Button } from 'react-native'
import Swiper from "react-native-swiper"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';


export default function index() {

  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => console.log(info),
      error => alert(JSON.stringify(error)), {
      timeout: 5000
    }
    );
  }, [])

  const saveData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', '哈哈哈')
      alert("存储成功！")
    } catch (e) {
      // saving error
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if (value !== null) {
        // value previously stored
        alert(value)
      }
    } catch (e) {
      // error reading value
    }
  }

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('@storage_Key')
    } catch (e) {
      // error reading value
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Swiper style={styles.wrapper} autoplay={true} showsButtons={true}>
          <Image style={styles.wrapperImage} source={require('../images/cover.jpg')} />
          <Image style={styles.wrapperImage} source={require('../images/cover.jpg')} />
          <Image style={styles.wrapperImage} source={require('../images/cover.jpg')} />
        </Swiper>
      </ScrollView>
      <View style={styles.btnSty}>
        <Button style={styles.btnSty} width="100" title="存储数据" onPress={saveData}></Button>
      </View>
      <View style={styles.btnSty}>
        <Button style={styles.btnSty} width="100" title="获取数据" onPress={getData}></Button>
      </View>
      <View style={styles.btnSty}>
        <Button style={styles.btnSty} width="100" title="移除数据" onPress={removeData}></Button>
      </View>
    </SafeAreaView>
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
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  wrapper: {
    height: 300
  },
  btnSty: {
    width: Dimensions.get('window').width,
    marginTop: 20
  },
  wrapperImage: {
    width: Dimensions.get('window').width,
    height: 300
  }
});
