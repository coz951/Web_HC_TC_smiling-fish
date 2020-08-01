Vue.component("navbar",{
    template: `
    <nav>
    <a href="./about.html">關於我們</a>
    <a href="./latest news.html">最新消息</a>
    <a href="./product.html">產品介紹</a>
    <a href="./Store base.html">門市據點</a>
    <a href="./contact.html">聯絡我們</a>
    </nav>
    `
})

var navbar = new Vue({
    el: "#navbar"
})