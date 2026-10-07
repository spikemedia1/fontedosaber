// lib/jsonld.ts — JSON-LD School + LocalBusiness gerado SÓ com campos "confirmado" (nunca fictício).
import { content, confirmed } from './content';

type F = { valor?: any; status?: string } | undefined;
const v = (f: F) => (f && confirmed(f.status) ? f.valor : undefined);

export function schoolJsonLd(): Record<string, unknown> {
  const e = content.escola;
  const c = content.contato;
  const site = /^https?:\/\//.test(content.seo.url_canonica) ? content.seo.url_canonica.replace(/\/$/, '') : undefined;
  const cidadeUf = v(c.cidade_uf) as string | undefined;
  const [cidade, uf] = cidadeUf ? cidadeUf.split(/\s*[–-]\s*/) : [];
  const e164 = v(c.whatsapp_e164) as string | undefined;
  const geo = v(c.geo) as { lat: number; lng: number } | undefined;
  const inep = v(e.codigo_inep);

  const address = Object.fromEntries(
    Object.entries({
      '@type': 'PostalAddress',
      streetAddress: [v(c.endereco_logradouro), v(c.bairro)].filter(Boolean).join(', ') || undefined,
      addressLocality: cidade,
      addressRegion: uf,
      postalCode: v(c.cep),
      addressCountry: 'BR',
    }).filter(([, x]) => x !== undefined),
  );

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['School', 'LocalBusiness'],
    name: v(e.nome_fantasia),
    slogan: v(e.slogan),
    url: site,
    telephone: e164 ? `+${e164}` : undefined,
    address,
    geo: geo ? { '@type': 'GeoCoordinates', latitude: geo.lat, longitude: geo.lng } : undefined,
    identifier: inep ? { '@type': 'PropertyValue', propertyID: 'INEP', value: inep } : undefined,
    taxID: v(e.cnpj),
    legalName: v(e.razao_social),
    sameAs: confirmed(c.instagram.status) ? [c.instagram.valor] : undefined,
  };
  return Object.fromEntries(Object.entries(data).filter(([, x]) => x !== undefined));
}
