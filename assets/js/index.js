const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', async (e) => {
	e.preventDefault();
	const firstname = document.getElementById('firstname').value;
	const lastname = document.getElementById('lastname').value;
	const email = document.getElementById('email').value;
	const subject = document.getElementById('subject').value;
	const message = document.getElementById('message').value;
	console.log(lastname);
	if (!firstname || !lastname || !email || !subject || !message) {
		return console.log('fill the form please');
	}
	const data = {
		firstname,
		lastname,
		email,
		subject,
		message,
	};
	console.log(data);
	const result = await axios.post('http://localhost:3000/submit-form', data);
	console.log(result.data);
});
