document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {
			  console.log("is interactive");
        const toggleButton = document.getElementsByClassName('toggle-button')[0];
        const navbarLinks = document.getElementsByClassName('navbar-links')[0];
        // console.log(navbarLinks);
        toggleButton.addEventListener('click', () => {
           navbarLinks.classList.toggle('active'); // added or removed class
        });
    }
};