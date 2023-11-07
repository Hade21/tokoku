import React from "react";

const Profile = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>
        Profile of <span>{params.id}</span>
      </h1>
    </div>
  );
};

export default Profile;
