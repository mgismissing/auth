fetch("id.txt")
  .then(response => response.text())
  .then(text => document.getElementById("uuid4set").value = text.split("\n")[1]);