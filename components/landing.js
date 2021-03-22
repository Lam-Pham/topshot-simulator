import Link from 'next/link'

export default function Landing() {
  return (
    <div class="grid grid-cols-3 mt-36">
      
      <div class="col-span-1 col-start-1 border-2 border-black leading-8 p-8">
        <p class="font-bold">the run-down</p>
        <div class="grid grid-cols-4">
          <p class="col-span-2">pack: </p>
          <p class="col-span-2">Cool Cats 3</p>
          <p class="col-span-2">total available:</p>
          <p class="col-span-2">67,500</p>
          <p class="col-span-2">expected demand:</p>
          <p class="col-span-2">325,000</p>
        </div>
      </div>

      <p class="col-span-2 ml-12 text-5xl leading-tight">According to the simulator, <br/>you have a <span class="underline text-purple-500">20.7%</span> chance of copping the Cool Cats 3 pack.</p>

      <div class="col-start-2 col-span-1 mt-36">
        
      </div>
    </div>
  )
}

