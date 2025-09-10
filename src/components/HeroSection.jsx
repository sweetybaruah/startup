import analytica from "../assets/analytica.png";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-28 pb-16">
      <div className="container flex flex-col md:flex-row items-center gap-8">
        {/* Left Column (Text) */}
        <div className="md:w-1/2 text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span>The</span>
            <span className="text-primary"> Analytics Drive</span>
            <span className="text-gradient"> Software Solutions</span>
          </h1>

          <div className="pt-4">
            <a href="#contact" className="cosmic-button">
              Talk to our representative
            </a>
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="md:w-1/2">
          <img
            src={analytica}
            alt="Analytics Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};
