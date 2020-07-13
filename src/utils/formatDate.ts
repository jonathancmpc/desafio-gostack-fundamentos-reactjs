import { format } from 'date-fns';

const formatDate = (value: Date): string => {
  const date = new Date(value);

  const formattedDate = format(date, 'dd/MM/YYY');

  return formattedDate;
};

export default formatDate;
