async function resetPassword() {
    const urlParams = new URLSearchParams(window.location.search);
    const uidb64 = urlParams.get('uidb64');
    const token = urlParams.get('token');
    const password = document.getElementById('newPassword').value;
    const API_URL = 'https://factor-cadusaboya.loca.lt';

    
    const response = await fetch(`https://factor-cadusaboya.loca.lt/accounts/reset-password/${uidb64}/${token}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: password }),
    });

    const data = await response.json();
    const messageElement = document.getElementById('message');
    if (data.message) {
        messageElement.innerText = data.message;
        messageElement.style.color = 'green';
    } else if (data.error) {
        messageElement.innerText = data.error;
        messageElement.style.color = 'red';
    }
}