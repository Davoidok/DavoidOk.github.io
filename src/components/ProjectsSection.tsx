import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ProjectCard
          title="MMR Matchmaking System"
          description="Real-time MMR-based matchmaking using Django, PostgreSQL, WebSockets, and Colyseus."
          link="https://github.com/davoidok/mmr-system"
        />
        <ProjectCard
          title="Energy Modeling Tool"
          description="Python analysis system built during NREL internship using Pandas and NumPy."
          link="https://github.com/davoidok/energy-model"
        />
        <ProjectCard
          title="Unity High-Speed Game"
          description="C# obstacle-dodging game showcasing physics, collisions, and movement mechanics."
          link="https://github.com/davoidok/unity-speed-game"
        />
      </div>
    </section>
  );
}
