// window.onload = function() {
//
//   var orderBtn = document.querySelector('.order-btn');
//   var orderForm = document.querySelector('.order');
//   var closeBtn = document.querySelector('#close');
//
//   orderBtn.onclick = function() {
//     console.log(1);
//     orderBtn.style.display = "none";
//     orderForm.style.display = "block";
//   }
//
//   closeBtn.onclick = function() {
//     console.log(2);
//     orderBtn.style.display = "block";
//     orderForm.style.display = "none";
//   }
//
// };

let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    console.log('document loaded')
    var orderBtn = document.querySelector('.order-btn');
    var orderForm = document.querySelector('.order');
    var closeBtn = document.querySelector('#close');

    orderBtn.onclick = function() {
      console.log('show order');
      orderBtn.style.display = "none";
      orderForm.style.display = "block";
    }

    closeBtn.onclick = function() {
      console.log('hide order');
      orderBtn.style.display = "block";
      orderForm.style.display = "none";
    }

    clearInterval(stateCheck);
  }

}, 100);
