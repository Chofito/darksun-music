import React, { useEffect } from 'react';
import { loadScript } from '../utils/utils';

const SpotifyPlayer = () => {

  useEffect(() => {
    async function loadSpotifySDK() {
      await loadScript({
        id: 'spotify-player',
        defer: true,
        source: 'https://sdk.scdn.co/spotify-player.js',
      })
    }

    (window as any).onSpotifyWebPlaybackSDKReady = () => {
      console.log('YEAH!!!')
    };

    loadSpotifySDK();
  }, [])

  return (
    <div>hola</div>
  );
}

export default SpotifyPlayer;
