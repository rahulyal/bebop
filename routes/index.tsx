export default function Home() {
  return (
    <>
      <nav className="bg-slate-100 top-0 left-0 right-0 z-50 border-b-2 border-slate-300">
        <div className="flex justify-between items-center px-6 py-2">
          <div className="flex items-center gap-5">
            <h1 className="text-2xl pb-2">- . -</h1>
            <h1 className="font-mono text-2xl text-blue-200">/</h1>
            <h1 className="font-mono text-xl">Bebop</h1>
          </div>
        </div>
      </nav>
      <div className="bg-dotted overflow-auto min-h-screen">
        <div className="relative z-10">
        </div>
      </div>
    </>
  );
}
