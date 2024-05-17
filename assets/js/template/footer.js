const footerInner = document.createElement("div");
footerInner.classList.add("inner");
footerInner.innerHTML = `
<p class="footer-info"> copyright@nms </p>
<ul class="my-site-list">
    <li><a href="https://naver.com">sdsdsd</a></li>
    <li><a href="https://naver.com">sdsdsds</a></li>
</ul>`;

document.querySelector(".footer").appendChild(footerInner);

