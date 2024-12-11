let arr = [
	{
		name: "@Kapil",
		like: false,
		dp: "https://img.freepik.com/premium-photo/child-kid-tshirt-template-with-yellow-green-red-orange-grey-tshirt-design-with-white-background_873925-155878.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph",
		img: "https://img.freepik.com/free-photo/medium-shot-friends-taking-selfie_23-2149037227.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph",
	},
	{
		name: "@Hardik",
		like: true,
		dp: "https://img.freepik.com/free-photo/handsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph",
		img: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph",
	},
	{
		name: "@Sharan",
		like: false,
		dp: "https://img.freepik.com/free-photo/indian-businessman-with-his-white-car_496169-2889.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph",
		img: "https://img.freepik.com/free-photo/portrait-smiling-beautiful-brunette-woman-cute-dress-red-lips-flowers-background-concept-professional-photossesion-modern-greenhouse_7502-8441.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph",
	},
	{
		name: "@Axita",
		like: false,
		dp: "https://img.freepik.com/free-photo/young-cute-woman-cap-glasses-posing-outside-showing-thumbs-up-high-quality-photo_114579-91847.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph",
		img: "https://img.freepik.com/premium-photo/portrait-beautiful-young-woman-native-american-costume_1089669-3175.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph",
	},
	{
		name: "@Hina",
		like: true,
		dp: "https://img.freepik.com/premium-photo/cheerful-indian-woman-with-crossed-hands_416902-2181.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph",
		img: "https://img.freepik.com/free-photo/portrait-adorable-indian-girl_23-2150913158.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph",
	},
	{
		name: "@Priyanshi",
		like: false,
		dp: "https://img.freepik.com/free-photo/portrait-excited-young-girl-holding-mobile-phone_171337-1630.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph",
		img: "https://img.freepik.com/free-photo/pleased-satisfied-young-female-model-makes-zero-gesture-wears-transparent-glasses-has-long-dark-hair_273609-17999.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph",
	},
	{
		name: "@Dhruv",
		like: true,
		dp: "https://img.freepik.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph",
		img: "https://img.freepik.com/free-photo/handsome-man-presenting-something_1368-87.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph",
	},
	{
		name: "@Aadi",
		like: false,
		dp: "https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph",
		img: "https://img.freepik.com/free-photo/cheerful-girl-cashmere-sweater-laughs-against-backdrop-blossoming-sakura-portrait-woman-yellow-hoodie-city-spring_197531-17886.jpg?size=626&ext=jpg&ga=GA1.1.2125362433.1704450710&semt=sph",
	},
];


const contentPrint = () => {
    let cluster = "";
    let cluster2 = "";
    let cluster3 = "";
	arr.forEach(function (elem, idx) {
		cluster += `
        <div class="story">
            <img id="${idx}" src="${elem.dp}" alt="">
        </div>`;
		cluster2 += `
        <div class="boxlist">
            <img src="${elem.dp}" alt="">
            <div id="like">
                <h3>${elem.name}</h3>
                <span><i id="${idx}" class="fa-${
			elem.like ? "solid" : "regular"
		} fa-heart fa-lg" style="color: #fa0000;"></i></span>
            </div>
        </div>`;
		cluster3 += `
        <div class="boxlist">
            <img src="${elem.img}" alt="">
            <div id="like">
                <h3>${elem.name}</h3>
                <span><i id="${idx}" class="fa-${
			elem.like ? "solid" : "regular"
		} fa-heart fa-lg" style="color: #fa0000;"></i></span>
            </div>
        </div>`;
	});
	document.querySelector("#box").innerHTML = cluster2 + cluster3;
	document.querySelector("#stories").innerHTML = cluster;
};
contentPrint();

let grow = 0;
document.querySelector("#stories").addEventListener("click", function (elem) {
	document.querySelector("#full-scr #image").style.backgroundImage = `url(${
		arr[elem.target.id].img
	})`;
	document.querySelector("#full-scr #name h2").innerHTML = `${
		arr[elem.target.id].name
	}`;
	document.querySelector("#full-scr").style.display = "block";
	setTimeout(() => {
		document.querySelector("#full-scr").style.display = "none";
	}, 3000);
	if (grow < 100) {
		setInterval(() => {
			document.querySelector("#grow").style.width = `${grow++}%`;
		}, 30);
	} else {
		grow = 0;
	}
});
document.querySelector("#box").addEventListener("click", (ele) => {
	if (arr[ele.target.id].like) {
		arr[ele.target.id].like = false;
	} else {
		arr[ele.target.id].like = true;
	}
	contentPrint();
});
