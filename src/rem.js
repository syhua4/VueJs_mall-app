(function() {
  function resize() {
    let baseFontSize = 100; // 设计稿 100px  =  1rem || 750px  = 7.5rem
    let designWidth = 750; // 设计稿大小
    let width = window.innerWidth;
    let currentFontSize = (width / designWidth) * baseFontSize;
    let height = window.innerHeight;
    let scrollHeight = Math.ceil(height - currentFontSize * 1.9);
    document.documentElement.style.setProperty("--screen", scrollHeight + "px");
    currentFontSize <= baseFontSize
      ? (document.querySelector("html").style.fontSize = currentFontSize + "px")
      : (document.querySelector("html").style.fontSize = baseFontSize + "px");
  }
  window.onresize = function() {
    resize();
  };

  document.addEventListener("DOMContentLoaded", resize);
})();
