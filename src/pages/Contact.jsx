function Contact() {
  return (
    <>
      <section className="mb-24">
        <h1 className="font-serif">Contact</h1>
        <p className="text-lg leading-relaxed max-w-4xl mb-8">
          For research inquiries, collaboration proposals, or technical discussion:
        </p>
        <div className="card p-8 max-w-2xl">
          <p className="text-2xl font-serif mb-2">
            <a href="mailto:research@euroswarms.eu" className="text-blue-300 hover:text-white border-0">
              research@euroswarms.eu
            </a>
          </p>
          <p className="mt-4" style={{ color: '#d4e3f0' }}>
            We welcome inquiries from researchers, institutions, and organizations
            interested in collaboration or technical exchange.
          </p>
        </div>
      </section>
    </>
  );
}

export default Contact;

