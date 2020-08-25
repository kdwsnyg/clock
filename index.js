//获取时钟对象
const clock = document.getElementById('clock');

//显示小时数的函数
//判断小时数是否小于10，若小于10则在前方加“0”
function showHour(hour) {
  let show = hour;
  if(hour < 10) {
    show = '0' + hour;
  }
  return show;
}

//显示分钟数的函数
//判断分钟数是否小于10，若小于10则在前方加“0”
function showMinute(minute) {
  let show = minute;
  if(minute < 10) {
    show = '0' + minute;
  }
  return show;
}

//获取当前时间并写入
let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
clock.innerText = showHour(hour) + ":" + showMinute(minute);

//更新时间
setInterval(function() {
  now = new Date();
  hour = now.getHours();
  minute = now.getMinutes();
  clock.innerText = showHour(hour) + ":" + showMinute(minute);
}, 1000);