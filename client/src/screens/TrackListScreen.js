import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

function TrackListScreen({navigation}) {
  return (
    <View>
        <Text style={{fontSize:40}}>Track List</Text>
        <Button title='Go to Track detail' onPress={() => navigation.navigate('TrackDetail')} />
    </View>
  )
}
const styles = StyleSheet.create({})

export default TrackListScreen