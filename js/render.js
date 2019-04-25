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
	},
	newDiv: function(className) {
		var div = document.createElement("div");
		div.className = className;
		return div;
	}
};

var app = {
	show: function(obj) {
		for (var key in obj) {
			console.log(obj[key].text);
		};
	},
	makeBio: function(candidate) {
		var wrapper = util.newDiv("bi-card");

		// Image portion
		var heroImage = util.newDiv("bi-heroImage");
		heroImage.appendChild(util.newElement("h1", "bi-heroImage__header", "Meet " + candidate.name));
		heroImage.style.backgroundImage = "url('" + candidate.image + "')";
		wrapper.appendChild(heroImage);

		// Bio
		var accordionTop = util.newDiv("bi-accordionTop");
		accordionTop.appendChild(util.newElement("p","bi-accordionTop__text", candidate.text));
		wrapper.appendChild(accordionTop);

		return wrapper;
	},
	renderBios: function() {
		var target = document.getElementsByClassName("bi-cardBox")[0];
		Object.keys(candidates).forEach(function(key) {
			target.appendChild(app.makeBio(candidates[key]));
		});
	},
	makeIssue: function(issue) {
		var children = [];
		children.push(util.newElement("h1","is-card__header", issue.name));
		children.push(util.newLine("is-card__divider"));
		children.push(util.newElement("h2","is-card__byline", issue.byline));
		children.push(util.newLine("is-card__divider"));
		children.push(util.newImg("is-card__image", issue.image));
		children.push(util.newElement("p","is-card__text", issue.text));
		
		var wrapper = util.newDiv("is-card");
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
	},
	makeStaff: function makeStaff(member) {
		var wrapper = util.newDiv("me-card");
		wrapper.appendChild(util.newImg("me-img", member.image));
		
		var info = util.newDiv("me-caption");
		info.appendChild(util.newElement("h1", "me-caption__h1", member.name));
		info.appendChild(util.newElement("h2", "me-caption__h2", member.title));

		wrapper.appendChild(info);
		return wrapper;
	},
	renderStaff: function() {
		var target = document.getElementsByClassName("me-cardWrapper")[0];
		Object.keys(staff).forEach(function(key) {
			target.appendChild(app.makeStaff(staff[key]));
		});
	}
};

window.onload = function() {
	app.renderBios();
	app.renderIssues();
	app.renderStaff();
};
