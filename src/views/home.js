import { getStats } from '../services/storage.js';

export function renderHome(app) {
  const stats = (typeof getStats === 'function' ? getStats() : null) || {};

  const savedCount =
    stats.total ??
    stats.recursos ??
    stats.recursosGuardados ??
    stats.guardados ??
    stats.totalResources ??
    0;

  const favoritesCount =
    stats.favoritos ??
    stats.favorites ??
    stats.totalFavoritos ??
    0;

  const rawTopics =
    stats.temas ??
    stats.topics ??
    stats.totalTemas ??
    0;

  const topicsCount =
    rawTopics instanceof Set
      ? rawTopics.size
      : Array.isArray(rawTopics)
      ? rawTopics.length
      : rawTopics;

  app.innerHTML = `
    <div class="container home-view">
      <section class="hero">
        <h1 class="hero__title">Tu biblioteca de recursos para aprender a programar</h1>
        <p class="hero__subtitle">Guarda, organiza y accede a tus recursos favoritos de programación en un solo lugar.</p>
        <a href="#/recursos" class="btn btn-primary">Empezar</a>
      </section>

      <section class="cards-grid">
        <div class="card stat-card">
          <span class="stat-card__number">${savedCount}</span>
          <span class="stat-card__label">Recursos guardados</span>
        </div>
        <div class="card stat-card">
          <span class="stat-card__number">${favoritesCount}</span>
          <span class="stat-card__label">Favoritos</span>
        </div>
        <div class="card stat-card">
          <span class="stat-card__number">${topicsCount}</span>
          <span class="stat-card__label">Temas</span>
        </div>
      </section>

      <section class="cards-grid">
        <div class="card feature-card">
          <h3 class="feature-card__title">Guardar</h3>
          <p class="feature-card__text">Almacena enlaces a videos, artículos, cursos y documentación útil.</p>
        </div>
        <div class="card feature-card">
          <h3 class="feature-card__title">Organizar</h3>
          <p class="feature-card__text">Clasifica tus recursos por tema, tipo de contenido y nivel de dificultad.</p>
        </div>
        <div class="card feature-card">
          <h3 class="feature-card__title">Encontrar</h3>
          <p class="feature-card__text">Accede rápidamente a lo que necesitas y marca tus recursos favoritos.</p>
        </div>
      </section>
    </div>
  `;
}
