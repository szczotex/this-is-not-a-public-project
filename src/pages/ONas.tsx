import Header from "@/components/Header";

const ONas = () => {
  return (
    <div className="min-h-screen bg-background text-foreground page-texture">
      <Header />
      <main>
        <section className="relative py-10 md:py-16 bg-background page-texture border-t">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-semibold">O nas</h1>
            <p className="mt-4 text-muted-foreground">Wkrótce dodamy więcej informacji.</p>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container py-6 text-sm text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} modu.energy</span>
        </div>
      </footer>
    </div>
  );
};

export default ONas;
