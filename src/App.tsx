import { Button } from "@/components/ui/button"
import { ArrowDown, Diamond } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="container mx-auto px-6 py-8 flex justify-between items-center">
        <div className="text-3xl font-bold tracking-tight">nu</div>
        <Button className="bg-green-300 text-black hover:bg-green-400 transition-colors text-lg px-6">
          Join Waitlist
        </Button>
      </header>

      <main className="container mx-auto flex-1 flex items-center px-6 relative">
        <div className="flex flex-col space-y-12 max-w-3xl z-10">
          <p className="text-xl text-gray-300">The speculation market for narratives.</p>
          
          <div className="space-y-4">
            <h1 className="text-7xl md:text-8xl font-bold leading-tight">Trade</h1>
            <h1 className="text-7xl md:text-8xl font-bold leading-tight text-green-300">Any</h1>
            <h1 className="text-7xl md:text-8xl font-bold leading-tight">Narrative</h1>
          </div>

          <div className="flex items-center space-x-3">
            <Diamond className="text-purple-400" size={28} />
            <span className="text-lg text-gray-300">Built on Monad</span>
          </div>

          <div className="flex items-center space-x-5">
            <div className="bg-green-300 rounded-full p-3 hover:bg-green-400 transition-colors cursor-pointer">
              <ArrowDown className="text-black" size={28} />
            </div>
            <p className="text-xl">Discover. Speculate. Trade. Create.</p>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block">
          <div className="text-[12rem] font-bold tracking-tighter">nu</div>
        </div>
      </main>
    </div>
  )
}

export default App
