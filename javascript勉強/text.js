const omikuji_items = [
  "大吉! ",
  "中吉。",
  "吉",
  "小吉",
  "末吉"
];


const btn = document.getElementById("gacha-button");
const disp = document.getElementById("gacha-display");

btn.addEventListener("click", function() {
  const num = Math.floor(Math.random() * omikuji_items.length );
  disp.innerHTML = omikuji_items[num];
});
document.getElementById('gacha-button').onclick = function() {
    this.textContent = 'もう一度';
}
