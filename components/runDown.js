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
              <p class="col-span-2 text-yellow-500 font-bold">Premium Pack</p>
              <p class="col-span-2">what's inside:</p>
              <p class="col-span-2">1 MGLE + 5 Base Moments</p>
              <p class="col-span-2">total available:</p>
              <p class="col-span-2">17,427</p>
              <p class="col-span-2">expected demand:</p>
              <p class="col-span-2">65,000</p>
              <br/>
              <p class="col-span-4"><a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSA1jjjiBPa31vK2s6RzXvH1ab95ap2oYqEELcnxIABSM-RvRDDYGLVz478WE2eYGXI163oHnh_4ngm/pubhtml?gid=537560723" class="border-b-2 border-yellow-400 hover:border-yellow-800" target="blank">list of all moments inside</a></p>
            </div>
          </div>
  
          <p class="col-span-1 ml-12 text-4xl leading-tight">According to the simulator, you have a <span class="underline text-yellow-500">17.4%</span> chance of copping the Premium Pack.<br/><br/>good luck!</p>

        </div>
        <div class="mt-52 mx-96 pl-6">
          <Arrow target="drop"/>
        </div>
      </div>
    )
  }