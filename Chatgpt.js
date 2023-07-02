// particlesJS("particles-js", {"particles":{"number":{"value":500,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":["grab", "repulse"]},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
// async function Chatgpt(){
// const res = document.getElementById('response');
// const send = document.getElementById('send_message');
// const url = 'https://chatgpt-chatgpt3-5-chatgpt4.p.rapidapi.com/v1/chat/completions';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/json',
// 		'X-RapidAPI-Key': 'a841fc87eemshb69738416d1b337p11a759jsn71c7b04fba49',
// 		'X-RapidAPI-Host': 'chatgpt-chatgpt3-5-chatgpt4.p.rapidapi.com'
// 	},
// 	body:JSON.stringify({
// 		model: 'gpt-3.5-turbo',
// 		messages: [
// 			{
// 				role: 'user',
// 				content: send.value,
// 			}
// 		],
// 		temperature: 0.8
// 	})
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	res.value = result.choices[0].message.content;
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// send.addEventListener('click',function(){
// 	send.value = '';
// });
// }


async function Chatgpt(){
	const res = document.getElementById('response');
	const send = document.getElementById('send_message');
	const url = 'https://chatgpt-chatgpt3-5-chatgpt4.p.rapidapi.com/v1/chat/completions';
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': 'a841fc87eemshb69738416d1b337p11a759jsn71c7b04fba49',
			'X-RapidAPI-Host': 'chatgpt-chatgpt3-5-chatgpt4.p.rapidapi.com'
		},
		body:JSON.stringify({
			model: 'gpt-3.5-turbo',
			messages: [
				{
					role: 'user',
					content: send.value,
				}
			],
			temperature: 0.8
		})
	};
	
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		res.value = result.choices[0].message.content;
		console.log(result);
	} catch (error) {
		console.error(error);
	}
	
	send_message.addEventListener('click', function() {
	  send.value = '';
	});
	document.getElementById("delete_message").addEventListener('click',function(){
		send.value = '';
	})
	}