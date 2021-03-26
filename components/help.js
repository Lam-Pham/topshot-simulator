
export default function Help() {
    return (
      <div>
        <div name="landing" class="space-y-6">
          <span class="block text-base invisible">probably not best practice</span>
          <div class="border-b border-black"></div>
        </div>
        <div class="grid grid-cols-3 mt-24 gap-x-24">
          <p class="col-span-1 text-3xl">sweet !<br/><br/>
          here's a list of some "mini-roles".<br/><br/>
          <a class="underline text-blue-500 hover:text-blue-700" href="mailto:topshotsimulator@gmail.com">shoot me an email</a> if you're interested ♥<br/><br/>
          no experience necessary!
          </p>
          <div class="col-span-2 mx-24">
              <p class="text-3xl border-b-2 border-black">"mini-roles"</p>
              <div class="grid grid-cols-4 mt-8 gap-y-16">
                <p class="col-span-1">01</p>
                <p class="col-span-3"><span class="font-bold hover:text-blue-500 underline">designer</span><br/><br/>task: design a logo for us!<br/></p>
                <p class="col-span-1">02</p>
                <p class="col-span-3"><span class="font-bold hover:text-blue-500 underline">???</span><br/><br/>task: you tell me!<br/></p>
              </div>
          </div>
        </div>
    </div>
    )
}