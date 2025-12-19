import React, { useState, useEffect } from "react";
import { X, Send, Heart } from "lucide-react";

const CommentsDrawer = ({ isOpen, onClose, reel }) => {
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Load sample comments
  useEffect(() => {
    if (isOpen && comments.length === 0) {
      setComments([
        { id: "1", username: "user123", text: "This is amazing! 😍", likes: 12, timestamp: "2h" },
        { id: "2", username: "cool_dude", text: "Where is this place?", likes: 5, timestamp: "5h" },
      ]);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const comment = {
      id: Date.now().toString(),
      username: "you",
      text: inputValue,
      likes: 0,
      timestamp: "Now",
    };

    setComments([comment, ...comments]);
    setInputValue("");
  };

  if (!isOpen) return null;

  return (
    <div className="cd-backdrop" onClick={onClose}>
      <div className="cd-drawer" onClick={(e) => e.stopPropagation()}>
        
        {/* HEADER */}
        <div className="cd-header">
          <div style={{ width: 32 }}></div>
          <h3 className="cd-title">Comments ({comments.length})</h3>
          <button className="cd-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* COMMENT LIST */}
        <div className="cd-comments">
          {comments.map((c) => (
            <div key={c.id} className="cd-comment">
              <div className="cd-avatar"></div>

              <div className="cd-comment-body">
                <div className="cd-user-row">
                  <span className="cd-username">{c.username}</span>
                  <span className="cd-time">{c.timestamp}</span>
                </div>

                <p className="cd-text">{c.text}</p>

                <div className="cd-actions">
                  <button className="cd-reply-btn">Reply</button>
                  {c.likes > 0 && <span className="cd-likes">{c.likes} likes</span>}
                </div>
              </div>

              <button className="cd-like-btn">
                <Heart size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* INPUT BOX */}
        <div className="cd-input-box">
          <div className="cd-input-inner">
            <div className="cd-small-avatar"></div>

            <input
              className="cd-input"
              placeholder="Add a comment..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            <button
              onClick={handleSend}
              className={`cd-send-btn ${inputValue.trim() ? "active" : ""}`}
            >
              <Send size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CommentsDrawer;
