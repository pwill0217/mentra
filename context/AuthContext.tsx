import {
  User,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../config/firebase';

interface AuthContextType {
  user: User | null;
  userData: any;
  loading: boolean;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userData: null,
  loading: true,
  signUp: async () => {},
  signIn: async () => {},
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  console.log('🚀 AuthProvider MOUNTED'); // ADD THIS LINE
  
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('🔥 Setting up auth listener...');
    console.log('Auth object:', auth);
    
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log('🔥 Auth state changed! User:', user?.email || 'No user');
      setUser(user);
      
      if (user) {
        // Fetch user data from Firestore
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            console.log('✅ User data loaded from Firestore');
            setUserData(userDoc.data());
          } else {
            console.log('⚠️ No user document in Firestore');
          }
        } catch (error) {
          console.error('❌ Error fetching user data:', error);
        }
      } else {
        setUserData(null);
      }
      
      console.log('✅ Setting loading to false');
      setLoading(false);
    });

    return () => {
      console.log('🔥 Cleaning up auth listener');
      unsubscribe();
    };
  }, []);

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Create user document in Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email,
        name,
        userType: 'mentee',
        createdAt: new Date(),
      });
      
      console.log('User created successfully');
    } catch (error: any) {
      console.error('Sign up error:', error.message);
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
  const cleanEmail = email.trim();
  const cleanPassword = password.trim();

  if (!cleanEmail || !cleanPassword) {
    throw new Error('Email and password are required');
  }

  try {
    console.log('EMAIL:', `"${email}"`);
    console.log('PASSWORD:', `"${password}"`);
    await signInWithEmailAndPassword(auth, cleanEmail, cleanPassword);
    console.log('User signed in successfully');
  } catch (error: any) {
    console.error('Sign in error:', error.code, error.message);
    throw error;
  }
};


  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      console.log('User signed out successfully');
    } catch (error: any) {
      console.error('Sign out error:', error.message);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, userData, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};