import { useReveal } from '../hooks/useReveal'

export default function Reputation() {
  const badgeRef = useReveal<HTMLDivElement>()
  const textRef = useReveal<HTMLDivElement>()

  return (
    <section className="reputation" id="reputation">
      <div className="rep-wrap">
        <div className="rep-badge reveal" ref={badgeRef}>
          <div className="n">4,114+</div>
          <div className="stars">★★★★★</div>
          <div className="l">Google Reviews</div>
        </div>
        <div className="reveal" ref={textRef}>
          <div className="eyebrow">
            <span className="rule" /> Standing
          </div>
          <p className="rep-quote">
            The kind of firm people in Mahikeng already know before they ever need one.
          </p>
          <div className="rep-cite">— Reputation built over years of local practice</div>
        </div>
      </div>
    </section>
  )
}
