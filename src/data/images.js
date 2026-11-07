// Loads images automatically from src/assets so no manual imports are needed.

const fileName = (path) => path.split('/').pop().replace(/\.[^.]+$/, '')

// src/assets/work/<slug>.png  ->  workImages['<slug>']
const workFiles = import.meta.glob('../assets/work/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})

export const workImages = Object.fromEntries(
  Object.entries(workFiles).map(([path, url]) => [fileName(path), url])
)

// Any image directly in src/assets whose name contains
// "portrait", "muhammad", "bilal" or "profile" is used as his photo.
const rootFiles = import.meta.glob('../assets/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})

export const portrait = Object.entries(rootFiles).find(([path]) =>
  /portrait|muhammad|bilal|profile/i.test(path)
)?.[1]
