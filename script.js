document.addEventListener("DOMContentLoaded", () => {
	const menuToggle = document.getElementById("menuToggle");
	const navigation = document.getElementById("navigation");

	if (!menuToggle || !navigation) {
		return;
	}

	const closeMenu = () => {
		navigation.classList.remove("is-open");
		menuToggle.setAttribute("aria-expanded", "false");
	};

	menuToggle.addEventListener("click", () => {
		const isOpen = navigation.classList.toggle("is-open");
		menuToggle.setAttribute("aria-expanded", String(isOpen));
	});

	navigation.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", closeMenu);
	});
});
