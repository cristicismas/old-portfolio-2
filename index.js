document.addEventListener("DOMContentLoaded", function(event) { 
    // Adds smooth scroll on link click.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const checkbox = document.getElementById('nav-toggle');
    const navBackground = document.getElementsByClassName('navigation__background')[0];
    const navigation = document.getElementsByClassName('navigation__nav')[0];

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            navBackground.style.transform = 'scale(100)';

            navigation.style.opacity = '1';
            navigation.style.width = '100%';
        } else {
            navBackground.style.transform = 'scale(0)';

            navigation.style.opacity = '0';
            navigation.style.width = '0';
        }
    });

    // Close overlay on link click
    const navLinks = document.getElementsByClassName('navigation__link');

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function(e) {
            checkbox.checked = false;

            navBackground.style.transform = 'scale(0)';

            navigation.style.opacity = '0';
            navigation.style.width = '0';
        });
    }
});