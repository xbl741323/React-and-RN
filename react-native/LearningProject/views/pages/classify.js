import React from 'react'
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native'

export default function classify() {

  function changeBtn() {
    console.log('点击了')
  }

  return (
    <View style={styles.containStyle}>
      <Text>classify</Text>
      <Button title="按钮" onPress={changeBtn} />
    </View>
  )
}

const styles = StyleSheet.create({
  containStyle: {
    width: Dimensions.get('window').width,
    height: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  }
})
