"use client";

import React, { useState } from "react";
import { CheckCircle2, MessageSquare, Heart, Send } from "lucide-react";
// import { generateAIComment } from "../services/geminiService";

export default function Sidebar({ creator, comments: initialComments}) {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
//   const [isGenerating, setIsGenerating] = useState(false);

//   const handleAiComment = async () => {
//     setIsGenerating(true);
//     const text = await generateAIComment(videoTitle);
//     setNewComment(text);
//     setIsGenerating(false);
//   };

  const submitComment = () => {
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now().toString(),
      user: {
        id: "me",
        name: "You",
        handle: "@you",
        avatarUrl: "https://picsum.photos/seed/me/100",
        bio: "",
      },
      text: newComment,
      timestamp: "Just now",
      likes: 0,
    };

    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <div className="d-flex flex-column gap-4 w-100 sidebar-wrapper">

      {/* PROFILE CARD */}
      <div className="p-4 rounded-4 neon-card border position-relative overflow-hidden">
        <div className="profile-top-line"></div>

        <div className="d-flex align-items-center gap-3 mb-4">
          <div className="position-relative">
            <img
              src={creator.avatarUrl}
              alt={creator.name}
              className="rounded-circle object-cover neon-avatar"
            />
            {creator.isVerified && (
              <div className="verified-badge position-absolute">
                <CheckCircle2 size={16} className="text-neon-blue" />
              </div>
            )}
          </div>

          <div>
            <h2 className="text-white fs-5 fw-bold">{creator.name}</h2>
            <p className="text-secondary small">{creator.handle}</p>
          </div>
        </div>

        <p className="text-secondary small mb-4 bio-text">{creator.bio}</p>

        <div className="d-flex gap-2">
          <button className="btn neon-follow-btn flex-fill">Follow</button>
          <button className="btn neon-sub-btn flex-fill">Subscribe</button>
        </div>
      </div>

      {/* COMMENTS SECTION */}
      <div className="neon-card p-4 rounded-4 border d-flex flex-column comments-box">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-white d-flex align-items-center gap-2 fs-6 fw-bold">
            <MessageSquare size={18} className="text-neon-blue" />
            Comments
          </h4>
          <span className="font-monospace small text-secondary">Top Comments</span>
        </div>

        {/* Input */}
        <div className="mb-4">
          <div className="d-flex gap-2 mb-2">
            <input
              type="text"
              className="form-control neon-input"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />

            <button className="btn neon-send-btn" onClick={submitComment}>
              <Send size={18} />
            </button>
          </div>

          {/* <button
            onClick={handleAiComment}
            disabled={isGenerating}
            className="ai-btn"
          >
            {isGenerating ? "Generating..." : "✨ Auto-generate AI comment"}
          </button> */}
        </div>

        {/* COMMENTS LIST */}
        <div className="comments-scroll flex-grow-1">
          {comments.map((comment) => (
            <div key={comment.id} className="d-flex gap-2 mb-3">
              <img
                src={comment.user.avatarUrl}
                className="rounded-circle neon-comment-avatar"
                width={32}
                height={32}
              />

              <div className="flex-grow-1">
                <div className="d-flex justify-content-between">
                  <span className="small fw-bold text-light">{comment.user.handle}</span>
                  <span className="text-muted small">{comment.timestamp}</span>
                </div>

                <div className="comment-bubble mt-1">
                  <p className="text-light small mb-0">{comment.text}</p>
                </div>

                <div className="d-flex gap-3 mt-1 ms-1">
                  <button className="comment-action-btn">
                    <Heart size={10} /> {comment.likes}
                  </button>

                  <button className="comment-action-btn">Reply</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
