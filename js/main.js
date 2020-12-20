$(".glavni-col").click(function (e) {
  e.preventDefault();
  let datum = new Date();
  if (datum.getMinutes().toString() < 10)
    alert(
      `${datum
        .getDate()
        .toString()}.${datum
        .getMonth()
        .toString()}.${datum
        .getFullYear()
        .toString()} | ${datum
        .getHours()
        .toString()}:0${datum.getMinutes().toString()}`
    );
  else
    alert(
      `${datum
        .getDate()
        .toString()}.${datum
        .getMonth()
        .toString()}.${datum
        .getFullYear()
        .toString()} | ${datum
        .getHours()
        .toString()}:${datum.getMinutes().toString()}`
    );
});
