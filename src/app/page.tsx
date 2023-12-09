import Hero from "./Sections/Hero/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Hero />
      <section className="canvas2"></section>
    </main>
  );
}
