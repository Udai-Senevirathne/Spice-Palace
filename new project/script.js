// JavaScript File: script.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Loader functionality
    const loader = document.querySelector('.loader');
    if (loader) {
      window.addEventListener('load', () => {
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.display = 'none';
        }, 500); // Matches CSS transition duration
      });
    }
  
    // Navigation bar scroll effect
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  
    // Smooth scroll for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - nav.offsetHeight,
            behavior: 'smooth',
          });
        }
      });
    });
  
    // Mobile navigation menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
      });
    }
  
    // Scroll reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      revealElements.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 150;
  
        if (elementTop < windowHeight - revealPoint) {
          el.classList.add('active');
        }
      });
    };
  
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger animation on load
  });

  
 