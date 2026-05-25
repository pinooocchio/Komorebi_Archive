const petals = Array.from({ length: 16 }, (_, index) => ({
  id: index,
  left: `${(index * 7) % 100}%`,
  delay: `${index * 0.8}s`,
  duration: `${11 + (index % 5)}s`
}));

export function FloatingPetals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="absolute top-[-12vh] h-3 w-2 rounded-[100%_0%_100%_0%] bg-sakura-200/70 blur-[0.2px] animate-floatPetal"
          style={{ left: petal.left, animationDelay: petal.delay, animationDuration: petal.duration }}
        />
      ))}
    </div>
  );
}