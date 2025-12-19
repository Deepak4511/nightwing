
    "use client";

import React, { useState } from "react";
import { MOCK_VIDEOS } from "../components/VideoComponents/videoData";
// import { Video } from "../types";
import { Zap } from "lucide-react";
import RelatedVideos from "@/components/VideoComponents/RelatedVideos";
import Sidebar from "@/components/VideoComponents/Sidebar";
import VideoPlayer from "@/components/VideoComponents/VideoPlayer";

const WatchVideo = () => {
  const [currentVideo, setCurrentVideo] = useState(MOCK_VIDEOS[0]);

  return (
    <div className="neon-bg min-vh-100 text-white pb-5 position-relative">
      
      {/* Background ambience */}
      <div className="neon-ambience-1"></div>
      <div className="neon-ambience-2"></div>

      <main className="container py-5 position-relative">
        

        {/* Content Grid */}
        <div className="row g-4">
          
          {/* Left Column */}
          <div className="col-lg-8">
            <VideoPlayer video={currentVideo} />
            <RelatedVideos
              videos={MOCK_VIDEOS}
              currentId={currentVideo.id}
              onSelect={setCurrentVideo}
            />
          </div>

          {/* Right Column */}
          <div className="col-lg-4">
            <Sidebar
              creator={currentVideo.creator}
              comments={currentVideo.comments}
              videoTitle={currentVideo.title}
            />
          </div>
        </div>
      </main>
    </div>
  );
}


export default WatchVideo
