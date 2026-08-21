import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Reveal } from '@/components/ui/Reveal';
import { getAlbums } from '@/sanity/queries';

export const revalidate = 60;
export const metadata: Metadata = { title: 'Gallery', description: 'Le foto delle partite e degli eventi dell’A.S.D. Calcio Pavonese.' };

export default async function GalleryPage() {
  const albums = await getAlbums();

  return (
    <>
      <PageHeader title="Gallery" desc="Le immagini delle partite e degli eventi del club." crumbs={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]} />
      <section className="section">
        <div className="wrap">
          {albums.length === 0 ? (
            <p className="py-10 text-center text-grigio">
              Nessun album ancora pubblicato. Gli album creati dal pannello compariranno qui.
            </p>
          ) : (
            albums.map((album) => (
              <div key={album.slug} className="mb-14">
                <SectionTitle eyebrow={album.date ? new Date(album.date).toLocaleDateString('it-IT') : 'Album'} title={album.title} />
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {album.photos?.map((ph, i) => (
                    <Reveal key={i}>
                      <div className="relative aspect-square overflow-hidden rounded-xl">
                        <Image src={ph.url} alt={ph.alt || album.title} fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover transition-transform duration-500 hover:scale-105" />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
