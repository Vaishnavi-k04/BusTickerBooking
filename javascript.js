// script.js
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const bookingData = {
        origin: document.getElementById('origin').value,
        destination: document.getElementById('destination').value,
        date: document.getElementById('date').value,
        tickets: document.getElementById('tickets').value,
    };

    fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
    })
    .then(response => response.json())
    .then(data => alert(`Booking Confirmed: ${data.confirmation}`))
    .catch(error => console.error('Error:', error));
});
