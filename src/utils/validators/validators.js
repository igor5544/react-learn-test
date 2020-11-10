export const required = value => {
  return value ? undefined :  'Field is required';
}

export const maxLengthCreator = maxLenght => value => {
  return value.length <= maxLenght ? undefined :  'Max length is 30 symblos';
}