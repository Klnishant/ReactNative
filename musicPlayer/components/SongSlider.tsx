import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider'
import { useProgress } from 'react-native-track-player'



const SongSlider = () => {
    const {duration, position} = useProgress();
  return (
    <View>
      <Slider
        style={styles.sliderContainer}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        maximumTrackTintColor="#fff"
        thumbTintColor="#fff"
      />
      <View style={styles.timeContainer}>
        <Text style={styles.time}>
            {new Date(position * 1000).toISOString().substring(15, 19)}
        </Text>
        <Text style={styles.time}>
            {new Date((duration - position) * 1000).toISOString().substring(15, 19)}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    sliderContainer: {
        width: 350,
        height: 40,
        marginTop: 25,
    
        flexDirection: 'row',
      },
      timeContainer: {
        width: 340,
    
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      time: {
        color: '#fff',
    },
})

export default SongSlider