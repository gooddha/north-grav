---
title: Оставить обращение
---

<h1>Оставить обращение</h1>
<form class="order-form" action="http://олц-северный.рф/order.php" method="post">
	<div class="form-container">
		<div class="input input-name">
			<label for="name">Имя</label>
			<input type="text" id="name" name="name" placeholder="Введите ваше имя" required>
		</div>

		<div class="input input-phone">
			<label for="phone">Телефон / e-mail</label>
			<input type="text" id="phone" name="phone" placeholder="Введите контактную информацию" required>
		</div>          

		<div class="input input-message">
			<label for="additional_info">Текст обращения</label>
			<textarea id="additional_info" name="additional_info" rows="8" cols="40" placeholder="Впишите сюда текст обращения"></textarea>
		</div>
	</div>

    <input type="submit" class="form-button"></input>
</form>
