import { ActivityIndicator, SafeAreaView, StatusBar, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

import { setupPlayer, addTrack } from '../musicPlayerService'
import MusicPlayer from "@/screens/MusicPlayer";

export default function Index() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  
  console.log('hello');
  // async function setup() {
    
  //   let isSetup = await setupPlayer()
  //   console.log(isSetup);
    

  //   if (isSetup) {
  //     await addTrack()
  //   }

  //   setIsPlayerReady(isSetup)
  // }

  // useEffect(() => {
  //   setup();
  // },[isPlayerReady]);

  // if (!isPlayerReady) {
  //   return (
  //     <SafeAreaView>
  //       <ActivityIndicator />
  //     </SafeAreaView>
  //   )
  // }
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle={'light-content'} />
      <View>
        <Text>Music Player</Text>
      </View>
      <MusicPlayer />
    </View>
  );
}
