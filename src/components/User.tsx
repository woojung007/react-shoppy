import { User } from 'firebase/auth';
import React from 'react';

type UserProps = {
  user: User;
};

export default function UserProfile({
  user: { photoURL, displayName },
}: UserProps) {
  return (
    <div>
      <img src={photoURL!} alt={displayName!} />
      <span>{displayName}</span>
    </div>
  );
}
