// Optional JavaScript for interactivity or additional animations
window.onload = function () {
    // Example: Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });
});


document.body.classList.add('loading');
window.addEventListener('load', () => {
    document.body.classList.remove('loading');
});


particlesJS("particles-js", {
    particles: {
        number: { value: 50 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: { speed: 2 }
    }
});


function initMap() {
    var gymLocation = { lat: 18.5204, lng: 73.8567 }; // Replace with actual coordinates
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: gymLocation,
    });
    var marker = new google.maps.Marker({
        position: gymLocation,
        map: map,
        title: "Our Gym Location",
    });
}
