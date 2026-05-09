import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  completedLessons: string[];
  quizState: Record<string, Record<number, number>>;
  isDarkMode: boolean;
  isMuted: boolean;
  markLessonComplete: (lessonId: string) => void;
  setQuizAnswer: (lessonId: string, questionIndex: number, answerIndex: number) => void;
  toggleDarkMode: () => void;
  toggleMute: () => void;
  resetQuiz: (lessonId: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      completedLessons: [],
      quizState: {},
      isDarkMode: typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false,
      isMuted: false,
      markLessonComplete: (lessonId) =>
        set((state) => ({
          completedLessons: state.completedLessons.includes(lessonId)
            ? state.completedLessons
            : [...state.completedLessons, lessonId],
        })),
      setQuizAnswer: (lessonId, questionIndex, answerIndex) =>
        set((state) => ({
          quizState: {
            ...state.quizState,
            [lessonId]: {
              ...(state.quizState[lessonId] || {}),
              [questionIndex]: answerIndex,
            },
          },
        })),
      resetQuiz: (lessonId) =>
        set((state) => {
          const newQuizState = { ...state.quizState };
          delete newQuizState[lessonId];
          return { quizState: newQuizState };
        }),
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
    }),
    {
      name: 'fogx-academy-storage',
    }
  )
);
