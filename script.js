document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
            
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
            
            
            // Показываем результат
    document.getElementById('result').innerHTML = `
        <h3>✅ Данные получены!</h3>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
    `;
            
            // Очищаем форму
    document.getElementById('myForm').reset();
    console.log("dfdfdf")
 });     