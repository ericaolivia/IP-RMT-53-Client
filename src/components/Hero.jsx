export default function Hero({targetRef}) {
  const handleScroll = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold">Welcome to Sizzle & Stir! </h2>
          <p className="py-6">Explore tremendous amount of beloved recipes that suit your tastes!</p>
          <button className="btn btn-warning" onClick={handleScroll}>Explore Now</button>
        </div>
      </div>
    </div>
  );
}
