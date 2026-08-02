import { useReveal } from '../hooks/useReveal'

export default function Standing() {
  const textRef = useReveal<HTMLDivElement>()
  const figuresRef = useReveal<HTMLDivElement>()

  return (
    <section className="standing" id="standing">
      <div className="reveal" ref={textRef}>
        <div className="eyebrow">
          <span className="rule" /> The Firm
        </div>
        <h2 className="section-title">
          A general practice trusted for the matters people can't afford to get wrong.
        </h2>
        <p>
          From Motheo House on Shippard Street, Mahikeng, Kgomo Attorneys Inc handles the full span of a
          working legal practice — civil disputes, family and estate matters, labour disputes referred to
          the CCMA, and the commercial work that keeps local businesses compliant. No matter is treated as
          routine; every file gets the same attention to the record.
        </p>
        <p className="mission-quote">
          "To provide the most effective, ethical representation possible through professionalism and
          client care."
        </p>
      </div>
      <div className="standing-figures reveal" ref={figuresRef}>
        <div className="fig">
          <div className="n">Motheo House</div>
          <div className="l">Shippard St, Mahikeng</div>
        </div>
        <div className="fig">
          <div className="n">Full Service</div>
          <div className="l">Civil · Family · Labour · Corporate</div>
        </div>
        <div className="fig">
          <div className="n">Direct Access</div>
          <div className="l">No call centre, no queue</div>
        </div>
      </div>
    </section>
  )
}
