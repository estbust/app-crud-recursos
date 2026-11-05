import { renderHome } from './views/home.js';
import { renderForm } from './views/form.js';
import { renderList } from './views/list.js';
import { setActiveLink } from './components/navbar.js';

export const routes = {
  '#/': renderHome,
  '#/recursos': renderList,
  '#/nuevo': renderForm,
};

export function initRouter(app) {
  function handleRoute() {
    const rawHash = window.location.hash;
    const currentHash = routes[rawHash] ? rawHash : '#/';
    const render = routes[currentHash];

    render(app);
    setActiveLink(currentHash);
  }

  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('load', handleRoute);

  handleRoute();
}
