export interface Lesson {
    id: string;
    title: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    progress: number;
    completed: boolean;
  }
  
  
  export interface VocabularyWord {
    id: string;
    word: string;
    translation: string;
    example: string;
    audioUrl?: string;
  }
  
  
  export interface UserProgress {
    lessonsCompleted: number;
    wordsLearned: number;
    streak: number;
    currentLevel: string;
  }