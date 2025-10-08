import React from 'react';

const getInitials = (name = '') => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const Avatar = ({ src, name, alt, size = 120 }) => {
  const dimension = { width: size, height: size };
  const label = alt || name || 'Profile image';

  if (src) {
    return (
      <span className="avatar" style={dimension}>
        <img className="avatar-img" src={src} alt={label} />
      </span>
    );
  }

  return (
    <span className="avatar avatar-fallback" style={dimension} aria-label={label}>
      {getInitials(name)}
    </span>
  );
};

export default Avatar;

