async function sendData() {
    const response = await fetch('http://localhost:5000/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({key: 'value'})
    });
    const result = await response.json();
    document.getElementById('response').innerText = JSON.stringify(result);
}

