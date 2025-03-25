'use client';
import { useState, useEffect } from 'react';

declare global {
  interface Window {
    growsurf?: {
      addParticipant: (participant: {
        email: string;
        firstName: string;
      }) => void;
    };
  }
}

type UserData = {
  name: string;
  email: string;
};

export default function Dashboard() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('userFormData');
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setUserData(parsedData);

        // Register user to GrowSurf (check if the script is loaded)
        if (
          window.growsurf &&
          typeof window.growsurf.addParticipant === 'function'
        ) {
          window.growsurf.addParticipant({
            email: parsedData.email,
            firstName: parsedData.name,
          });
        } else {
          console.warn('GrowSurf is not initialized yet.');
        }
      }
    }
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>

      {userData ? (
        <div className='p-4 border rounded shadow-md'>
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
