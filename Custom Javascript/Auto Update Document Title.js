// Automatically Update Tab's Name based on Document Title
setInterval(() => {
	try {
	document.title = document.getElementById("DocumentTitle").textContent;
	}
	catch {}
}, 500); 