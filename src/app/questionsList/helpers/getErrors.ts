import { Answers } from '../../types';

export const getErrors = (currentAnswers: Answers, correctAnswers: Answers): number => {
  let errors = 0;
  for (const key in currentAnswers) {
    if (currentAnswers[key] !== correctAnswers[key]) {
      errors += 1;
    }
  }
  return errors;
};
