document.addEventListener('DOMContentLoaded', function() {
    // Scroll Header Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s;
            }
        });
    });

    // Share Button
    const shareBtn = document.getElementById('share-btn');
    shareBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (navigator.share) {
            navigator.share({
                title: 'AdisparkVibeCreation',
                text: 'Check out this awesome animation company!',
                url: window.location.href,
            })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
        } else {
            alert('Web Share is not supported on this browser. You can manually copy the link.');
        }
    });
    
    // On-Scroll Animations
    const scrollElements = document.querySelectorAll('.scroll-animate');
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();

    // --- RE-ENGINEERED AND FIXED: Member Form Submission ---
    const memberForm = document.getElementById('member-form');
    memberForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const name = encodeURIComponent(formData.get('name'));
        const email = encodeURIComponent(formData.get('email'));
        const interest = encodeURIComponent(formData.get('interest'));
        const message = encodeURIComponent(formData.get('message'));
        
        const mailtoLink = mailto:adisparkvibecreation@gmail.com?subject=New Member Application: ${interest}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AInterest: ${interest}%0D%0A%0D%0AMessage:%0D%0A${message};
        
        // This method is the most reliable way to trigger the email client
        window.open(mailtoLink, '_self');
        
        this.reset();
    });

    // Admin Panel Logic
    const adminBtn = document.getElementById('admin-btn');
    const adminModal = document.getElementById('admin-modal');
    const closeBtn = document.querySelector('.close-btn');
    const setNotificationBtn = document.getElementById('set-notification-btn');
    const notificationBanner = document.getElementById('notification-banner');

    adminBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const password = prompt("Enter Admin Password:");
        if (password === "12345@admin") {
            adminModal.classList.remove('hidden');
        } else if (password !== null) {
            alert("Incorrect Password.");
        }
    });

    closeBtn.addEventListener('click', () => {
        adminModal.classList.add('hidden');
    });

    setNotificationBtn.addEventListener('click', () => {
        const message = docu