import { useEffect, useRef } from "react";
import Plyr from "plyr";
import Hls from "hls.js";
import "plyr/dist/plyr.css";
import { baseURL } from "../config/api"; // hoặc từ utils/config/api.js của bạn

const VideoPlayer = ({ src }) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            if (Hls.isSupported() && src.endsWith('.m3u8')) {
                const hls = new Hls();
                hls.loadSource(`${baseURL}${src}`);
                hls.attachMedia(videoRef.current);
                hls.on(Hls.Events.MANIFEST_PARSED, () => {
                    playerRef.current = new Plyr(videoRef.current, {
                        controls: ["play", "progress", "mute", "volume", "fullscreen"],
                    });
                });
            } else {
                playerRef.current = new Plyr(videoRef.current, {
                    controls: ["play", "progress", "mute", "volume", "fullscreen"],
                });
            }
        }

        return () => {
            if (playerRef.current) {
                playerRef.current.destroy();
            }
        };
    }, [src]);

    return (
        <video
            ref={videoRef}
            controls
            playsInline
            autoPlay
        >
            <source src={`${baseURL}${src}`} type="application/x-mpegURL" />
        </video>
    );
};

export default VideoPlayer;
