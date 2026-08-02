export default function Hero() {
  return (
    <section className="hero">
      <div className="docket-no">
        <span className="rule" /> MATTER FILE — MAHIKENG, NORTH WEST
      </div>
      <h1>
        Representation built on a <em>record</em>, not a promise.
      </h1>
      <p className="lede">
        Kgomo Attorneys Inc has stood in Mahikeng for years of civil, family, labour and commercial
        matters — the kind of standing that shows up in the file, not the marketing.
      </p>

      <div className="hero-bottom">
        <div className="hero-ctas">
          <a href="#contact" className="btn btn-primary">
            Book a Consultation
          </a>
          <a href="#docket" className="btn btn-ghost">
            View Practice Areas
          </a>
        </div>
        <div className="seal">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Kgomo Attorneys Inc seal" />
        </div>
      </div>

      <div className="stat-row">
        <div className="stat">
          <div className="num">4,114+</div>
          <div className="lbl">Client Reviews</div>
        </div>
        <div className="stat">
          <div className="num">5</div>
          <div className="lbl">Practice Divisions</div>
        </div>
        <div className="stat">
          <div className="num">018 011 0015</div>
          <div className="lbl">Direct Line</div>
        </div>
      </div>
    </section>
  )
}
