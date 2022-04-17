window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      media: '',
      matches: false,
      onchange: function () {},
      dispatchEvent: function () {
        return false;
      },
      addListener: function () {},
      removeListener: function () {},
      addEventListener: function () {},
      removeEventListener: function () {},
    };
  };
