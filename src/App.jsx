import Die from './Die';

function App() {

  return (
    <main className="bg-nightblue max-w-[360px] max-h-[380px] h-full mx-auto px-5 py-7 rounded-2xl relative top-1/2 -translate-y-1/2 font-sans">
      <div className="bg-dirtywhite w-full h-full p-9 rounded-xl flex flex-col items-center justify-center">
        <div id="dieContainer" className="grid grid-cols-5 gap-4">
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
        </div>
      </div>
    </main>
  )
}

export default App
