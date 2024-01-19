// https://videojs.com/guides/react/#react-functional-component-and-useeffect-example
import React from "react";
import VideoJS from "./VideoJS";
import "videojs-contrib-eme";

const App = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    // sources: [
    //   {
    //     src: "//vjs.zencdn.net/v/oceans.mp4",
    //     type: "video/mp4",
    //   },
    // ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      // videojs.log('player is waiting');
    });

    player.on("dispose", () => {
      // videojs.log('player will dispose');
    });

    player.eme();
    player.src({
      src: "https://media.axprod.net/TestVectors/v9-MultiFormat/Encrypted_Cbcs/Manifest_1080p.mpd",
      type: "application/dash+xml",
      keySystems: {
        "com.widevine.alpha": {
          url: "https://drm-widevine-licensing.axprod.net/AcquireLicense",
          licenseHeaders: {
            "X-AxDRM-Message":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiNjllNTQwODgtZTllMC00NTMwLThjMWEtMWViNmRjZDBkMTRlIiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsInZlcnNpb24iOjIsImxpY2Vuc2UiOnsiYWxsb3dfcGVyc2lzdGVuY2UiOnRydWV9LCJjb250ZW50X2tleXNfc291cmNlIjp7ImlubGluZSI6W3siaWQiOiJmOGM4MGMyNS02OTBmLTQ3MzYtODEzMi00MzBlNWM2OTk0Y2UiLCJlbmNyeXB0ZWRfa2V5IjoiaVhxNDlaODlzOGRDajBqbTJBN1h6UT09IiwidXNhZ2VfcG9saWN5IjoiUG9saWN5IEEifV19LCJjb250ZW50X2tleV91c2FnZV9wb2xpY2llcyI6W3sibmFtZSI6IlBvbGljeSBBIiwicGxheXJlYWR5Ijp7Im1pbl9kZXZpY2Vfc2VjdXJpdHlfbGV2ZWwiOjE1MCwicGxheV9lbmFibGVycyI6WyI3ODY2MjdEOC1DMkE2LTQ0QkUtOEY4OC0wOEFFMjU1QjAxQTciXX19XX19.k9OlwW0rUwuf5d5Eb0iO98AFR3qp7qKdFzSbg2PQj78",
          },
        },
      },
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 1,
        }}
      >
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </div>
      <img
        src="https://www.w3schools.com/html/pic_trulli.jpg"
        alt="test"
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default App;
