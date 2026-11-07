import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'devshelf:recursos';

// Obtiene todos los recursos guardados en localStorage o un arreglo vacío ante errores.
export function getAll() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// Genera un recurso con id y fecha de creación, lo almacena y lo retorna.
export function create(data) {
  const resources = getAll();
  const newResource = {
    ...data,
    id: uuidv4(),
    fechaCreacion: new Date().toISOString()
  };
  resources.push(newResource);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(resources));
  return newResource;
}

// Retorna el total de recursos, total de favoritos y número de temas únicos.
export function getStats() {
  const resources = getAll();
  const total = resources.length;
  const favoritos = resources.filter((item) => item.favorito).length;
  const temas = new Set(resources.map((item) => item.tema).filter(Boolean)).size;

  return { total, favoritos, temas };
}

// Obtiene un recurso por su id o null si no existe.
export function getById(id) {
  const resources = getAll();
  return resources.find((item) => item.id === id) || null;
}

// Actualiza un recurso existente conservando su id y fechaCreacion.
export function update(id, data) {
  const resources = getAll();
  const index = resources.findIndex((item) => item.id === id);

  if (index === -1) {
    return null;
  }

  const recursoActual = resources[index];
  const updatedResource = {
    ...recursoActual,
    ...data,
    id: recursoActual.id,
    fechaCreacion: recursoActual.fechaCreacion
  };

  resources[index] = updatedResource;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(resources));
  return updatedResource;
}
