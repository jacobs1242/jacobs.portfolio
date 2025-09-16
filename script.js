class HamburgerMenu {
  constructor(hamburgerId, navlinksId, closeBtnId) {
    this.hamburger = document.getElementById(hamburgerId);
    this.navlinks = document.getElementById(navlinksId);
    this.closeBtn = document.getElementById(closeBtnId);

    // open menu
    this.hamburger.addEventListener('click', () => {
      this.openMenu();
    });

    // close menu
    this.closeBtn.addEventListener('click', () => {
      this.closeMenu();
    });

 
    this.navlinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        this.closeMenu();
      });
    });
  }

  openMenu() {
    this.navlinks.classList.add('show');
  }

  closeMenu() {
    this.navlinks.classList.remove('show');
  }

  toggleMenu() {
    this.navlinks.classList.toggle('show');
  }
}


const menu = new HamburgerMenu('hamburger', 'navlinks', 'closeBtn');
