function Docs() {
  return (
    <>
      <section className="mb-24">
        <h1 className="font-serif">Documentation</h1>
        <p className="text-lg leading-relaxed max-w-4xl">
          Technical documentation, specifications, and implementation guides for
          Euroswarms Research projects.
        </p>
      </section>

      <div className="divider"></div>

      <section className="mb-16">
        <h2 className="font-serif">Project Documentation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
          <div className="card p-8 group">
            <h3 className="font-serif text-2xl mb-3">CR-CA Documentation</h3>
            <p className="leading-relaxed mb-4">
              Architecture, API reference, and usage guides for CR-CA systems.
            </p>
            <a href="#" className="text-blue-300 text-sm font-medium hover:text-white inline-block">
              View documentation →
            </a>
          </div>
          <div className="card p-8 group">
            <h3 className="font-serif text-2xl mb-3">Project LUCRE Documentation</h3>
            <p className="leading-relaxed mb-4">
              Coordination protocols, execution models, and integration guides.
            </p>
            <a href="#" className="text-blue-300 text-sm font-medium hover:text-white inline-block">
              View documentation →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Docs;

