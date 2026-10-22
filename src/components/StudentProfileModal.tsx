import React, { useEffect } from 'react';
import { StudentProfile } from '../types/quiz';
import { StudentProfileCard } from './StudentProfileCard';

interface StudentProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: StudentProfile;
  onSaveProfile: (profile: StudentProfile) => void;
  soundEnabled?: boolean;
  onToggleSound?: () => void;
  onClearHistory?: () => void;
}

export const StudentProfileModal: React.FC<StudentProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
  soundEnabled,
  onToggleSound,
  onClearHistory,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-md my-8 animate-in zoom-in-95 duration-150">
        <StudentProfileCard
          profile={profile}
          onSaveProfile={(updated) => {
            onSaveProfile(updated);
            onClose();
          }}
          isInline={false}
          soundEnabled={soundEnabled}
          onToggleSound={onToggleSound}
          onClearHistory={onClearHistory}
          onClose={onClose}
        />
      </div>
    </div>
  );
};
