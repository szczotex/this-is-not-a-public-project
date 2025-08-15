import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ONas = () => {
  return (
    <div className="min-h-screen bg-background text-foreground page-texture">
      <Header />
      <main>
        <section className="relative py-10 md:py-16 bg-background page-texture border-t">
          <div className="container max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-semibold mb-8">O nas</h1>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Kim Jesteśmy?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Jako modu.energy działamy w obszarze optymalizacji energetycznej dla firm B2B, specjalizując się w instalacjach i obsłudze przemysłowych i komercyjnych systemów magazynowania energii. Działamy w ramach spółki RenewPacks sp. z o.o. z siedzibą w województwie podkarpackim.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Nasza Historia i Doświadczenie</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Jesteśmy nowi na polskim rynku, co pozwala nam wprowadzać świeże, nowoczesne podejścia do zarządzania energią – bez balastu przestarzałych modeli. Nasza siła tkwi w transferze wiedzy z rynku brytyjskiego, gdzie zdobywaliśmy doświadczenie na rynku energetycznym. To praktyczne know-how, w tym zaawansowane zastosowania AI w zarządzaniu energią, adaptujemy do lokalnych warunków - oferując klientom sprawdzone, efektywne rozwiązania.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Nasza Misja</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Jesteśmy partnerem dla polskich przedsiębiorstw w transformacji energetycznej, dostarczając inteligentne systemy BESS, które optymalizują zużycie i maksymalizują oszczędności – bez nakładu finansowego czy czasowego. Budujemy długoterminowe relacje oparte na transparentności, innowacji i realnych wynikach.
                </p>
              </div>

              <div className="pt-4">
                <p className="text-foreground font-medium">
                  Skontaktuj się z nami, by dowiedzieć się, jak możemy wesprzeć Twoją firmę
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ONas;
