import { getAll } from '../services/storage.js';
import { TIPOS, TEMAS, NIVELES } from '../data/options.js';

function getLabel(lista, value) {
  const item = lista.find((opt) => opt.value === value);
  return item ? item.label : value;
}

export function renderList(app) {
  const resources = (typeof getAll === 'function' ? getAll() : []) || [];
  const sortedResources = [...resources].sort(
    (a, b) => new Date(b.fechaCreacion) - new Date(a.fechaCreacion)
  );

  const renderCard = (recurso) => {
    let hostname = '';
    try {
      hostname = new URL(recurso.url).hostname;
    } catch {
      hostname = recurso.url;
    }

    const formattedDate = recurso.fechaCreacion
      ? new Date(recurso.fechaCreacion).toLocaleDateString('es-SV')
      : '';

    return `
      <article class="card resource-card">
        <div class="resource-card__header">
          <span class="badge badge--${recurso.tipo}">
            ${getLabel(TIPOS, recurso.tipo)}
          </span>
          ${recurso.favorito ? '<span class="resource-card__favorite" title="Favorito">★</span>' : ''}
        </div>

        <h3 class="resource-card__title">
          <a href="${recurso.url}" target="_blank" rel="noopener">
            ${recurso.titulo}
          </a>
        </h3>

        <div class="resource-card__domain">
          <code>${hostname}</code>
        </div>

        <div class="resource-card__meta">
          <span>${getLabel(TEMAS, recurso.tema)}</span>
          <span>•</span>
          <span>${getLabel(NIVELES, recurso.nivel)}</span>
        </div>

        <div class="resource-card__footer">
          <span class="resource-card__date">${formattedDate}</span>
          <a href="#/editar/${recurso.id}" class="btn btn-secondary">Editar</a>
        </div>
      </article>
    `;
  };

  const contentHtml =
    sortedResources.length === 0
      ? `
        <div class="empty-state card">
          <p class="empty-state__message">Aún no tienes recursos</p>
          <a href="#/nuevo" class="btn btn-primary">Agregar el primero</a>
        </div>
      `
      : `
        <div class="resources-grid">
          ${sortedResources.map(renderCard).join('')}
        </div>
      `;

  app.innerHTML = `
    <div class="container list-view">
      <header class="list-header">
        <h1>Mis recursos</h1>
        <a href="#/nuevo" class="btn btn-primary">+ Nuevo recurso</a>
      </header>
      ${contentHtml}
    </div>
  `;
}
