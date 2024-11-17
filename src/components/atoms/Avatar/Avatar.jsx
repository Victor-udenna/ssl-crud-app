import React from 'react';

const Avatar = (firstname, lastname, background, size) => {
  return (
    <img
      src={`https://ui-avatars.com/api/?name=${firstname}+${lastname}&background=${background}&color=ffffff&size=${size}&rounded=true`}
      alt="avatar"
    />
  );
};
export default Avatar;
