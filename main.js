
document.addEventListener('DOMContentLoaded', () => {


    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarNav = document.querySelector('.sidebar-nav');

  
    if (mobileMenuBtn && sidebarNav && sidebarOverlay) {
        mobileMenuBtn.addEventListener('click', () => {
            sidebarNav.classList.add('active');
            sidebarOverlay.classList.add('active');
        });
    }

    
    if (sidebarCloseBtn && sidebarNav && sidebarOverlay) {
        sidebarCloseBtn.addEventListener('click', () => {
            sidebarNav.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        });
    }

    
    if (sidebarOverlay && sidebarNav) {
        sidebarOverlay.addEventListener('click', () => {
            sidebarNav.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        });
    }



    const modalOverlay = document.getElementById('infoModal');
    const closeBtn = document.querySelector('.modal-close');
    const triggerButtons = document.querySelectorAll('.open-modal-btn');

    const targetTitle = document.getElementById('modalTargetTitle');
    const targetDesc = document.getElementById('modalTargetDesc');

    // Safe trigger loop for card parameter buttons
    triggerButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const titleData = e.currentTarget.getAttribute('data-title');
            const descData = e.currentTarget.getAttribute('data-desc');
            
            if (targetTitle) targetTitle.textContent = titleData;
            if (targetDesc) targetDesc.textContent = descData;
            
            if (modalOverlay) modalOverlay.style.display = 'flex';
        });
    });

    // Dismiss modal buttons
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (modalOverlay) modalOverlay.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            if (modalOverlay) modalOverlay.style.display = 'none';
        }
    });

});