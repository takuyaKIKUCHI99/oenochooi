const addLeadingZero = (value: number) => {
  return `0${value}`.slice(-2);
};

const dateFormatter = (dateObj: Date): string => {
  const year = dateObj.getFullYear();
  const month = 1 + dateObj.getMonth();
  const date = dateObj.getDate();
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();
  const second = dateObj.getSeconds();

  let dateFormat = 'YYYY/MM/DD hh:mm:ss';
  dateFormat = dateFormat.replace(/YYYY/g, year.toString());
  dateFormat = dateFormat.replace(/MM/g, addLeadingZero(month));
  dateFormat = dateFormat.replace(/DD/g, addLeadingZero(date));
  dateFormat = dateFormat.replace(/hh/g, addLeadingZero(hour));
  dateFormat = dateFormat.replace(/mm/g, addLeadingZero(minute));
  dateFormat = dateFormat.replace(/ss/g, addLeadingZero(second));

  return dateFormat;
};

export default dateFormatter;
