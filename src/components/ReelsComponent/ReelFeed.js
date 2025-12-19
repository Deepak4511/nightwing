import React, { useState, useEffect, useRef } from "react";
import { SAMPLE_REELS } from "./ReelsComponent";
import VideoPlayer from "./VideoPlayer";
import ReelOverlay from "./ReelOverlay";
import CommentsDrawer from "./CommentsDrawer";

const ReelFeed = () => {
  const [activeReelId, setActiveReelId] = useState(SAMPLE_REELS[0].id);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const containerRef = useRef(null);
  const reelRefs = useRef({});

  // Track reel visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            if (id) setActiveReelId(id);
          }
        });
      },
      { root: containerRef.current, threshold: 0.6 }
    );

    Object.values(reelRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const activeReel = SAMPLE_REELS.find((r) => r.id === activeReelId);

  return (
    <div className="reels-wrapper">

      {/* Scroll Container */}
      <div ref={containerRef} className="reels-scroll-container">
        {SAMPLE_REELS.map((reel) => (
          <div
            key={reel.id}
            data-id={reel.id}
            ref={(el) => (reelRefs.current[reel.id] = el)}
            className="reel-slide"
          >
            {/* Reel Inner Wrapper */}
            <div className="reel-inner">
              <VideoPlayer
                reel={reel}
                isActive={activeReelId === reel.id}
                isMuted={isMuted}
                toggleMute={() => setIsMuted(!isMuted)}
              />

              <ReelOverlay
                reel={reel}
                onCommentsClick={() => setIsCommentsOpen(true)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="reel-bottom-gradient d-md-none"></div>

      {/* Comments Drawer */}
      {activeReel && (
        <CommentsDrawer
          isOpen={isCommentsOpen}
          onClose={() => setIsCommentsOpen(false)}
          reel={activeReel}
        />
      )}
    </div>
  );
};

export default ReelFeed;
