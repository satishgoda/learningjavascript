window.onload = function () {
  var app = new Vue(
    {
      el: "#app",

      data: {
        stuff: "Colors",
        colors: []
      },

      created() {
        fetch("http://localhost:3000/colors")
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
