// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  
  /* 1. Mobile Menu Toggle */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenuOverlay) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuOverlay.classList.toggle('active');
      const isActive = mobileMenuOverlay.classList.contains('active');
      mobileMenuBtn.setAttribute('aria-expanded', isActive);
      
      // Animate hamburger icon
      const bars = mobileMenuBtn.querySelectorAll('span');
      if (bars.length >= 2) {
        if (isActive) {
          bars[0].style.transform = 'rotate(45deg) translate(2px, 4px)';
          bars[1].style.transform = 'rotate(-45deg) translate(2px, -4px)';
        } else {
          bars[0].style.transform = 'none';
          bars[1].style.transform = 'none';
        }
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('active');
        const bars = mobileMenuBtn.querySelectorAll('span');
        if (bars.length >= 2) {
          bars[0].style.transform = 'none';
          bars[1].style.transform = 'none';
        }
      });
    });
  }

  /* 2. Top Scroll Progress Bar */
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      if (scrollProgressBar) {
        scrollProgressBar.style.width = `${progress}%`;
      }
    }
  });

  /* 3. Hero Image Parallax Effect */
  const heroImageWrapper = document.getElementById('heroImageWrapper');
  if (heroImageWrapper && window.innerWidth > 768) {
    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPct = (clientX / innerWidth - 0.5) * 30; // Max 30px offset
      const yPct = (clientY / innerHeight - 0.5) * 30;
      heroImageWrapper.style.transform = `translate3d(${-xPct}px, ${-yPct}px, 0)`;
    });
  }

  /* 4. Copy Email to Clipboard */
  const emailCopyBtn = document.getElementById('emailCopyBtn');
  const toastCopied = document.getElementById('toastCopied');

  const copyEmailHandler = () => {
    const emailText = "nithinbairoju123@gmail.com";
    navigator.clipboard.writeText(emailText).then(() => {
      if (toastCopied) {
        toastCopied.classList.add('show');
        setTimeout(() => {
          toastCopied.classList.remove('show');
        }, 2500);
      }
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  if (emailCopyBtn) {
    emailCopyBtn.addEventListener('click', copyEmailHandler);
  }

  /* 5. Case Study Modal Toggle */
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const caseStudyModal = document.getElementById('caseStudyModal');

  if (openModalBtn && caseStudyModal && closeModalBtn) {
    openModalBtn.addEventListener('click', () => {
      caseStudyModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    closeModalBtn.addEventListener('click', () => {
      caseStudyModal.classList.remove('active');
      document.body.style.overflow = '';
    });

    caseStudyModal.addEventListener('click', (e) => {
      if (e.target === caseStudyModal) {
        caseStudyModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  /* 6. Scroll Reveal Intersection Observer */
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.project-card, .skill-card, .process-card, .featured-case-study, .tracker-item, .story-heading');
  revealElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index % 3 * 0.1}s, transform 0.6s ease ${index % 3 * 0.1}s`;
    observer.observe(el);
  });
});
