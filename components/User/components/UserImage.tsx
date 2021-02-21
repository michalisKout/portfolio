import React, { FC } from "react";

interface Props {
  imgUrl: string;
}
const UserImage: FC<Props> = ({ imgUrl }) => (
  <div className="user--image-container">
    <div className="user--image-wrapper">
      <div className="max-w-lg">
        <img className="user--image" src={imgUrl} alt="" />
      </div>
    </div>
  </div>
);

export default UserImage;
