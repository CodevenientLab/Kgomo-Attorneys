import { useReveal } from '../hooks/useReveal'

const matters = [
  {
    no: 'MATTER 01',
    title: 'Civil & Commercial Litigation',
    body: 'Civil disputes, urgent applications and general commercial litigation, carried from pleadings through to judgment.',
  },
  {
    no: 'MATTER 02',
    title: 'Family & Estates',
    body: 'Matrimonial and divorce disputes, drafting of wills and family trusts, estate planning, and the administration and winding-up of estates.',
  },
  {
    no: 'MATTER 03',
    title: 'Labour & Dispute Resolution',
    body: 'Mediation and arbitration at the CCMA, labour court proceedings, and representation at disciplinary hearings.',
  },
  {
    no: 'MATTER 04',
    title: 'Corporate & Commercial Advisory',
    body: 'Commercial contracts, company registrations, legal opinions on transactions, trust formation, and legal due diligence.',
  },
  {
    no: 'MATTER 05',
    title: 'Insolvency Proceedings',
    body: 'Insolvency matters handled with the same procedural discipline as every other file on the docket.',
  },
]

function DocketItem({ no, title, body }: (typeof matters)[number]) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div className="docket-item reveal" ref={ref}>
      <div className="no">{no}</div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default function Docket() {
  return (
    <section className="docket" id="docket">
      <div className="eyebrow">
        <span className="rule" /> Practice Areas
      </div>
      <h2 className="section-title">Open matters, by division.</h2>

      <div className="docket-list">
        {matters.map((m) => (
          <DocketItem key={m.no} {...m} />
        ))}
      </div>
    </section>
  )
}
