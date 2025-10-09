document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const description = document.getElementById('message').value;
    const notification = document.getElementById('result')
    const btn = document.getElementById('btn')


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
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        setTimeout(() => {
            hidenotification(notification);
        }, 4000);
        document.getElementById('myForm').reset();

    })
    .catch(error => {
        console.error('Ошибка:', error);
    });

    function hidenotification(notification) {
        notification.classList.add('hide');
    }

});

