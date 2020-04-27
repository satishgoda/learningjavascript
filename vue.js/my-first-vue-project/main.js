window.onload = function () {
  var app = new Vue(
    {
      el: "#app",

      data: {
        stuff: "Colors",
        colors: []
      },

      created() {
        fetch("./colors.json")
          .then(response => response.json())
          .then(colors => {
            this.colors = colors;
          });
      }

    }
  );

  app.$watch('stuff', function (newValue, oldValue) {
    console.log(oldValue, newValue);
  });
};
