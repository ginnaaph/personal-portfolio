const coreValues = [
  {
    value: "Curiosity",
    description:
      "I'm endlessly curious - it's what fuels my desire to learn more about people, technology, and systems.",
  },
  {
    value: "Empathy",
    description:
      "Empathy is how I build genuine connection and understand other people’s perspectives.",
  },
  {
    value: "Communication & Collaboration",
    description:
      "While I work well independently, I thrive in collaborative teams where we learn from each other.",
  },
  {
    value: "Grit & Resilience",
    description:
      "Not everything goes as planned - and that's okay. What matters is showing up and doing your best.",
  },
  {
    value: "Accountability",
    description:
      "I value ownership — of mistakes, of progress, and of growth. Feedback helps me get better.",
  },
];

export const CoreValueCarousel = () => {
  return (
    <section className="w-full rounded-2xl bg-[#F5E6E8] p-6 sm:p-8">
      <div className="w-full">
        <div className="p-4 mb-3 text-center">
          <h1>My Core Values</h1>
          </div>
        
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className=" sm:min-w-[320px]  shrink snap-start bg-white p-6 rounded-xl shadow-sm"
            >
              <h3>
                {value.value}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
