import React from "react";

interface UserLayoutProps {
  children: React.ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <div>
      <section>
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
          <div className="flex w-full flex-col items-center justify-center px-4">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserLayout;
