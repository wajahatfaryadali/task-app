import Image from "next/image";

const CardsSection = () => {
  const cards = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    title: `Venue ${index + 1}`,
    image: `https://picsum.photos/seed/venue-${index + 1}/400/600`,
  }));

  return (
    <>
      <section className="w-full px-6 py-10">
        <h2 className="mb-8 mt-6 text-4xl font-semibold text-white text-center">
          Explore Venues
        </h2>
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
              <article
                key={card.id}
                className="overflow-hidden rounded-2xl bg-white/90 shadow-lg"
              >
                <div className="relative h-[300px] w-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#111111]">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#5A5A5A]">
                    Discover unique spaces perfect for every celebration.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CardsSection;
