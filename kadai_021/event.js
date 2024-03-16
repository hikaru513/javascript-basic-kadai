const btn = document.getElementById('btn');
 
setTimeout(() => {
btn.addEventListener('click', () => {
  console.log('ボタンをクリックしました');
}, 2000);
});
