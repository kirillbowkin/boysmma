import { React, useEffect } from "react";
import Player from "../utils/Player";

export default function live() {
  useScript("https://cdn.plrjs.com/player/9f12a5efk7if7/v8n2jvm7s0fj.js");
  return (
    <div className="flex items-center justify-center h-full">
      <div id="player" className="w-2/3"></div>
      <Player id="player" file="http://localhost:8080/hls/test.m3u8" />
    </div>
  );
}

function useScript(url) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
}
