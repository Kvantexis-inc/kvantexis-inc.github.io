document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const description = document.getElementById('message').value;

    // Отправляем на Formspree
    fetch("https://formspree.io/f/xyzdgnnd", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            phone: phone,
            description: description,
            _subject: 'Новая заявка с сайта'
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerHTML = `
            <h3>✅ Данные отправлены!</h3>
            <p>Мы свяжемся с вами в ближайшее время</p>
        `;
        document.getElementById('myForm').reset();
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
});