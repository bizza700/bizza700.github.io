document.getElementById('newsletter-form').addEventListener('submit', async function (e) {
e.preventDefault(); // Prevent page refresh

const email = document.getElementById('newsletter-email').value;
const messageEl = document.getElementById('subscribe-message');

try {
    const response = await fetch('https://newsletter-form-handler.onrender.com/subscribe', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
    });

    if (response.ok) {
    messageEl.textContent = '🎉 Thank you for subscribing!';
    messageEl.style.color = 'green';
    document.getElementById('newsletter-form').reset();
    } else {
    const errorText = await response.text();
    messageEl.textContent = `Error: ${errorText}`;
    messageEl.style.color = 'red';
    }
} catch (error) {
    messageEl.textContent = 'Something went wrong. Please try again later.';
    messageEl.style.color = 'red';
    console.error(error);
}
});
