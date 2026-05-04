/**
 * Renders a JSON-LD structured data <script> tag.
 * Use one per schema object. Place inside server components.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify is safe here because we control the input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
