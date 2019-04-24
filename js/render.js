var util = {
	newElement: function(type, className, value) {
		var el = document.createElement(type);
		el.className = className;
		el.textContent = value;
		return el;
	},
	newImg: function(className, url) {
		var img = document.createElement("img");
		img.className = className;
		img.src = url;
		return img;
	},
	newLine: function(className) {
		var line = document.createElement("hr");
		line.className = className;
		return line;
	}
};

var app = {
	show: function(obj) {
		for (var key in obj) {
			console.log(obj[key].text);
		};
	},
	makeIssue: function(issue) {
		var children = [];
		children.push(util.newElement("h1","is-card__header", issue.name));
		children.push(util.newLine("is-card__divider"));
		children.push(util.newElement("h2","is-card__byline", issue.byline));
		children.push(util.newLine("is-card__divider"));
		children.push(util.newImg("is-card__image", issue.image));
		children.push(util.newElement("p","is-card__text", issue.text));
		
		var wrapper = document.createElement("div");
		wrapper.className = "is-card";
		children.forEach(function(child) {
			wrapper.appendChild(child);
		});
		
		return wrapper;
	},
	renderIssues: function() {
		var newIssues = [];
		Object.keys(issues).forEach(function(key) {
			newIssues.push(app.makeIssue(issues[key]));
		});
		var target = document.getElementsByClassName("is-cardBox")[0];
		newIssues.forEach(function(child) {
			target.appendChild(child);
		});
	}
};

window.onload = function() {
	app.renderIssues();
};
