'use client';
import { useState } from 'react';
import { ArrowRight } from '@/components/ui/icons';

// Form contatti client-side. Nel progetto reale: invio a /api/contact o servizio email.
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: collegare a una API route Next (es. app/api/contact/route.ts) o a Resend/Formspree
    setSent(true);
    e.currentTarget.reset();
  };
  return (
    <form onSubmit={onSubmit} className="rounded-card border border-[var(--bordo)] bg-white p-7 shadow">
      <Field label="Nome e cognome"><input required placeholder="Mario Rossi" className="field-input" /></Field>
      <Field label="Email"><input type="email" required placeholder="mario@esempio.it" className="field-input" /></Field>
      <Field label="Oggetto">
        <select className="field-input"><option>Informazioni generali</option><option>Settore giovanile</option><option>Sponsorizzazioni</option><option>Stampa</option></select>
      </Field>
      <Field label="Messaggio"><textarea required placeholder="Scrivi qui il tuo messaggio..." className="field-input min-h-[120px] resize-y" /></Field>
      <button type="submit" className="btn btn-primary w-full justify-center">Invia messaggio <ArrowRight /></button>
      {sent && <p className="mt-3 text-sm font-semibold text-verde">Grazie! Il messaggio è stato registrato (demo).</p>}
      <style jsx>{`
        .field-input{width:100%;padding:.8rem .9rem;border:1.5px solid var(--bordo);border-radius:9px;font:inherit;background:#fff}
        .field-input:focus{outline:none;border-color:var(--verde)}
      `}</style>
    </form>
  );
}
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <label className="mb-1.5 block text-[.78rem] uppercase tracking-wide text-blu" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700 }}>{label}</label>
      {children}
    </div>
  );
}
