async function resetPassword() {
    const url = window.location.href;
    const segments = url.split('/');
    const uidb64 = segments[segments.length - 2];
    const token = segments[segments.length - 1];
    const password = document.getElementById('newPassword').value;
    
    const response = await fetch(`https://factor-cadusaboya.loca.lt/reset-password/${uidb64}/${token}/`, {
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