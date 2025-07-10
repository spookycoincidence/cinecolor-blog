export default function CuriosidadesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">Curiosidades sobre Technicolor</h1>

      <h2 className="text-2xl font-semibold mt-8 mb-2">¿Cómo era filmar en Technicolor?</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>Las cámaras pesaban más de 200 kg.</li>
        <li>Necesitaban muchísima luz: los sets superaban los 38 °C.</li>
        <li>Los estudios alquilaban no solo la cámara, sino un técnico y un supervisor de color.</li>
        <li>Todo debía ser diseñado para adaptarse a la sensibilidad del sistema.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Technicolor y la ley</h2>
      <p className="mb-4">
        En los años 50, Technicolor fue demandado por prácticas monopólicas. La llegada de Eastmancolor,
        más económico, democratizó el cine en color y redujo el control de Technicolor.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Datos express</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li><em>The Wizard of Oz</em> fue restaurada en dye-transfer Technicolor en 1998.</li>
        <li><em>Barbie</em> (2023) recreó la estética Technicolor con LUTs digitales.</li>
        <li>Disney tuvo la exclusividad del proceso Technicolor entre 1932 y 1935.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Nostalgia vibrante</h2>
      <p>
        Muchos cineastas y espectadores coinciden en que el cine moderno ha perdido la intensidad vibrante
        del Technicolor. Su riqueza emocional, su estética pictórica y su simbolismo narrativo continúan
        siendo una fuente de inspiración.
      </p>
    </main>
  );
}
