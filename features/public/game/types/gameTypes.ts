import { Animated } from "react-native"

export type optionProps={
    option:string,
    onPress:()=>void,
    selected:boolean,
    correct:boolean,
    disabled?:boolean,
    showAnswer:boolean
}

export type GetQuestionPayload = {
    user:string,
    correctResponses:string
}
export type StartButtonProps={
    onPress:()=>void,
    first:boolean,
    disabled?:boolean
}

export interface MetaData {
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: string;
  question: string;
}

// Interface for the return type of useGame
export interface UseGame {
  question: string;
  options: string[];
  meta: MetaData | null;
  startGame: () => void;
  stopGame: () => void;
  correct: string;
  selected: string | null;
  handleSelect: (i: string) => void;
  count: number;
  llamaAnim: Animated.Value;
  isLoading: boolean;
  isAlive: boolean;
  correctResponseCount: number;
  isError: boolean;
}
