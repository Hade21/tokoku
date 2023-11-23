import React from "react";
import { BackButton } from "@/app/components";
import ProfileData from "./profileData";

const Profile: React.FC = () => {
  return (
    <div className="h-screen w-[calc(100vw-1.5rem)] self-start px-6 py-8">
      <div className="mb-6 self-start justify-self-start">
        <BackButton />
      </div>
      <ProfileData />
    </div>
  );
};

export default Profile;
