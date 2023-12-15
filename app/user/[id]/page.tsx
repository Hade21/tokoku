import React from "react";
import { BackButton } from "@/app/components";
import ProfileData from "./profileData";

const Profile: React.FC = () => {
  return (
    <div className="self-start py-6 sm:w-[calc(100vw-1.5rem)] sm:px-6 sm:py-8">
      <div className="mb-6 self-start justify-self-start">
        <BackButton />
      </div>
      <ProfileData />
    </div>
  );
};

export default Profile;
