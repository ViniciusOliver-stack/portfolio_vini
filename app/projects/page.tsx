import ExpandableCardGridDemo from "@/components/expandable-card-demo-grid"
import Title from "@/components/ui/title"

export default function Projects() {
  return (
    <section>
      <Title
        title="Meus Projetos"
        subtitle="Aqui estão alguns de meus projetos que desenvolvi, você pode encontra mais em meu"
        link="Github"
      />

      <ExpandableCardGridDemo />
    </section>
  )
}
