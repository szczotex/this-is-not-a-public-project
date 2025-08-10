import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HandCoins, Wrench, BatteryCharging, Sun, Gauge, Factory, Plug, Timer } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground page-texture">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <a href="#" className="flex items-center" aria-label="Strona główna modu.energy">
            <img src="/brand/modu-energy-logo.png" alt="modu.energy logo" className="h-6 md:h-7 w-auto" />
          </a>
          <Button asChild variant="hero" size="sm">
            <a href="#formularz" aria-label="Przejdź do formularza">Rozpocznij</a>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative isolate min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
              src="/images/hero-industrial-solar.jpg"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-foreground/60" />
          </div>
          <div className="container py-20 md:py-28">
            <div className="mx-auto max-w-3xl text-center animate-enter text-primary-foreground">
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                Obniż koszty energii, nawet do 30%. Bez inwestycji.
              </h1>
              <Button asChild variant="hero" size="lg">
                <a href="#formularz" aria-label="Przewiń do formularza">Rozpocznij</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container py-8 md:py-14">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="transition-transform duration-200 hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <HandCoins className="text-foreground" />
                  <CardTitle className="text-xl">Finansujemy całość inwestycji</CardTitle>
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
                  <CardTitle className="text-xl">Instalacja i formalności</CardTitle>
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
                  <CardTitle className="text-xl">Podział zysków</CardTitle>
                </div>
                <CardDescription>
                  Optymalizujemy zużycie energii, tworząc oszczędności kosztowe dla naszych klientów.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* ICP */}
        {/* ICP */}
        <section className="container py-8 md:py-14">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Kogo szukamy?</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  Dopiero zaczynamy i nie jesteśmy w stanie pomóc wszystkim. Cechy idealnego klienta:
                </p>
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
                  Jeśli nie masz pewności, czy się kwalifikujesz — wyślij formularz. Wrócimy z odpowiedzią w kilka dni.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Form CTA */}
        <section id="formularz" className="container py-12 md:py-20">
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
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-6 text-sm text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} modu.energy</span>
          <a href="#formularz" className="underline-offset-4 hover:underline">Formularz</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
