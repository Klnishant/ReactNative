import TrackPlayer, { AppKilledPlaybackBehavior } from 'react-native-track-player';
import Index from './App/index';
import { playbackService } from './musicPlayerService.js';
import { registerRootComponent } from 'expo';
import musicPlayerService from './musicPlayerService';

//registerRootComponent(Index);

TrackPlayer.updateOptions({
    android: {
        // This is the default behavior
        appKilledPlaybackBehavior:AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification
    },
});

TrackPlayer.registerPlaybackService(() => playbackService());