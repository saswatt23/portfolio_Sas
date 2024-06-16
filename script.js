// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Highlight active section in navbar
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.nav-items a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navbarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Show and hide project modals
const projectButtons = document.querySelectorAll('.btn-project');
const projectModals = document.querySelectorAll('.project-modal');

projectButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        projectModals[index].classList.add('active');
    });
});

projectModals.forEach(modal => {
    const closeButton = modal.querySelector('.modal-close');
    closeButton.addEventListener('click', () => {
        modal.classList.remove('active');
    });
});

// Form validation
const form = document.querySelector('.form');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const subjectInput = document.querySelector('input[name="subject"]');
const messageTextarea = document.querySelector('textarea[name="message"]');

form.addEventListener('submit', e => {
    let valid = true;

    if (nameInput.value.trim() === '') {
        valid = false;
        nameInput.classList.add('invalid');
    } else {
        nameInput.classList.remove('invalid');
    }

    if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
        valid = false;
        emailInput.classList.add('invalid');
    } else {
        emailInput.classList.remove('invalid');
    }

    if (subjectInput.value.trim() === '') {
        valid = false;
        subjectInput.classList.add('invalid');
    } else {
        subjectInput.classList.remove('invalid');
    }

    if (messageTextarea.value.trim() === '') {
        valid = false;
        messageTextarea.classList.add('invalid');
    } else {
        messageTextarea.classList.remove('invalid');
    }

    if (!valid) {
        e.preventDefault();
    }
});

// Handling "Hire Me" button click
const hireMeButton = document.getElementById('hire-me-btn');
hireMeButton.addEventListener('click', () => {
    // Replace 'your-resume-link.pdf' with the actual link to your resume PDF
    window.location.href = 'C:\Users\DELL\Desktop\saswat_protofolio\SASWATA MISHRA resume (1) (1).pdf';
});
