import './style.css';
import { renderNavbar } from './components/navbar.js';
import { initRouter } from './router.js';

const navbar = document.getElementById('navbar');
const app = document.getElementById('app');

renderNavbar(navbar);
initRouter(app);
