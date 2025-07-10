import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cinecolor",
  description: "Un pequeño blog sobre Cinecolor",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-black font-sans max-w-3xl mx-auto px-4 py-10">
        <header className="mb-10 border-b pb-4">
          <h1 className="text-3xl font-bold">Cinecolor</h1>
          <nav className="mt-2 flex gap-4 text-sm text-gray-600">
            <a href="/">Historia</a>
            <a href="/peliculas">Películas</a>
            <a href="/curiosidades">Curiosidades</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t pt-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Cinecolor
        </footer>
      </body>
    </html>
  );
}
