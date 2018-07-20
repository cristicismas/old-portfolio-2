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

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            document.getElementsByClassName('navigation__background')[0].style.transform = 'scale(100)';

            document.getElementsByClassName('navigation__nav')[0].style.opacity = '1';
            document.getElementsByClassName('navigation__nav')[0].style.width = '100%';
        } else {
            document.getElementsByClassName('navigation__background')[0].style.transform = 'scale(0)';

            document.getElementsByClassName('navigation__nav')[0].style.opacity = '0';
            document.getElementsByClassName('navigation__nav')[0].style.width = '0';
        }
    });

    // Close overlay on link click
    const navLinks = document.getElementsByClassName('navigation__link');

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function(e) {
            checkbox.checked = false;

            document.getElementsByClassName('navigation__background')[0].style.transform = 'scale(0)';

            document.getElementsByClassName('navigation__nav')[0].style.opacity = '0';
            document.getElementsByClassName('navigation__nav')[0].style.width = '0';
        });
    }
});