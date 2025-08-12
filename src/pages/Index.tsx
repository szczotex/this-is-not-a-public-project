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
                Bez inwestycji. Bez straty czasu.
              </p>
              <Button asChild variant="hero" size="lg">
                <a href="#formularz" aria-label="Przewiń do formularza">Darmowa analiza</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative py-8 md:py-14 bg-muted/40 page-texture border-t">
          <div className="container">
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
              Instalujemy i operujemy magazyny energii, wykorzystując istniejący przyłącz.
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="transition-transform duration-200 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <HandCoins className="text-foreground" />
                    <CardTitle className="text-xl">
                      Finansujemy całość<br />inwestycji
                    </CardTitle>
                  </div>
                  <CardDescription>
                    Finansujemy magazyn energii, dopasowany do klienta na podstawie naszych analiz.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="transition-transform duration-200 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Wrench className="text-foreground" />
                    <CardTitle className="text-xl">
                      Instalacja i<br />formalności
                    </CardTitle>
                  </div>
                  <CardDescription>
                    Instalujemy magazyn energii, zajmując się wszystkimi formalnościami.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="transition-transform duration-200 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BatteryCharging className="text-foreground" />
                    <CardTitle className="text-xl">
                      Podział<br />zysków
                    </CardTitle>
                  </div>
                  <CardDescription>
                    Optymalizujemy zużycie energii, tworząc oszczędności kosztowe dla naszych klientów.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* ICP */}
        {/* ICP */}
        <section className="relative py-8 md:py-14 bg-background page-texture border-t">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Jakich firm szukamy?</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
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
                      <span>wysoki pobór mocy (&gt;100MWh rocznie)</span>
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
                    Każdy przypadek jest odmienny - po analizie dokumentów dostarczonych formularzem, wrócimy z konkretną ofertą możliwych oszczędności
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Form CTA */}
        <section id="formularz" className="relative py-12 md:py-20 bg-muted/40 page-texture border-t">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 items-stretch md:divide-x md:divide-border">
              <Card>
                <CardContent className="pt-6 md:pr-6 h-full flex flex-col justify-center">
                  <div className="text-muted-foreground text-lg md:text-xl space-y-2">
                    <p>email: <a href="mailto:kontakt@modu.energy" className="underline">kontakt@modu.energy</a></p>
                    <p>telefon: <a href="tel:+48668345897" className="underline">+48 668 345 897</a></p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 md:pl-6">
                  <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                      Sprawdź potencjalne oszczędności
                    </h2>
                    <div className="mt-4 text-left inline-block text-muted-foreground">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>darmowa ocena, oparta na dostarczonych informacjach</li>
                        <li>zero zobowiązań</li>
                        <li>szybka odpowiedź, do paru dni</li>
                      </ul>
                    </div>
                    <div className="mt-6">
                      <Button asChild variant="hero" size="lg">
                        <a href="https://tally.so/forms/mV6Jvl/edit">Darmowa analiza</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="relative py-12 md:py-16 bg-background page-texture border-t">
          <div className="container max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Pytanie 1 (placeholder)</AccordionTrigger>
                <AccordionContent>Odpowiedź placeholder.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Pytanie 2 (placeholder)</AccordionTrigger>
                <AccordionContent>Odpowiedź placeholder.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Pytanie 3 (placeholder)</AccordionTrigger>
                <AccordionContent>Odpowiedź placeholder.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Pytanie 4 (placeholder)</AccordionTrigger>
                <AccordionContent>Odpowiedź placeholder.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Pytanie 5 (placeholder)</AccordionTrigger>
                <AccordionContent>Odpowiedź placeholder.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Pytanie 6 (placeholder)</AccordionTrigger>
                <AccordionContent>Odpowiedź placeholder.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>Pytanie 7 (placeholder)</AccordionTrigger>
                <AccordionContent>Odpowiedź placeholder.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>Pytanie 8 (placeholder)</AccordionTrigger>
                <AccordionContent>Odpowiedź placeholder.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>Pytanie 9 (placeholder)</AccordionTrigger>
                <AccordionContent>Odpowiedź placeholder.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger>Pytanie 10 (placeholder)</AccordionTrigger>
                <AccordionContent>Odpowiedź placeholder.</AccordionContent>
              </AccordionItem>
            </Accordion>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: Array.from({ length: 10 }).map((_, i) => ({
                    "@type": "Question",
                    name: `Pytanie ${i + 1} (placeholder)` ,
                    acceptedAnswer: { "@type": "Answer", text: "Odpowiedź placeholder." },
                  })),
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
