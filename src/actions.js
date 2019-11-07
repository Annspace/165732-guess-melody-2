export const INCREMENT_ERRORS = `INCREMENT_ERRORS`;
export const INCREMENT_QUESTION = `INCREMENT_QUESTION`;
export const RESET = `RESET`;

export function incrementErrors() {
  return {
    type: INCREMENT_ERRORS,
  };
}

export function incrementQuestion() {
  return {
    type: INCREMENT_QUESTION,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}
