document.addEventListener('DOMContentLoaded', () => {
    // Navigation logic
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                
                // Remove active class from all links
                navLinks.forEach(nav => nav.classList.remove('active'));
                
                // Add active class to clicked link
                link.classList.add('active');
                
                // Hide all sections
                sections.forEach(section => {
                    section.classList.remove('active-section');
                });
                
                // Show target section
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    targetSection.classList.add('active-section');
                    // Update URL fragment without jumping
                    history.pushState(null, null, href);
                }
            }
        });
    });

    // Check fragment on load
    if (window.location.hash) {
        const hash = window.location.hash;
        const targetLink = document.querySelector(`.nav-link[href="${hash}"]`);
        if (targetLink) {
            targetLink.click();
        }
    }
});
