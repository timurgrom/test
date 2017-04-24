export const formatDate = function(date) {
  const setDate = new Date(date);
  return `${setDate.getDay()}/${setDate.getMonth()}/${setDate.getFullYear()}`;
}

export const formatTime = function(time) {
  const setTime = new Date(time);
  return `${setTime.getHours()}:${setTime.getMinutes()}`
}

export const uid = function() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}
