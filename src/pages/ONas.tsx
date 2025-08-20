import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ONas = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow w-full">
        <section className="relative py-16 md:py-24 bg-background border-t w-full">
          <div className="w-full px-4 md:px-8 mx-auto">
            <div className="max-w-7xl mx-auto">
              <div className="space-y-10">
                {/* Sekcja 1: Nasza misja */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center md:text-left">Nasza Misja</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg md:text-xl max-w-3xl mx-auto md:mx-0">
                    Jesteśmy partnerem dla polskich przedsiębiorstw w transformacji energetycznej, 
                    dostarczając inteligentne systemy BESS, które optymalizują zużycie i maksymalizują 
                    oszczędności – bez nakładu finansowego czy czasowego. Budujemy długoterminowe relacje 
                    oparte na transparentności, innowacji i realnych wynikach.
                  </p>
                </div>

                {/* Sekcja 2: Dwie kolumny */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-12">
                  {/* Kolumna 1: Kim jesteśmy? */}
                  <div className="bg-muted/30 p-6 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6">Kim Jesteśmy?</h2>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      Jako modu.energy działamy w obszarze optymalizacji energetycznej dla firm B2B, 
                      specjalizując się w instalacjach i obsłudze przemysłowych i komercyjnych systemów 
                      magazynowania energii. Działamy w ramach spółki RenewPacks sp. z o.o. z siedzibą 
                      w województwie podkarpackim.
                    </p>
                  </div>

                  {/* Kolumna 2: Nasza historia i doświadczenie */}
                  <div className="bg-muted/30 p-6 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6">Nasza Historia i Doświadczenie</h2>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      Jesteśmy nowi na polskim rynku, co pozwala nam wprowadzać świeże, nowoczesne 
                      podejścia do zarządzania energią – bez balastu przestarzałych modeli. Nasza siła 
                      tkwi w transferze wiedzy z rynku brytyjskiego, gdzie zdobywaliśmy doświadczenie 
                      na rynku energetycznym. To praktyczne know-how, w tym zaawansowane zastosowania AI 
                      w zarządzaniu energią, adaptujemy do lokalnych warunków - oferując klientom 
                      sprawdzone, efektywne rozwiązania.
                    </p>
                  </div>
                </div>
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
