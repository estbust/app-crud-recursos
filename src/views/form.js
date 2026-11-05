import { TIPOS, TEMAS, NIVELES } from '../data/options.js';
import { create } from '../services/storage.js';
import { showToast } from '../components/toast.js';

export function renderForm(app, resource = null) {
  app.innerHTML = `
    <div class="container form-container">
      <h1 class="form-title">Nuevo recurso</h1>
      <div class="card">
        <form id="resource-form" class="form" novalidate>
          <div class="form-group">
            <label for="titulo" class="form-label">Título</label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              class="input"
              placeholder="Nombre del recurso"
            />
          </div>

          <div class="form-group">
            <label for="url" class="form-label">URL</label>
            <input
              type="url"
              id="url"
              name="url"
              class="input"
              placeholder="https://ejemplo.com"
            />
          </div>

          <div class="form-group">
            <label for="tipo" class="form-label">Tipo</label>
            <select id="tipo" name="tipo" class="select">
              <option value="">Selecciona...</option>
              ${TIPOS.map((tipo) => `<option value="${tipo.value}">${tipo.label}</option>`).join('')}
            </select>
          </div>

          <div class="form-group">
            <label for="tema" class="form-label">Tema</label>
            <select id="tema" name="tema" class="select">
              <option value="">Selecciona...</option>
              ${TEMAS.map((tema) => `<option value="${tema.value}">${tema.label}</option>`).join('')}
            </select>
          </div>

          <div class="form-group">
            <span class="form-label">Nivel</span>
            <div class="form-radio-group">
              ${NIVELES.map(
                (nivel) => `
                <label class="radio-label">
                  <input
                    type="radio"
                    name="nivel"
                    value="${nivel.value}"
                    ${nivel.value === 'basico' ? 'checked' : ''}
                  />
                  <span>${nivel.label}</span>
                </label>
              `
              ).join('')}
            </div>
          </div>

          <div class="form-group">
            <label class="checkbox-label" for="favorito">
              <input type="checkbox" name="favorito" id="favorito" />
              <span>Favorito</span>
            </label>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Guardar</button>
            <a href="#/" class="btn btn-secondary">Cancelar</a>
          </div>
        </form>
      </div>
    </div>
  `;

  const form = app.querySelector('#resource-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Limpiar errores previos
    form.querySelectorAll('.is-error').forEach((field) => {
      field.classList.remove('is-error');
      field.removeAttribute('aria-invalid');
    });
    form.querySelectorAll('.form-error').forEach((errorMsg) => {
      errorMsg.remove();
    });

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    data.favorito = Boolean(formData.get('favorito'));

    let hasErrors = false;

    const setFieldError = (fieldName, message) => {
      hasErrors = true;
      const field = form.elements[fieldName];
      if (field) {
        field.classList.add('is-error');
        field.setAttribute('aria-invalid', 'true');

        const errorEl = document.createElement('div');
        errorEl.className = 'form-error';
        errorEl.textContent = message;
        field.insertAdjacentElement('afterend', errorEl);
      }
    };

    const tituloVal = (data.titulo || '').trim();
    if (!tituloVal || tituloVal.length < 3) {
      setFieldError('titulo', 'El título es obligatorio y debe tener al menos 3 caracteres.');
    }

    const urlVal = (data.url || '').trim();
    let isUrlValid = false;
    if (urlVal) {
      try {
        new URL(urlVal);
        isUrlValid = true;
      } catch {
        isUrlValid = false;
      }
    }
    if (!isUrlValid) {
      setFieldError('url', 'Debes ingresar una URL válida (ej. https://ejemplo.com).');
    }

    if (!data.tipo) {
      setFieldError('tipo', 'Debes seleccionar un tipo.');
    }

    if (!data.tema) {
      setFieldError('tema', 'Debes seleccionar un tema.');
    }

    if (hasErrors) {
      return;
    }

    create({
      titulo: tituloVal,
      url: urlVal,
      tipo: data.tipo,
      tema: data.tema,
      nivel: data.nivel || 'basico',
      favorito: data.favorito
    });

    showToast('Recurso guardado');
    form.reset();
    window.location.hash = '#/recursos';
  });
}
