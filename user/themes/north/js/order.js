let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    console.log('document loaded')
    var orderBtn = document.querySelector('.order-btn');
    var orderContainer = document.querySelector('.order-container');
    var orderForm = document.querySelector('.order');
    var closeBtn = document.querySelector('#close');

    orderBtn.onclick = function() {
      console.log('show order');
      orderBtn.style.display = "none";
      orderForm.style.display = "block";
      orderContainer.classList.remove('order-hide');
      orderContainer.classList.add('order-show');
    }

    closeBtn.onclick = function() {
      console.log('hide order');
      orderContainer.classList.remove('order-show');
      orderContainer.classList.add('order-hide');
      orderBtn.style.display = "block";
      orderForm.style.display = "none";
    }
    
    clearInterval(stateCheck);
  }

}, 100);
