import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HandCoins, Wrench, BatteryCharging, Sun, Gauge, Factory, Plug, Timer, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground page-texture">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative isolate min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
              src="/background.jpg"
              alt="Tło nagłówka: przemysłowe budynki – modu.energy"
              className="h-full w-full object-cover"
              loading="eager"
              onError={(e) => { e.currentTarget.src = "/lovable-uploads/66081494-c40e-49a2-9999-4b9eac6f619b.png"; }}
            />
            <div className="absolute inset-0 bg-foreground/60" />
          </div>
          <div className="container py-20 md:py-28">
            <div className="mx-auto max-w-4xl text-center animate-enter text-primary-foreground">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                 Obniż koszty energii dla swojej firmy, nawet do 25%
               </h1>
               <p className="mt-3 mb-6 text-lg md:text-xl text-primary-foreground/90">
                 Bez inwestycji. Bez straty czasu. Bez ryzyka.
               </p>
               <Button asChild variant="hero" size="lg">
                 <a href="#formularz" aria-label="Przewiń do formularza">Sprawdź potencjalne zyski</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative py-12 md:py-20 bg-muted/40 page-texture border-t">
          <div className="container">
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
              Instalujemy i operujemy magazyny energii, wykorzystując istniejący przyłącz.
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="transition-transform duration-200 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <HandCoins className="text-foreground" />
                    <CardTitle className="text-lg md:text-xl">
                      Finansujemy całość<br />inwestycji
                    </CardTitle>
                  </div>
                </CardHeader>
              </Card>

              <Card className="transition-transform duration-200 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Wrench className="text-foreground" />
                    <CardTitle className="text-lg md:text-xl">
                      Załatwiamy formalności i instalację za Ciebie
                    </CardTitle>
                  </div>
                </CardHeader>
              </Card>

              <Card className="transition-transform duration-200 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BatteryCharging className="text-foreground" />
                    <CardTitle className="text-lg md:text-xl">
                      Dzielimy się zyskami z magazynu
                    </CardTitle>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* ICP */}
        <section className="relative py-12 md:py-20 bg-background page-texture border-t">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Jakich firm szukamy?</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 justify-items-start">
                    <div className="flex items-center gap-3 text-sm">
                      <Sun aria-hidden className="text-foreground" />
                      <span>istniejąca fotowoltaika</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Factory aria-hidden className="text-foreground" />
                      <span>obiekt przemysłowy / komercyjny</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Gauge aria-hidden className="text-foreground" />
                      <span className="text-left">wysoki pobór mocy (&gt;100MWh rocznie)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Plug aria-hidden className="text-foreground" />
                      <span>duża moc przyłącza</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Timer aria-hidden className="text-foreground" />
                      <span>taryfa wielostrefowa</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <TrendingUp aria-hidden className="text-foreground" />
                      <span>wysokie koszta energii</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Każdy przypadek jest odmienny - po analizie dokumentów wrócimy z konkretną ofertą możliwych oszczędności
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Form CTA */}
        <section id="formularz" className="relative py-16 md:py-24 bg-muted/40 page-texture border-t">
          <div className="container">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl md:text-3xl">Sprawdź ile możesz oszczędzić</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid gap-6 md:grid-cols-2 items-start">
                  <div>
                    <ul className="mt-2 list-disc pl-5 space-y-2 text-muted-foreground text-left">
                      <li>darmowa ocena</li>
                      <li>oparta na dostarczonych informacjach</li>
                      <li>zero zobowiązań</li>
                      <li>szybka odpowiedź, do paru dni</li>
                    </ul>
                    <div className="mt-6">
                      <Button asChild variant="hero" size="lg">
                        <a href="https://tally.so/r/mV6Jvl" target="_blank" rel="noopener noreferrer">Sprawdź potencjalne zyski</a>
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Masz pytania?</h3>
                    <div className="mt-2 text-muted-foreground text-base md:text-lg space-y-1">
                      <p>email: <a href="mailto:kontakt@modu.energy" className="underline">kontakt@modu.energy</a></p>
                      <p>telefon: <a href="tel:+48668345897" className="underline">+48 668 345 897</a></p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="relative py-16 md:py-24 bg-background page-texture border-t">
          <div className="container max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Czym jest modu.energy i jak może pomóc mojej firmie?</AccordionTrigger>
                <AccordionContent>modu.energy oferuje kompleksowe systemy magazynowania energii, optymalizując zużycie energii firm B2B, celem obniżki kosztów nawet do 25%.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>W jaki sposób modu.energy oszczędza do 25% kosztów energii w mojej firmie?</AccordionTrigger>
                <AccordionContent>modu.energy osiąga oszczędności i generuje dodatkowy przychód dla klientów poprzez dwa główne kanały. Po pierwsze, zainstalowany na miejscu system magazynowania energii optymalizuje lokalne zużycie, redukując szczyty obciążenia i opłaty mocowe oraz zwiększając autokonsumpcję. Po drugie, elastyczność magazynu energii umożliwia aktywny udział w generacji przychodów z usług wspierających sieć.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Jak modu.energy zarabia na współpracy?</AccordionTrigger>
                <AccordionContent>Nasz model biznesowy opiera się na współdzieleniu oszczędności i przychodów z udziału w rynkach energii. W ten sposób generujemy przychody, które dzielimy z klientem zgodnie z ustaleniami umowy.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Jakie jest ryzyko dla klienta?</AccordionTrigger>
                <AccordionContent>Nie ma ukrytych kosztów ani zobowiązań finansowych ze strony klienta. Instalacja, eksploatacja i serwis systemu są prowadzone przez modu.energy. Oszczędność z tytułu magazynu energii jest stała, zgodnie z ustaleniami umowy.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Czy modu.energy wymaga zmiany dostawcy energii?</AccordionTrigger>
                <AccordionContent>Nie, ale wymagamy conajmniej dwu-strefowych taryf obecnego sprzedawcy. W wypadku stałych cen, wspieramy w zmianie obecnej umowy na bardziej korzystną dla klienta.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Czy modu.energy jest dostawcą energii?</AccordionTrigger>
                <AccordionContent>Obecnie modu.energy nie jest dostawcą energii - nasze rozwiązania działają niezależnie od istniejącego dostawcy. Naszym głównym zadaniem jest instalacja i obsługa systemów magazynowania energii, które pozwalają na optymalizację kosztów i udział w rynku energii. W przyszłości planujemy jednak oferować model Energy-as-a-Service (EaaS), w którym będziemy zarządzać całością potrzeb energetycznych naszych klientów, najtaniej na rynku.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>Kto jest właścicielem i kto zarządza systemami magazynowania energii modu.energy?</AccordionTrigger>
                <AccordionContent>modu.energy jest zarówno właścicielem jak i podmiotem odpowiedzialnym za zarządzanie systemami magazynowania energii zainstalowanymi u klienta.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>Jak przebiega instalacja?</AccordionTrigger>
                <AccordionContent>Nasz zespół zajmuje się kompleksową realizacją projektu: od oceny lokalizacji, przez transport, aż po montaż i uruchomienie systemu. Korzystamy z zaufanych partnerów i zapewniamy pełną integrację z istniejącą infrastrukturą energetyczną firmy. Cały proces trwa zwykle od 3 do 6 miesięcy, przy minimalnym wpływie na działalność Twojej firmy.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>Jakie pozwolenia i regulacje obsługujecie?</AccordionTrigger>
                <AccordionContent>Koordynujemy wszystkie formalności z operatorami sieci dystrybucyjnej i lokalnymi urzędami, zapewniając pełną zgodność z obowiązującymi normami, w tym dotyczącymi bezpieczeństwa. Operatorzy sieci pozytywnie postrzegają nasze systemy, ponieważ przyczyniają się one do stabilizacji lokalnej sieci i optymalizacji obciążeń.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger>Jakiego typu magazyny energii wykorzystujecie?</AccordionTrigger>
                <AccordionContent>Stosujemy nowoczesne baterie litowo-jonowe o wysokiej gęstości energii, dużej trwałości i niskich stratach energii. Są one niezawodne i efektywne dla instalacji przemysłowych zintegrowanych z siecią, zapewniając szybkie ładowanie i wysoką elastyczność pracy.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-11">
                <AccordionTrigger>Jak wygląda serwisowanie?</AccordionTrigger>
                <AccordionContent>Zapewniamy całodobowy monitoring, regularne przeglądy oraz szybką i proaktywną obsługę serwisową. Nasz system wspierany przez sztuczną inteligencję na bieżąco analizuje dane i wykrywa możliwe problemy, aby zagwarantować maksymalną dostępność i niezawodność systemu.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-12">
                <AccordionTrigger>Czy modu.energy współpracuje z istniejącymi źródłami energii?</AccordionTrigger>
                <AccordionContent>Tak – nasze rozwiązania magazynowania energii są elastyczne i mogą integrować i optymalizować energię generowaną z zainstalowanych u klienta źródeł. Dzięki temu możemy zaoferować użytkownikowi maksymalne oszczędności.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-13">
                <AccordionTrigger>Jak modu.energy dba o bezpieczeństwo i zgodność z przepisami?</AccordionTrigger>
                <AccordionContent>Wszystkie instalacje są projektowane w zgodzie z obowiązującymi normami bezpieczeństwa i lokalnymi regulacjami. Koordynujemy proces uzyskania pozwoleń oraz współpracujemy z operatorami sieci dystrybucyjnej.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-14">
                <AccordionTrigger>Jak rozpocząć współpracę?</AccordionTrigger>
                <AccordionContent>Skontaktuj się z nami poprzez udostępniony formularz, aby uzyskać bezpłatną analizę możliwości i oszczędności dostosowaną do Twojej firmy. Przedstawimy model współpracy i konkretne oszczędności które możemy wypracować.</AccordionContent>
              </AccordionItem>
            </Accordion>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Czym jest modu.energy i jak może pomóc mojej firmie?",
                      acceptedAnswer: { "@type": "Answer", text: "modu.energy oferuje kompleksowe systemy magazynowania energii, optymalizując zużycie energii firm B2B, celem obniżki kosztów nawet do 25%." },
                    },
                    {
                      "@type": "Question",
                      name: "W jaki sposób modu.energy oszczędza do 25% kosztów energii w mojej firmie?",
                      acceptedAnswer: { "@type": "Answer", text: "modu.energy osiąga oszczędności i generuje dodatkowy przychód dla klientów poprzez dwa główne kanały. Po pierwsze, zainstalowany na miejscu system magazynowania energii optymalizuje lokalne zużycie, redukując szczyty obciążenia i opłaty mocowe oraz zwiększając autokonsumpcję. Po drugie, elastyczność magazynu energii umożliwia aktywny udział w generacji przychodów z usług wspierających sieć." },
                    },
                    {
                      "@type": "Question",
                      name: "Jak modu.energy zarabia na współpracy?",
                      acceptedAnswer: { "@type": "Answer", text: "Nasz model biznesowy opiera się na współdzieleniu oszczędności i przychodów z udziału w rynkach energii. W ten sposób generujemy przychody, które dzielimy z klientem zgodnie z ustaleniami umowy." },
                    },
                    {
                      "@type": "Question",
                      name: "Jakie jest ryzyko dla klienta?",
                      acceptedAnswer: { "@type": "Answer", text: "Nie ma ukrytych kosztów ani zobowiązań finansowych ze strony klienta. Instalacja, eksploatacja i serwis systemu są prowadzone przez modu.energy. Oszczędność z tytułu magazynu energii jest stała, zgodnie z ustaleniami umowy." },
                    },
                    {
                      "@type": "Question",
                      name: "Czy modu.energy wymaga zmiany dostawcy energii?",
                      acceptedAnswer: { "@type": "Answer", text: "Nie, ale wymagamy conajmniej dwu-strefowych taryf obecnego sprzedawcy. W wypadku stałych cen, wspieramy w zmianie obecnej umowy na bardziej korzystną dla klienta." },
                    },
                    {
                      "@type": "Question",
                      name: "Czy modu.energy jest dostawcą energii?",
                      acceptedAnswer: { "@type": "Answer", text: "Obecnie modu.energy nie jest dostawcą energii - nasze rozwiązania działają niezależnie od istniejącego dostawcy. Naszym głównym zadaniem jest instalacja i obsługa systemów magazynowania energii, które pozwalają na optymalizację kosztów i udział w rynku energii. W przyszłości planujemy jednak oferować model Energy-as-a-Service (EaaS), w którym będziemy zarządzać całością potrzeb energetycznych naszych klientów, najtaniej na rynku." },
                    },
                    {
                      "@type": "Question",
                      name: "Kto jest właścicielem i kto zarządza systemami magazynowania energii modu.energy?",
                      acceptedAnswer: { "@type": "Answer", text: "modu.energy jest zarówno właścicielem jak i podmiotem odpowiedzialnym za zarządzanie systemami magazynowania energii zainstalowanymi u klienta." },
                    },
                    {
                      "@type": "Question",
                      name: "Jak przebiega instalacja?",
                      acceptedAnswer: { "@type": "Answer", text: "Nasz zespół zajmuje się kompleksową realizacją projektu: od oceny lokalizacji, przez transport, aż po montaż i uruchomienie systemu. Korzystamy z zaufanych partnerów i zapewniamy pełną integrację z istniejącą infrastrukturą energetyczną firmy. Cały proces trwa zwykle od 3 do 6 miesięcy, przy minimalnym wpływie na działalność Twojej firmy." },
                    },
                    {
                      "@type": "Question",
                      name: "Jakie pozwolenia i regulacje obsługujecie?",
                      acceptedAnswer: { "@type": "Answer", text: "Koordynujemy wszystkie formalności z operatorami sieci dystrybucyjnej i lokalnymi urzędami, zapewniając pełną zgodność z obowiązującymi normami, w tym dotyczącymi bezpieczeństwa. Operatorzy sieci pozytywnie postrzegają nasze systemy, ponieważ przyczyniają się one do stabilizacji lokalnej sieci i optymalizacji obciążeń." },
                    },
                    {
                      "@type": "Question",
                      name: "Jakiego typu magazyny energii wykorzystujecie?",
                      acceptedAnswer: { "@type": "Answer", text: "Stosujemy nowoczesne baterie litowo-jonowe o wysokiej gęstości energii, dużej trwałości i niskich stratach energii. Są one niezawodne i efektywne dla instalacji przemysłowych zintegrowanych z siecią, zapewniając szybkie ładowanie i wysoką elastyczność pracy." },
                    },
                    {
                      "@type": "Question",
                      name: "Jak wygląda serwisowanie?",
                      acceptedAnswer: { "@type": "Answer", text: "Zapewniamy całodobowy monitoring, regularne przeglądy oraz szybką i proaktywną obsługę serwisową. Nasz system wspierany przez sztuczną inteligencję na bieżąco analizuje dane i wykrywa możliwe problemy, aby zagwarantować maksymalną dostępność i niezawodność systemu." },
                    },
                    {
                      "@type": "Question",
                      name: "Czy modu.energy współpracuje z istniejącymi źródłami energii?",
                      acceptedAnswer: { "@type": "Answer", text: "Tak – nasze rozwiązania magazynowania energii są elastyczne i mogą integrować i optymalizować energię generowaną z zainstalowanych u klienta źródeł. Dzięki temu możemy zaoferować użytkownikowi maksymalne oszczędności." },
                    },
                    {
                      "@type": "Question",
                      name: "Jak modu.energy dba o bezpieczeństwo i zgodność z przepisami?",
                      acceptedAnswer: { "@type": "Answer", text: "Wszystkie instalacje są projektowane w zgodzie z obowiązującymi normami bezpieczeństwa i lokalnymi regulacjami. Koordynujemy proces uzyskania pozwoleń oraz współpracujemy z operatorami sieci dystrybucyjnej." },
                    },
                    {
                      "@type": "Question",
                      name: "Jak rozpocząć współpracę?",
                      acceptedAnswer: { "@type": "Answer", text: "Skontaktuj się z nami poprzez udostępniony formularz, aby uzyskać bezpłatną analizę możliwości i oszczędności dostosowaną do Twojej firmy. Przedstawimy model współpracy i konkretne oszczędności które możemy wypracować." },
                    },
                  ],
                }),
              }}
            ></script>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
