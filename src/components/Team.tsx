import { useReveal } from '../hooks/useReveal'

const associates = [
  { role: 'Associate', name: 'Pogisho Mfoloe', email: 'pogisho@kgomoattorneys.co.za' },
  { role: 'Candidate Attorney', name: 'Derrick Bekwa', email: 'derrick@kgomoattorneys.co.za' },
  { role: 'Candidate Attorney', name: 'Koketso Molefe', email: 'koketso@kgomoattorneys.co.za' },
  { role: 'Candidate Attorney', name: 'Lesedi Molosiwa', email: 'lesedi@kgomoattorneys.co.za' },
]

export default function Team() {
  const leadRef = useReveal<HTMLDivElement>()
  const gridRef = useReveal<HTMLDivElement>()

  return (
    <section className="team" id="team">
      <div className="eyebrow">
        <span className="rule" /> The Team
      </div>
      <h2 className="section-title">Who's on the file.</h2>

      <div className="team-lead reveal" style={{ marginTop: 60 }} ref={leadRef}>
        <div className="avatar">OK</div>
        <div>
          <h3>Obakeng Kgomo</h3>
          <div className="role">Director</div>
          <p>
            Obakeng Balepilwe Kgomo holds a B.Juris and LLB from the University of the North West, and was
            admitted as an attorney of the High Court of South Africa in June 1998. Before founding the
            practice he served articles with Herman Scholtz Attorneys in Mafikeng and worked as a
            professional assistant at Gura Tlaletsi and Partners. He is a member of the National
            Association of Democratic Lawyers (NADEL).
          </p>
        </div>
      </div>

      <div className="team-grid reveal" ref={gridRef}>
        {associates.map((a) => (
          <div className="team-card" key={a.email}>
            <div className="role">{a.role}</div>
            <h4>{a.name}</h4>
            <a href={`mailto:${a.email}`}>{a.email}</a>
          </div>
        ))}
      </div>
    </section>
  )
}
