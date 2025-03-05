import React from 'react';
import { useAppContext } from '../context/AppContext';

const UserProfile = () => {
  const { user } = useAppContext();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">User Profile</h1>
      <div className="mt-4">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
