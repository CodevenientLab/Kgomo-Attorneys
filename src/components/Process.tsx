import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    step: 'STEP 01',
    title: 'Consultation',
    body: "Call the office or send your matter details. You'll speak to someone who can actually assess it — not a switchboard.",
  },
  {
    step: 'STEP 02',
    title: 'Matter Opened',
    body: 'Your file is opened, the right division assigned, and next steps and timelines are set out clearly.',
  },
  {
    step: 'STEP 03',
    title: 'Representation',
    body: 'Your matter is carried through to resolution, with direct access to the attorney handling your file throughout.',
  },
]

function ProcessItem({ step, title, body }: (typeof steps)[number]) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div className="process-item reveal" ref={ref}>
      <div className="step">{step}</div>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  )
}

export default function Process() {
  return (
    <section id="process">
      <div className="eyebrow">
        <span className="rule" /> How It Works
      </div>
      <h2 className="section-title">Opening a matter with Kgomo Attorneys.</h2>
      <div className="process-grid">
        {steps.map((s) => (
          <ProcessItem key={s.step} {...s} />
        ))}
      </div>
    </section>
  )
}
