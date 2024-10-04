export default function Hero({targetRef}) {
  const handleScroll = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero bg-[url('https://images.unsplash.com/photo-1506368083636-6defb67639a7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] min-h-screen">
      <div className="hero-content text-center bg-base-200 rounded-2xl p-10">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold">Welcome to Sizzle & Stir! </h2>
          <p className="py-6">Explore tremendous amount of beloved recipes that suit your tastes!</p>
          <button className="btn btn-warning" onClick={handleScroll}>Explore Now</button>
        </div>
      </div>
    </div>
  );
}
