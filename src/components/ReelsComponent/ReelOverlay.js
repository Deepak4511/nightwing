import React from "react";
import { Heart, MessageCircle, Share2, Music } from "lucide-react";

const ReelOverlay = ({ reel, onCommentsClick }) => {
  return (
    <div className="reel-overlay-wrapper">
      <div className="reel-overlay-inner d-flex flex-row align-items-end">

        {/* LEFT BOTTOM SECTION */}
        <div className="flex-grow-1 mb-2 reel-left">

          {/* USER ROW */}
          <div className="d-flex align-items-center gap-2 reel-user-row">
            <div className="reel-avatar">
              <img src={reel.userAvatar} alt={reel.username} />
            </div>

            <h3 className="reel-username">@{reel.username}</h3>

            <button className="reel-follow-btn">Follow</button>
          </div>

          {/* DESCRIPTION */}
          <p className="reel-description">{reel.description}</p>

          {/* MUSIC TICKER */}
          <div className="d-flex align-items-center gap-2 text-white-50">
            <Music className="music-spin-icon" size={16} />
            <div className="reel-marquee-wrap">
              <p className="reel-marquee-text">
                {reel.songName} • Original Audio
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE ACTION BUTTONS */}
        <div className="d-flex flex-column align-items-center gap-4 reel-action-col">

          <ActionButton
            icon={<Heart size={28} />}
            label={formatNumber(reel.likes)}
            activeColor="reel-heart-active"
          />

          <ActionButton
            icon={<MessageCircle size={28} />}
            label={formatNumber(reel.comments)}
            onClick={onCommentsClick}
          />

          <ActionButton
            icon={<Share2 size={28} />}
            label={formatNumber(reel.shares)}
          />

          {/* Spinning poster disc */}
          <div className="reel-disc-wrapper position-relative">
            <div className="reel-disc">
              <img src={reel.posterUrl} alt="audio" />
            </div>

            <Music className="reel-disc-icon" size={14} />
          </div>
        </div>

      </div>
    </div>
  );
};

const ActionButton = ({ icon, label, onClick, activeColor }) => {
  const [isActive, setIsActive] = React.useState(false);

  const handlePress = () => {
    if (onClick) onClick();
    setIsActive(!isActive);
  };

  return (
    <div
      className="reel-action-btn text-center"
      onClick={handlePress}
    >
      <div
        className={`reel-action-icon ${isActive && activeColor ? activeColor : ""}`}
      >
        {icon}
      </div>
      {label && <span className="reel-action-label">{label}</span>}
    </div>
  );
};

function formatNumber(num) {
  if (num >= 1000000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toString();
}

export default ReelOverlay;
