"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  Volume2,
  Maximize2,
  SkipForward,
  Activity,
  Sparkles,
  VolumeX,
} from "lucide-react";
// import { generateVideoInsights } from "../services/geminiService";

export default function VideoPlayer({ video }) {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [isMuted, setIsMuted] = useState(false);

//   const [aiSummary, setAiSummary] = useState(null);
//   const [loadingAi, setLoadingAi] = useState(false);

  // format seconds to MM:SS
  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return "00:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // reset on video change
  useEffect(() => {
    setIsPlaying(false);
    setHasStarted(false);
    setProgress(0);
    setCurrentTime("00:00");
  
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      // reload source
      videoRef.current.load();
    }
  }, [video]);

  const togglePlay = async () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      try {
        await videoRef.current.play();
      } catch (err) {
        // user gesture required — ignore
      }
      setHasStarted(true);
    }
    setIsPlaying((s) => !s);
  };

  const toggleMute = (e) => {
    e && e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted((m) => !m);
  };

  const toggleFullScreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen && containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen && document.exitFullscreen();
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const dur = videoRef.current.duration;
    setCurrentTime(formatTime(current));
    if (dur > 0) setProgress((current / dur) * 100);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(formatTime(videoRef.current.duration));
  };

  const handleSeek = (e) => {
    if (!progressRef.current || !videoRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width || 1;
    const percentage = Math.max(0, Math.min(1, clickX / width));
    const newTime = percentage * (videoRef.current.duration || 0);
    videoRef.current.currentTime = newTime;
    setProgress(percentage * 100);
  };

//   const handleGenerateSummary = async () => {
//     setLoadingAi(true);
//     try {
//       const summary = await generateVideoInsights(video.title, video.description);
//       setAiSummary(summary);
//     } catch (err) {
//       console.error("AI insight error:", err);
//     } finally {
//       setLoadingAi(false);
//     }
//   };

  return (
    <div className="d-flex flex-column gap-4 w-100">
      {/* Video Container */}
      <div
        ref={containerRef}
        className="video-container position-relative group rounded-3 overflow-hidden"
      >
        {/* video element */}
        <video
          ref={videoRef}
          src={video.videoUrl}
          className="video-element w-100 h-100"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          playsInline
        />

        {/* Thumbnail placeholder (shows until started) */}
        <div
          className={`thumbnail-placeholder position-absolute top-0 start-0 w-100 h-100 bg-cover bg-center transition-opacity ${hasStarted ? "opacity-0" : "opacity-100"}`}
          style={{ backgroundImage: `url(${video.thumbnailUrl})` }}
        >
          <div className="thumbnail-gradient position-absolute top-0 start-0 w-100 h-100" />
        </div>

        {/* Controls overlay */}
        <div className={`controls-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between p-4 ${isPlaying ? "playing" : "paused"}`}>
          {/* top bar */}
          <div className="d-flex justify-content-between align-items-start">
            <div className="badge-live bg-black-40 px-3 py-1 rounded-pill text-mono text-neon-pink">LIVE FEED • 4K</div>
            <button onClick={toggleFullScreen} className="btn-icon bg-black-40">
              <Maximize2 size={18} className="text-white" />
            </button>
          </div>

          {/* big center play */}
          <div className="d-flex align-items-center justify-content-center position-absolute inset-center pointer-events-none">
            <button
              onClick={togglePlay}
              className={`btn-play pointer-events-auto d-flex align-items-center justify-content-center rounded-circle`}
              aria-label="Play"
            >
              {isPlaying ? <Pause size={32} /> : <Play size={32} />}
            </button>
          </div>

          {/* bottom info & controls */}
          <div className="controls-bottom bg-gradient-to-top py-3 px-0 px-md-3">
            <div className="mb-2">
              <div className="tags d-flex gap-2 text-neon-blue small fw-semibold text-uppercase">
                {video.tags && video.tags.map((t) => (
                  <span key={t} className="tag">#{t}</span>
                ))}
              </div>

              <h2 className="video-title text-white fw-bold lh-tight text-truncate my-2">{video.title}</h2>

              {!hasStarted && (
                <div className="meta small text-muted d-flex align-items-center gap-2">
                  <span>{video.views} Views</span>
                  <span className="dot" />
                  <span>{video.date}</span>
                </div>
              )}
            </div>

            {/* progress & controls row */}
            <div className="d-flex align-items-center gap-3">
              <button onClick={togglePlay} className="btn-icon-transparent">
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>

              <div ref={progressRef} onClick={handleSeek} className="progress-bar flex-grow-1 position-relative">
                <div className="progress-filled position-absolute h-100 rounded-pill" style={{ width: `${progress}%` }} />
                <div className="progress-thumb position-absolute" style={{ left: `${progress}%` }} />
              </div>

              <div className="time small text-mono text-muted text-end" style={{ minWidth: 140 }}>
                {currentTime} / {duration}
              </div>

              <button onClick={toggleMute} className="btn-icon-transparent">
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Action bar */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
        <div className="d-flex gap-2 flex-wrap">
          <button className="btn-action d-flex align-items-center gap-2">
            <div className="btn-icon-bg">
              <Activity size={16} />
            </div>
            <span className="fw-medium">Like</span>
          </button>

          <button className="btn-action d-flex align-items-center gap-2">
            <SkipForward size={18} />
            <span className="fw-medium">Share</span>
          </button>

          {/* <button onClick={handleGenerateSummary} disabled={loadingAi} className="btn-action-ai d-flex align-items-center gap-2">
            <Sparkles size={16} className={loadingAi ? "spin" : ""} />
            <span className="ai-label">{loadingAi ? "Analyzing..." : "AI Insight"}</span>
          </button> */}
        </div>
      </div>

      {/* AI summary */}
      {/* {aiSummary && (
        <div className="ai-summary p-3 rounded-2 border">
          <div className="d-flex gap-2 align-items-start">
            <Sparkles size={16} className="text-neon-purple mt-1" />
            <p className="mb-0 text-muted fst-italic">`{aiSummary}`</p>
          </div>
        </div>
      )} */}
    </div>
  );
}
