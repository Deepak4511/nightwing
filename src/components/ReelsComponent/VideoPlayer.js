import React, { useRef, useEffect, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const VideoPlayer = ({ reel, isActive, isMuted, toggleMute }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControlIcon, setShowControlIcon] = useState(false);

  useEffect(() => {
    if (isActive) {
      const playPromise = videoRef.current?.play();
      if (playPromise) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    } else {
      videoRef.current?.pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [isActive]);

  const handleVideoClick = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
    triggerIconAnimation();
  };

  const triggerIconAnimation = () => {
    setShowControlIcon(true);
    setTimeout(() => setShowControlIcon(false), 800);
  };

  return (
    <div className="vp-container" onClick={handleVideoClick}>
      
      {/* POSTER */}
      <img
        src={reel.posterUrl}
        alt="poster"
        className={`vp-poster ${isPlaying ? "vp-poster-hidden" : ""}`}
      />

      {/* VIDEO */}
      <video
        ref={videoRef}
        src={reel.videoUrl}
        loop
        muted={isMuted}
        playsInline
        className="vp-video"
      />

      {/* Play/Pause Fade Icon */}
      {showControlIcon && (
        <div className="vp-center-icon">
          <div className="vp-center-icon-box">
            {isPlaying ? (
              <Play className="vp-center-icon-svg" />
            ) : (
              <Pause className="vp-center-icon-svg" />
            )}
          </div>
        </div>
      )}

      {/* MUTE BUTTON */}
      <button
        className="vp-mute-btn"
        onClick={(e) => {
          e.stopPropagation();
          toggleMute();
        }}
      >
        {isMuted ? (
          <VolumeX className="vp-mute-icon" />
        ) : (
          <Volume2 className="vp-mute-icon" />
        )}
      </button>

      {/* GRADIENT OVERLAY */}
      <div className="vp-gradient" />
    </div>
  );
};

export default VideoPlayer;
