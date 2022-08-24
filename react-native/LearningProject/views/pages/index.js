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
});
