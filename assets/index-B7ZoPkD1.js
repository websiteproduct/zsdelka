(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const r="/logo.png",n="/banner.jpg";document.querySelector("#app").innerHTML=`
  <header>
    <div class="container">
      <div class="d-flex align-items-center">
        <img src="${r}" class="logo" alt="Зерновая сделка">
        <nav class="menu">
          <ul>
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/">продукция</a>
            </li>
            <li>
              <a href="/">Наши преимущества</a>
            </li>
            <li>
              <a href="/">О бренде</a>
            </li>
            <li>
              <a href="/">Контакты</a>
            </li>
          </ul>
        </nav>
        <a href="tel:88123242208" class="header-phone">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>
          <span>8 (812) 324-22-08</span>
        </a>
      </div>
    </div>
  </header>
  <div class="container">
    <div class="banner">
      <img src="${n}" alt="">
    </div>
  </div>
  <div class="parallax">
    <div class="container">
      <div class="where-to-buy">
        <p>Наша продукция<br>доступна на маркетплейсе</p>
        <a href="https://www.wildberries.ru/brands/311345042-zernovaya-sdelka" target="_blank"><img src="wildberries.png"></a>
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="container">
      <div class="footer-inner">
        <div class="copyright">
          <img src="${r}" class="logo" alt="Зерновая сделка">
          <div>
            <h2>Зерновая сделка</h2>
            <p>192019, г. Санкт- Петербург, ул. Седова, д.10, литер В</p>
          </div>
        </div>
        <div class="contacts">
          <div>
            <h2>Обратная связь</h2>
            <nav class="footer-contacts">
              <a href="tel:88123242208">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>
                <span>8 (812) 324-22-08</span>
              </a>
              <a href="mailto:info@zsdelka.ru">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                <span>info@zsdelka.ru</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
