export interface QuestionData {
  question: string;
  code: string;
  answerOptions: {
    all: string[],
    correct: string,
  };
}
