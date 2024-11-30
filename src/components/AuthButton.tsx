import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LogIn, LogOut, Loader2 } from 'lucide-react';
import { AppDispatch, RootState } from '../store/store';
import { signInWithGoogle, signOutUser } from '../store/authSlice';

const AuthButton: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading } = useSelector((state: RootState) => state.auth);

  const handleAuth = () => {
    if (user) {
      dispatch(signOutUser());
    } else {
      dispatch(signInWithGoogle());
    }
  };

  if (loading) {
    return (
      <button
        disabled
        className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
      >
        <Loader2 className="w-5 h-5 animate-spin" />
        Loading...
      </button>
    );
  }

  return (
    <button
      onClick={handleAuth}
      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg transition-colors"
    >
      {user ? (
        <>
          <img
            src={user.photoURL || ''}
            alt={user.displayName || ''}
            className="w-6 h-6 rounded-full"
          />
          <span className="hidden md:inline">{user.displayName}</span>
          <LogOut className="w-5 h-5" />
        </>
      ) : (
        <>
          <LogIn className="w-5 h-5" />
          <span>Sign in with Google</span>
        </>
      )}
    </button>
  );
};

export default React.memo(AuthButton);