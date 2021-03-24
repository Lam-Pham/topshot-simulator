
export default function Landing() {
  return (
    <div>
      <div name="landing" class="space-y-6">
        <span class="block text-base invisible">probably not best practice</span>
        <div class="border-b border-black"></div>
      </div>
      
      <div class="grid grid-cols-2 mt-24">
        <div class="col-span-1 border-2 border-black leading-8 p-8">
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

        <p class="col-span-1 ml-12 text-4xl leading-tight">According to the simulator, you have a <span class="underline text-purple-500">20.7%</span> chance of copping the Cool Cats 3 pack.</p>

      </div>
    </div>
  )
}

