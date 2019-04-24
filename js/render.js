var app = {
	show: function(obj) {
		for (var key in obj) {
			console.log(obj[key].text);
		};
	},
	createIssue: function() {
		var header = document.createElement("h1");
		header.textContent = issues[key].name;
		header.className = "is-card__header";

			var byline = document.createElement("h2");
			byline.textContent = issues[key].byline;
			byline.className = "is-card__byline";

			var text = document.createElement("p");
			text.textContent = issues[key].text;
			text.className = "is-card__text";

			var wrapper = document.createElement("div");
			wrapper.className = "is-card";

			wrapper.appendChild(

			return wrapper;
		};
	},
	renderIssues: function() {
		
	};

var foo = "bar";
app.show(issues);
