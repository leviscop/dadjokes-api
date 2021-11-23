fetch('https://icanhazdadjoke.com/' {
  		method: "POST",
  		headers: {
    	"Content-Type": "text/plain"
  	})
    .then(res => res.text())
    .then(text => console.log(text));
