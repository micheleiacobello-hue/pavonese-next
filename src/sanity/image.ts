import imageUrlBuilder from '@sanity/image-url';
import { client, sanityEnabled } from './client';

const builder = sanityEnabled && client ? imageUrlBuilder(client) : null;

// Genera URL ottimizzati dalle immagini caricate nel pannello.
export function urlFor(source: unknown) {
  return builder ? builder.image(source as never) : null;
}
