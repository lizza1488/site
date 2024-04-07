document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
  
    // Получаем значения полей формы
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Проверяем корректность email
    if (!validateEmail(email)) {
      alert('Пожалуйста, введите корректный email');
      return;
    }
  
    // Показываем всплывающее окно в случае успешной регистрации
    var modal = document.getElementById('successModal');
    modal.style.display = 'block';
  
    // Очищаем поля формы
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  });
  
  // Функция проверки корректности email
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  // Закрытие модального окна при клике на крестик
  var closeBtn = document.getElementsByClassName('close')[0];
  closeBtn.onclick = function() {
    var modal = document.getElementById('successModal');
    modal.style.display = 'none';
  }
  
  // Закрытие модального окна при клике вне окна
  window.onclick = function(event) {
    var modal = document.getElementById('successModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }