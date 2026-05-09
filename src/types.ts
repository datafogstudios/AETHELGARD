import { ReactNode } from 'react';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface LessonSection {
  title: string;
  icon?: ReactNode;
  illustration?: ReactNode;
  content: string;
  callout?: {
    type: 'info' | 'warning' | 'pro';
    text: string;
  };
}

export interface PracticeTask {
  instruction: string;
  steps: string[];
}

export interface RelatedLesson {
  title: string;
  path: string;
}

export interface LessonData {
  id: string;
  title: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  moduleLessonsCount: number;
  objectives: string[];
  introduction: string;
  sections: LessonSection[];
  takeaways: string[];
  practiceTask: PracticeTask;
  riskManagement: string;
  quiz: QuizQuestion[];
  relatedLessons: RelatedLesson[];
  nextPreview: string;
  formula?: {
    expression: string;
    variables: { name: string; desc: string }[];
    example: string;
  };
  realChart?: {
    url: string;
    pair: string;
    timeframe: string;
    caption: string;
  };
  comparativeTable?: {
    headers: string[];
    rows: { label: string; values: string[] }[];
  };
}

export interface ModuleData {
  title: string;
  icon: ReactNode;
  lessons?: LessonData[];
  sections?: { title: string; content: string; illustration?: ReactNode }[];
}
