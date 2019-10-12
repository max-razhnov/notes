const dateConvert = props => {
  let month = `0`;
  if (props.getMonth() < 9) {
    month += props.getMonth() + 1;
  } else {
    month = props.getMonth() + 1;
  }
  return `${props.getDate()}/${month}/${props.getFullYear()}`;
};

const timeConvert = props => {
  let arr = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  let sec = `0`,
    min = `0`,
    hour,
    AMPM;
  if (props.getSeconds() < 10) {
    sec += props.getSeconds();
  } else {
    sec = props.getSeconds();
  }
  if (props.getMinutes() < 10) {
    min += props.getMinutes();
  } else {
    min = props.getMinutes();
  }
  if (props.getHours() <= 12) {
    hour = props.getHours();
    AMPM = `AM`;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (props.getHours() === arr[i]) {
        hour = i + 1;
        AMPM = `PM`;
      }
    }
  }
  return `${hour}:${min}:${sec} ${AMPM}`;
};

export { dateConvert, timeConvert };
