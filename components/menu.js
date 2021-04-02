import * as Scroll from 'react-scroll';

export default function Menu() {

    let Link = Scroll.Link;

    return (
        
        <div class="fixed hidden md:block space-y-24">

            <div class="space-y-6">

                <Link to="landing" smooth={true} offset={-100} class="font-bold block 2xl:text-xl text-base tracking-widest cursor-pointer hover:opacity-50 duration-200">TOPSHOT SIMULATOR<span class="invisible">ha</span></Link>

                <div class="border-b border-black"></div>
            </div>
            <div class="space-y-0">
                <Link to="runDown" smooth={true} offset={-40} class="cursor-pointer 2xl:text-xl text-base hover:opacity-50">run-down</Link>
                <br/>
                <Link to="drop" smooth={true} offset={-40} class="cursor-pointer 2xl:text-xl text-base hover:opacity-50">simulate drop</Link>
                <br/>
                <Link to="pack" smooth={true} offset={-40} class="cursor-pointer 2xl:text-xl text-base hover:opacity-50">simulate pack</Link>
                <br/>
                <Link to="founders" smooth={true} offset={-40} class="cursor-pointer 2xl:text-xl text-base hover:opacity-50">founders</Link>
                
            </div>
            <p class="invisible">filler</p>
            <p class="invisible">filler</p>
            <p class="invisible">filler</p>
            <a class="" href="mailto:topshotsimulator@gmail.com" target="_blank"><span class="cursor-pointer 2xl:text-xl text-base hover:opacity-50">send us a message </span>↗</a>

    </div>

        
        
        
    )
}