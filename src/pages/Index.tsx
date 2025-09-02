import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HandCoins, Wrench, BatteryCharging, Sun, Gauge, Factory, Plug } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground page-texture">
      <Header />

      <main>
        {/* Hero - USUNIĘTO KONTENER */}
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
          {/* USUNIĘTO KONTENER - ZASTĄPIONO PADDINGAMI */}
          <div className="w-full px-4 py-20 md:py-28">
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

        {/* Features - USUNIĘTO KONTENER */}
        <section className="relative py-12 md:py-20 bg-muted/40 border-t">
          <div className="w-full px-4">
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
              Oferujemy najniższe ceny prądu dla firm. 
            </h2>
            <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
              <Card className="transition-transform duration-200 hover:scale-[1.02] text-center">
                <CardHeader>
                  <div className="flex  items-center justify-center gap-3 relative">
                    <HandCoins className="text-foreground absolute left-0" />
                    <CardTitle className="text-lg md:text-xl pl-8">
                      Załatwiamy formalności, instalację i finansowanie
                    </CardTitle>
                  </div>
                </CardHeader>
              </Card>

              <Card className="transition-transform duration-200 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center gap-3 relative">
                    <Wrench className="text-foreground absolute left-0" />
                    <CardTitle className="text-lg md:text-xl pl-8">
                      Wykorzystujemy AI i własny magazyn energii
                    </CardTitle>
                  </div>
                </CardHeader>
              </Card>

              <Card className="transition-transform duration-200 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center gap-3 relative">
                    <BatteryCharging className="text-foreground absolute left-0" />
                    <CardTitle className="text-lg md:text-xl pl-8">
                      Optymalizujemy Twoje zużycie prądu
                    </CardTitle>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* ICP - ZMIENIONO NA 4 ELEMENTY 2x2 */}
       <section className="relative py-12 md:py-20 bg-background border-t">
          <div className="w-full px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Jakich firm szukamy?</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 place-items-center"> {/* Zmieniono na place-items-center */}
                    <div className="flex items-center gap-3 text-sm w-full justify-center sm:justify-start"> {/* Dodano wyrównanie */}
                      <Sun aria-hidden className="text-foreground flex-shrink-0" />
                      <span>istniejąca fotowoltaika</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm w-full justify-center sm:justify-start">
                      <Factory aria-hidden className="text-foreground flex-shrink-0" />
                      <span>obiekt przemysłowy / komercyjny</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm w-full justify-center sm:justify-start">
                      <Gauge aria-hidden className="text-foreground flex-shrink-0" />
                      <span className="text-center sm:text-left">wysokie zużycie energii<br/>(&gt;100MWh rocznie)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm w-full justify-center sm:justify-start">
                      <Plug aria-hidden className="text-foreground flex-shrink-0" />
                      <span>duża moc przyłącza</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-6 text-center">
                    Każdy przypadek jest odmienny - po analizie dokumentów wrócimy z konkretną ofertą możliwych oszczędności
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* Form CTA */}
        <section id="formularz" className="relative py-16 md:py-24 bg-muted/40 border-t">
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
                      <li>zero zobowiązań</li>
                      <li>szybka odpowiedź</li>
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
          <section className="relative py-16 md:py-24 bg-background border-t">
          <div className="w-full px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">FAQ</h2>
            <Accordion type="single" collapsible className="w-full text-left">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">Czym jest modu.energy i jak może pomóc mojej firmie?</AccordionTrigger>
                <AccordionContent className="text-left">modu.energy jest nowoczesnym dostawcą energii, operującym na kompleksowych systemach magazynowania energii, optymalizując zużycie energii firm B2B, celem obniżki kosztów nawet do 25%.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">W jaki sposób modu.energy oszczędza do 25% kosztów energii w mojej firmie?</AccordionTrigger>
                <AccordionContent className="text-left">modu.energy osiąga oszczędności i generuje dodatkowy przychód dla klientów poprzez dwa główne kanały. Po pierwsze, zainstalowany na miejscu system magazynowania energii optymalizuje lokalne zużycie, redukując szczyty obciążenia i opłaty mocowe oraz zwiększając autokonsumpcję. Po drugie, elastyczność magazynu energii umożliwia aktywny udział w generacji przychodów z usług wspierających sieć.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">Jak modu.energy zarabia na współpracy?</AccordionTrigger>
                <AccordionContent className="text-left">Nasza unikalna oferta stałej stawki za energię elektryczną + system magazynowania baterii jest zaprojektowana, aby wykorzystać ogromne różnice w cenach energii, pozwalając nam pobierać energię z sieci w godzinach poza szczytem, a następnie konsumować lub wysyłać do sieci, gdy ceny są wyższe. Ten własny system zarządzania energią pozwala nam nie tylko zmniejszyć koszty energii naszych klientów, ale także wspierać sieć energetyczną, gdy występuje znaczne obciążenie z powodu zwiększonego popytu.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">Jakie jest ryzyko dla klienta?</AccordionTrigger>
                <AccordionContent className="text-left">Nie ma ukrytych kosztów ani zobowiązań finansowych ze strony klienta. Instalacja, eksploatacja i serwis systemu są prowadzone przez modu.energy. Końcowa cena za dostarczoną kWh jest stała, zgodnie z ustaleniami umowy.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">Czy modu.energy wymaga zmiany dostawcy energii?</AccordionTrigger>
                <AccordionContent className="text-left">Wymagamy zmiany dostawcy energii, tylko jeśli nie masz bardziej korzystnej oferty. W takim wypadku, możemy wciąż zaoferować obniżkę kosztów - jednak mniejszą niż w wypadku pełnej współpracy.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">Czy modu.energy jest dostawcą energii?</AccordionTrigger>
                <AccordionContent className="text-left">Obecnie modu.energy nie jest dostawcą energii - nasze rozwiązania działają niezależnie od istniejącego dostawcy. Naszym głównym zadaniem jest instalacja i obsługa systemów magazynowania energii, które pozwalają na optymalizację kosztów i udział w rynku energii. W przyszłości planujemy jednak oferować model Energy-as-a-Service (EaaS), w którym będziemy zarządzać całością potrzeb energetycznych naszych klientów, najtaniej na rynku.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">Kto jest właścicielem i kto zarządza systemami magazynowania energii modu.energy?</AccordionTrigger>
                <AccordionContent className="text-left">modu.energy jest zarówno właścicielem jak i podmiotem odpowiedzialnym za zarządzanie systemami magazynowania energii zainstalowanymi u klienta.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">Jak przebiega instalacja?</AccordionTrigger>
                <AccordionContent className="text-left">Nasz zespół zajmuje się kompleksową realizacją projektu: od oceny lokalizacji, przez transport, aż po montaż i uruchomienie systemu. Korzystamy z zaufanych partnerów i zapewniamy pełną integrację z istniejącą infrastrukturą energetyczną firmy. Cały proces trwa zwykle od 3 do 6 miesięcy, przy minimalnym wpływie na działalność Twojej firmy.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left">Jakie pozwolenia i regulacje obsługujecie?</AccordionTrigger>
                <AccordionContent className="text-left">Koordynujemy wszystkie formalności z operatorami sieci dystrybucyjnej i lokalnymi urzędami, zapewniając pełną zgodność z obowiązującymi normami, w tym dotyczącymi bezpieczeństwa. Operatorzy sieci pozytywnie postrzegają nasze systemy, ponieważ przyczyniają się one do stabilizacji lokalnej sieci i optymalizacji obciążeń.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left">Jakiego typu magazyny energii wykorzystujecie?</AccordionTrigger>
                <AccordionContent className="text-left">Stosujemy nowoczesne baterie litowo-jonowe o wysokiej gęstości energii, dużej trwałości i niskich stratach energii. Są one niezawodne i efektywne dla instalacji przemysłowych zintegrowanych z siecią, zapewniając szybkie ładowanie i wysoką elastyczność pracy.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-11">
                <AccordionTrigger className="text-left">Jak wygląda serwisowanie?</AccordionTrigger>
                <AccordionContent className="text-left">Zapewniamy całodobowy monitoring, regularne przeglądy oraz szybką i proaktywną obsługę serwisową. Nasz system wspierany przez sztuczną inteligencję na bieżąco analizuje dane i wykrywa możliwe problemy, aby zagwarantować maksymalną dostępność i niezawodność systemu.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-12">
                <AccordionTrigger className="text-left">Czy modu.energy współpracuje z istniejącymi źródłami energii?</AccordionTrigger>
                <AccordionContent className="text-left">Tak – nasze rozwiązania magazynowania energii są elastyczne i mogą integrować i optymalizować energię generowaną z zainstalowanych u klienta źródeł. Dzięki temu możemy zaoferować użytkownikowi maksymalne oszczędności.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-13">
                <AccordionTrigger className="text-left">Jak modu.energy dba o bezpieczeństwo i zgodność z przepisami?</AccordionTrigger>
                <AccordionContent className="text-left">Wszystkie instalacje są projektowane w zgodzie z obowiązującymi normami bezpieczeństwa i lokalnymi regulacjami. Koordynujemy proces uzyskania pozwoleń oraz współpracujemy z operatorami sieci dystrybucyjnej.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-14">
                <AccordionTrigger className="text-left">Jak rozpocząć współpracę?</AccordionTrigger>
                <AccordionContent className="text-left">Skontaktuj się z nami poprzez udostępniony formularz, aby uzyskać bezpłatną analizę możliwości i oszczędności dostosowaną do Twojej firmy. Przedstawimy model współpracy i konkretne oszczędności które możemy wypracować.</AccordionContent>
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
        </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
