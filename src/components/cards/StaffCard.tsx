import Image from 'next/image';
import type { StaffMember } from '@/lib/types';
import { Silhouette } from '@/components/ui/Placeholder';
import { Reveal } from '@/components/ui/Reveal';

export function StaffCard({ member }: { member: StaffMember }) {
  const hasPhoto = member.photo && (member.photo.startsWith('/') || member.photo.startsWith('http'));
  return (
    <Reveal className="text-center">
      <div className="relative mx-auto mb-3.5 aspect-square w-[118px] overflow-hidden rounded-full border-[3px] border-white shadow" style={{ background: 'linear-gradient(150deg,#E01F1F,#15161A)' }}>
        {hasPhoto ? <Image src={member.photo!} alt={member.name} fill sizes="118px" className="object-cover" /> : <Silhouette />}
      </div>
      <div className="text-base" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 800 }}>{member.name}</div>
      <div className="text-[.82rem] font-semibold text-verde">{member.role}</div>
    </Reveal>
  );
}
