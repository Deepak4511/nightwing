"use client";

import React from "react";
import { Play } from "lucide-react";

export default function RelatedVideos({ videos, onSelect, currentId }) {
  return (
    <div className="w-100 mt-4">
      <h3 className="fw-bold text-white mb-3 ps-1 fs-5">Related Videos</h3>

      <div className="row g-3">
        {videos
          .filter((v) => v.id !== currentId)
          .map((video) => (
            <div key={video.id} className="col-12 col-sm-6 col-lg-3">
              <div
                onClick={() => onSelect(video)}
                className="related-card p-3 rounded-4 border neon-card-border position-relative"
              >
                {/* Thumbnail */}
                <div className="thumbnail-wrapper mb-3 rounded-4 overflow-hidden position-relative">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="thumbnail-img"
                  />

                  {/* Hover Overlay */}
                  <div className="thumbnail-overlay d-flex align-items-center justify-content-center">
                    <Play size={24} fill="white" className="neon-play-icon" />
                  </div>

                  {/* Duration Tag */}
                  <div className="video-duration text-white">
                    {video.duration}
                  </div>
                </div>

                {/* Text Info */}
                <div className="px-1">
                  <h4 className="related-title fw-bold text-secondary text-truncate">
                    {video.title}
                  </h4>

                  <div className="d-flex align-items-center gap-2 mt-1">
                    <img
                      src={video.creator.avatarUrl}
                      className="rounded-circle"
                      width={16}
                      height={16}
                    />
                    <span className="text-muted small text-truncate">
                      {video.creator.name}
                    </span>
                  </div>

                  <div className="d-flex justify-content-between mt-2 small text-muted font-monospace">
                    <span>{video.views} views</span>
                    <span>{video.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
