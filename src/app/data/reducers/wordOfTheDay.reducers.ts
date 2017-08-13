export const WordOfTheDay = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'SET_WORD_OF_THE_DAY':
      return payload;
    default:
      return state;
  }
};
