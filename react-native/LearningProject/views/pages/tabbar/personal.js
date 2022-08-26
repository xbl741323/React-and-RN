import React from 'react'
import { StyleSheet, Dimensions, Text, View, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

export default function Personal({ navigation }) {

  const onPress = (num) => {
    navigation.navigate(num == 1 ? 'Login' : 'Register')
  }

  return (
    <View style={styles.contain}>
      <View style={styles.btnContain}>
        <TouchableOpacity style={styles.btn} onPress={(e) => onPress(0, e)}>
          <Text style={styles.textSty}>注册</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={(e) => onPress(1, e)}>
          <View style={styles.btn}>
            <Text style={styles.textSty}>登录</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contain: {
    width: Dimensions.get('window').width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnContain: {
    marginTop: 200
  },
  btn: {
    width: Dimensions.get('window').width / 2,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#36A6FE',
    marginTop: 20,
    borderRadius: 15,
  },
  textSty: {
    color: "#ffffff",
    fontSize: 16
  }
})
