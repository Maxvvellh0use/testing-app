export interface QuestionData {
  _id: number;
  question: string;
  code: string;
  answerOptions: {
    all: string[],
    correct: string,
  };
}

export interface Answers {
  [key: string]: string;
}
