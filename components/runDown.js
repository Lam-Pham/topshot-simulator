
export default function RunDown() {
    return (
      <div class="mt-36 2xl:mt-80">
        <div name="runDown" class="space-y-4">
          <h1 class="text-4xl 2xl:pb-1">run-down</h1>
          <div class="border-b border-black"></div>
        </div>
        
        <div class="grid grid-cols-2 mt-24 gap-y-12">
          <div class="col-span-1 border-2 border-black leading-8 p-8">
            <p class="font-bold">the run-down</p>
            <div class="grid grid-cols-4">
              <p class="col-span-2">pack: </p>
              <p class="col-span-2 text-purple-500 font-bold">Cool Cats 3</p>
              <p class="col-span-2">what's inside:</p>
              <p class="col-span-2">1 Cool Cat + 4 Base Moments</p>
              <p class="col-span-2">total available:</p>
              <p class="col-span-2">67,500</p>
              <p class="col-span-2">expected demand:</p>
              <p class="col-span-2">325,000</p>
              <br/>
              <p class="col-span-4"><a href="https://docs.google.com/spreadsheets/d/1xpQmT5Y6sMnpqEZ3NibKi2m6KrjOCvAw_qZJ3JTz58Q/edit#gid=868178082" class="border-b-2 border-purple-400 hover:border-purple-800" target="blank">list of all moments inside</a></p>
            </div>
          </div>
  
          <p class="col-span-1 ml-12 text-4xl leading-tight">According to the simulator, you have a <span class="underline text-purple-500">20.7%</span> chance of copping the Cool Cats 3 pack.<br/><br/>good luck!</p>

        </div>
      </div>
    )
  }