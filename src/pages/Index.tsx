import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HandCoins, Wrench, BatteryCharging, Sun, Gauge, Factory, Plug, Timer } from "lucide-react";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground page-texture">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative isolate min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
              src="/images/background.jpg"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
              loading="eager"
              onError={(e) => { e.currentTarget.src = "/lovable-uploads/66081494-c40e-49a2-9999-4b9eac6f619b.png"; }}
            />
            <div className="absolute inset-0 bg-foreground/60" />
          </div>
          <div className="container py-20 md:py-28">
            <div className="mx-auto max-w-3xl text-center animate-enter text-primary-foreground">
              <h1 className="whitespace-nowrap text-3xl md:text-5xl font-semibold leading-tight">
                Obniż koszty energii dla swojej firmy, nawet do 25%
              </h1>
              <p className="mt-3 mb-6 text-lg md:text-xl text-primary-foreground/90">
                Bez inwestycji. Bez straty czasu.
              </p>
              <Button asChild variant="hero" size="lg">
                <a href="#formularz" aria-label="Przewiń do formularza">Rozpocznij</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative py-8 md:py-14 bg-muted/40 page-texture border-t">
          <div className="container">
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Kogo szukamy?</h2>
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
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Sprawdź potencjalne oszczędności w swojej firmie, bez zobowiązań
              </h2>
              <div className="mt-4 text-left inline-block text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>darmowa ocena potencjału oszczędności, oparta na własnej analizie</li>
                  <li>szybka i niezobowiązująca ocena - odezwiemy się w przeciągu paru dni</li>
                </ul>
              </div>
              <div className="mt-6">
                <Button asChild variant="hero" size="lg">
                  <a href="https://tally.so/forms/mV6Jvl/edit">Sprawdź ile możesz zaoszczędzić</a>
                </Button>
              </div>
            </div>
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

export default Index;
