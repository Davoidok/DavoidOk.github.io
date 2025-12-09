export default function Navbar() {
    return (
      <nav className="w-full py-4 px-8 flex justify-between items-center bg-white shadow-sm">
        <div className="text-xl font-semibold">David.</div>
        <a
          href="https://github.com/davoidok"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
      </nav>
    );
  }
  