import Image from "next/image";

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* Imagen justo después del título principal */}
      <div className="mb-8">
        <Image
          src="/img/starwarsss.png"
          alt="Banner representativo de Cinecolor"
          width={800}
          height={400}
          className="rounded shadow-md"
        />
      </div>

      <h1 className="text-4xl font-bold mb-6">¿Qué es Technicolor?</h1>
      <p className="mb-4">
        Technicolor fue el sistema de filmación en color más icónico del siglo XX, marcando un antes y un después
        en la historia del cine. Fundada en 1914 por Herbert Kalmus, Daniel Comstock y W. Burton Wescott,
        la compañía nació de un espíritu técnico innovador (de ahí el &apos;Tech&apos; por el MIT). Su sistema revolucionó
        la forma de ver el cine, combinando precisión científica con una paleta visual nunca antes vista.
      </p>

      {/* Imagen después del texto "¿Qué es Technicolor?" */}
      <div className="my-8">
        <Image
          src="/img/magodeoxheader.png"
          alt="Mago de oz"
          width={700}
          height={400}
          className="rounded shadow-md"
        />
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Evolución del proceso</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><strong>Proceso 1 (1917):</strong> combinaba dos filtros (rojo y verde) mediante prismas. Solo se produjo una película: <em>The Gulf Between</em>.</li>
        <li><strong>Proceso 2 (1922):</strong> impresión sustractiva, sin proyectores especiales.</li>
        <li><strong>Proceso 3 (1928):</strong> matrices de gelatina y tintes para más estabilidad.</li>
        <li><strong>Proceso 4 (1932):</strong> el &apos;three-strip Technicolor&apos; capturaba rojo, verde y azul con calidad superior.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Impacto estético</h2>
      <p className="mb-4">
        Technicolor no solo ofrecía color, ofrecía una experiencia. El público quedaba deslumbrado ante mundos
        completamente nuevos. Películas como <em>El mago de Oz</em> (1939) utilizaron el contraste entre el mundo sepia
        y el brillante Oz para impactar emocionalmente al espectador.
      </p>
      <p className="mb-4">
        Otras películas emblemáticas incluyen <em>Gone with the Wind</em>, <em>Robin Hood</em>, <em>Fantasía</em>, <em>Niágara</em> y <em>Vertigo</em>.
      </p>

      {/* Imagen extra que puede ir en el medio para equilibrio visual */}
      <div className="my-10">
        <Image
          src="/img/starwarss.png"
          alt="StarWars"
          width={750}
          height={420}
          className="rounded shadow-md"
        />
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Technicolor como lenguaje visual</h2>
      <p className="mb-4">
        Natalie Kalmus, supervisora de color, indicaba en su guía &apos;Color Consciousness&apos; que cada color tenía una carga simbólica:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><strong>Rojo:</strong> pasión, poder</li>
        <li><strong>Verde:</strong> libertad, juventud</li>
        <li><strong>Azul:</strong> contemplación, melancolía</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Herencia y resurgimiento</h2>
      <p className="mb-4">
        Aunque el uso decayó con la llegada de Eastmancolor, el proceso dye-transfer fue usado hasta 2002
        en restauraciones. Hoy, cineastas como Scorsese y Rodrigo Prieto emulan su estética en películas como
        <em> The Aviator</em> y <em>Killers of the Flower Moon</em>, aplicando técnicas digitales que evocan el Technicolor original.
      </p>
    </main>
  );
}
