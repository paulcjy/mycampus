import axios from 'axios';

console.log('hello it\'s content.js');

const createButton = (text: string) => {
	const button = document.createElement('button');
	const buttonText = document.createTextNode(`${text}`);
	button.appendChild(buttonText);
	return button;
}

const favoritesButton = createButton('favorites');
favoritesButton.onclick = async () => {
	const { data } = await axios.get('https://canvas.skku.edu/api/v1/users/self/favorites/courses')
	console.log(data);
}

const courseStatusButton = createButton('course status');
courseStatusButton.onclick = async () => {
	const { data } = await axios.get(`https://canvas.skku.edu/api/v1/${34286}/total_learnstatus/user/${userId}`)
}

const buttonTarget = document.getElementById('DashboardCard_Container');
buttonTarget?.append(favoritesButton);

// axios.get("")
// 	.then(res => {
// 		console.log(res.data);
// 	})
