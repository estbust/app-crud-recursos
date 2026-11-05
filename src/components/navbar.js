export function renderNavbar(container) {
  container.classList.add('navbar');
  container.innerHTML = `
    <a href="#/" class="logo">DevShelf</a>
    <nav>
      <a href="#/">Inicio</a>
      <a href="#/recursos">Mis recursos</a>
      <a href="#/nuevo">Nuevo recurso</a>
    </nav>
  `;
}

export function setActiveLink(hash) {
  const currentHash = (!hash || hash === '#' || hash === '#/') ? '#/' : (hash.startsWith('#') ? hash : `#${hash}`);
  const links = document.querySelectorAll('#navbar nav a, .navbar nav a');

  links.forEach((link) => {
    const isActive = link.getAttribute('href') === currentHash;
    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}
