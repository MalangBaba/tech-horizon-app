
export type InteractiveContent =
  | QuizInteractive
  | FlashcardInteractive
  | SorterInteractive
  | ReflectionInteractive;

export interface Topic {
  id: string;
  title: string;
  summary: string;
  interactive: InteractiveContent;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface QuizInteractive {
  type: 'quiz';
  title:string;
  description: string;
  questions: QuizQuestion[];
}

export interface Flashcard {
  term: string;
  definition: string;
}

export interface FlashcardInteractive {
  type: 'flashcards';
  title: string;
  description: string;
  cards: Flashcard[];
}

export interface SorterItem {
  id: string;
  text: string;
  category: string;
}

export interface SorterCategory {
  id: string;
  title: string;
}

export interface SorterInteractive {
  type: 'sorter';
  title: string;
  description: string;
  items: SorterItem[];
  categories: SorterCategory[];
}

export interface ReflectionInteractive {
  type: 'reflection';
  title: string;
  description: string;
  prompts: string[];
}
