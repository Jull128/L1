const ChangeEnding = (function () {
  return {
    declOfNum: function (n) {
      n = Math.abs(n) % 100;
      let n1 = n % 10;
      if (n > 10 && n < 20) {
        return "сообщений";
      }
      if (n1 > 1 && n1 < 5) {
        return "сообщения";
      }
      if (n1 == 1) {
        return "сообщение";
      }
      return "сообщений";
    },
  };
})();
