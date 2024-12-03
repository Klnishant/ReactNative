import { ActivityIndicator, SafeAreaView, StatusBar, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

import { setupPlayer, addTrack } from '../musicPlayerService'
import MusicPlayer from "@/screens/MusicPlayer";

export default function Index() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer()

    if (isSetup) {
      await addTrack()
    }

    setIsPlayerReady(isSetup)
  }

  useEffect(() => {
    setup();
  },[]);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle={'light-content'} />
      <MusicPlayer />
    </View>
  );
}
