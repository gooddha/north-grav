let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    console.log('document loaded')
    var orderBtn = document.querySelector('.order-btn');
    var orderContainer = document.querySelector('.order-container');
    var orderForm = document.querySelector('.order');
    var closeBtn = document.querySelector('#close');
    var okBtn = document.querySelector('.ok-button');

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

    okBtn.onclick = function() {
      console.log('hide order-confirm');
      orderBtn.style.display = "none";
      orderForm.style.display = "none";
    }

    clearInterval(stateCheck);

    //AJAX отправка формы
    var form = document.querySelector(".order-container");
    var order = document.querySelector(".order-confirm");

    	$(".order-form").submit(function() {
    		$.ajax({
    			type: "POST",
    			url: "order.php",
    			data: $(this).serialize()
    		}).done(function() {
    			$(this).find("input").val("");
    			form.classList.add("hidden");
    			order.classList.remove("hidden");
    		});
    		return false; //preventDefault alternative
    	});
  }

}, 100);
