import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col h-screen w-52 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant py-8 gap-unit z-50">
        
        <div className="px-6 mb-8">
          <h1 className="font-display-lg text-headline-lg text-primary tracking-tight">
            Signify
          </h1>

          <p className="font-body-md text-on-surface-variant opacity-70">
            Learn ASL Daily
          </p>
        </div>

        <nav className="flex-grow flex flex-col gap-2 px-2">

          <Link
            to="/"
            className="flex items-center gap-unit text-on-surface rounded-full px-4 py-3 hover:bg-secondary-container transition-all"
          >
            <span className="material-symbols-outlined">home</span>
            <span className="font-title-md text-title-md">Home</span>
          </Link>

          <Link
            to="/learn"
            className="flex items-center gap-unit text-on-surface-variant rounded-full px-4 py-3 hover:bg-secondary-container transition-all"
          >
            <span className="material-symbols-outlined">school</span>
            <span className="font-title-md text-title-md">Learn</span>
          </Link>

          <Link
            to="/practice"
            className="flex items-center gap-unit text-on-surface-variant rounded-full px-4 py-3 hover:bg-secondary-container transition-all"
          >
            <span className="material-symbols-outlined">videocam</span>
            <span className="font-title-md text-title-md">Live Cam Practice</span>
          </Link>
          
        <Link
            to="/quiz"
            className="flex items-center gap-unit text-on-surface-variant rounded-full px-4 py-3 hover:bg-secondary-container transition-all"
            >
            <span className="material-symbols-outlined">quiz</span>

            <span className="font-title-md text-title-md">
                Quiz
            </span>
            </Link>
                    <Link
            to="/about"
            className="flex items-center gap-unit text-on-surface-variant rounded-full px-4 py-3 hover:bg-secondary-container transition-all"
          >
            <span className="material-symbols-outlined">info</span>
            <span className="font-title-md text-title-md">Sentence Builder</span>
          </Link>

        </nav>

        <div className="px-4 mt-auto">
          <div className="border-t border-outline-variant pt-4">
            <p className="text-sm text-on-surface-variant opacity-60 px-2">
              Interactive Sign Language Learning
            </p>
          </div>
        </div>

      </aside>

     
    </>
  );
}

export default Navbar;