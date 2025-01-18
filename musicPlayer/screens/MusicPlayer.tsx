import { StyleSheet, Text, View, Dimensions, Image, FlatList } from 'react-native'
import React, { useState } from 'react'

import TrackPlayer, 
{
    Track,
    useTrackPlayerEvents,
    Event
} from 'react-native-track-player'
import { playListData } from '@/constants'
import SongInfo from '@/components/SongInfo'
import ControllCenter from '@/components/ControllCenter'
import SongSlider from '@/components/SongSlider'
import { addTrack } from '@/musicPlayerService'

const addedTrack = addTrack();

console.log(addedTrack);


const {width} = Dimensions.get('window');

const MusicPlayer = () => {
    const [track,setTrack] = useState<Track | null >();

    useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
      if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
          const track = await TrackPlayer.getTrack(event.nextTrack);
          const {title} = track || {};
          setTrack(track);
      }
  });

    const renderArtWork = () => {
        return(
            <View style={styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    {track?.artwork && (
                        <Image
                         source={{uri: track?.artwork.toString()}}
                         style={styles.albumArtImg}
                         />
                    )}
                </View>
            </View>
        )
    }
  return (
    <View>
      <FlatList
        horizontal
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={song => song.id.toString()}
       />
       <SongInfo track={track} />
       <SongSlider />
       <ControllCenter />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#001d23',
      },
      listArtWrapper: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
      },
      albumContainer: {
        width: 300,
        height: 300,
      },
      albumArtImg: {
        height: '100%',
        borderRadius: 4,
    },
})

export default MusicPlayer