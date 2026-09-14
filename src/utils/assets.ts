/// <reference types="vite/client" />

export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.replace(/^\/+/, '');
  const base = ((import.meta as any).env?.BASE_URL || '/yb-fintech/').replace(/\/+$/, '');
  return `${base}/${cleanPath}`;
}
