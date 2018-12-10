import React from 'react';
import { AuthContext } from './AuthProvider';

export const HomePage = () => {
    return (
        <AuthContext>
            {({ signOut }) => {
                return (
                    <div>
                        <h1>Welcome</h1>
                        <button onClick={signOut}>LOGOUT</button>
                    </div>
                );
            }}
        </AuthContext>
    );
};
  
           

