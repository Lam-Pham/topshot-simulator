import Arrow from './arrow'

export default function RunDown() {
    return (
      <div class="mt-24 2xl:mt-80">
        <div id="runDown" name="runDown" class="space-y-4">
          <h1 class="text-4xl 2xl:pb-1">run-down</h1>
          <div class="border-b border-black"></div>
        </div>
        
        <div class="grid grid-cols-2 mt-24 gap-y-12">
          <div class="col-span-1 border-2 border-black leading-8 p-8">
            <p class="font-bold">the run-down</p>
            <div class="grid grid-cols-4">
              <p class="col-span-2">pack: </p>
              <p class="col-span-2 text-red-500 font-bold">Throwdowns Pack</p>
              <p class="col-span-2">what's inside:</p>
              <p class="col-span-2">1 Throwdown + 5 Base</p>
              <p class="col-span-2">total available:</p>
              <p class="col-span-2">76,000</p>
              <p class="col-span-2">expected demand:</p>
              <p class="col-span-2">150,000</p>
              <br/>
              <p class="col-span-4"><a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSQtgnQ7M5UP195_9CPrY50jKv7w2OTFRTj5UwOFrtBi0aivCp3nOXDKPZeNgPJnJzJfFRh77Ro2Boz/pubhtml?gid=1420739371" class="border-b-2 border-red-400 hover:border-red-700" target="blank">list of all moments inside</a></p>
            </div>
          </div>
  
          <p class="col-span-1 ml-12 text-4xl leading-tight">According to the simulator, you have a <span class="underline text-red-500">~50%</span> chance to get the Throwdowns Pack.<br/><br/>good luck!</p>

        </div>
        <div class="mt-52 mx-96 pl-6">
          <Arrow target="drop"/>
        </div>
      </div>
    )
  }