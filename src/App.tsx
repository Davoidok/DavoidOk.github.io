import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />

      <header className="text-center mt-16">
        <h1 className="text-5xl font-bold">David A.</h1>
        <p className="text-gray-600 mt-3 text-lg">
          Software Engineer · Game Developer · Robotics
        </p>
      </header>

      <main className="w-full max-w-4xl px-6 mt-16 mb-16">
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
}
