document.getElementById('newsletter-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('newsletter-email').value;

  try {
    const response = await fetch('https://newsletter-form-handler.onrender.com/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });

    if (response.ok) {
      const popup = document.getElementById('subscribe-popup');
      popup.style.display = 'block';
      setTimeout(() => popup.style.display = 'none', 4000);
      document.getElementById('newsletter-form').reset();
    } else {
      alert('Error subscribing: ' + (await response.text()));
    }
  } catch (err) {
    alert('Network error. Check console.');
    console.error(err);
  }
});
