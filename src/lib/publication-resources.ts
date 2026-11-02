import type { Publication } from './data';

export function publicationResources(publication: Publication) {
  const resources = [...(publication.resources ?? [])];
  if (publication.link?.startsWith('https://doi.org/') && !resources.some(r => r.href === publication.link)) {
    resources.push({label:'DOI', href:publication.link});
  }
  return resources;
}
