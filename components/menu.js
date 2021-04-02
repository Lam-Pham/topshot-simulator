import * as Scroll from 'react-scroll';
import Scrollspy from 'react-scrollspy'

export default function Menu() {

    let Link = Scroll.Link;

    return (
        
        <div class="fixed hidden md:block space-y-24">

            <div class="space-y-6">

                <Link to="landing" smooth={true} offset={-100} class="font-bold block 2xl:text-xl text-base tracking-widest cursor-pointer hover:opacity-50 duration-200">TOPSHOT SIMULATOR<span class="invisible">ha</span></Link>

                <div class="border-b border-black"></div>
            </div>
            <div class="space-y-0">
                <div class="cursor-pointer 2xl:text-xl text-base hover:opacity-50">
                    <Scrollspy offset={300} componentTag="div" items={ ['runDown'] } currentClassName="font-bold cursor-pointer 2xl:text-xl text-base hover:opacity-50">
                        <Link to="runDown" spy={true} smooth={true} offset={-40}>run-down</Link>
                    </Scrollspy>
                </div>
                <div class="cursor-pointer 2xl:text-xl text-base hover:opacity-50">
                    <Scrollspy offset={400} componentTag="div" items={ ['drop'] } class="cursor-pointer 2xl:text-xl text-base hover:opacity-50" currentClassName="font-bold cursor-pointer 2xl:text-xl text-base hover:opacity-50">
                        <Link to="drop" spy={true} smooth={true} offset={-40}>simulate drop</Link>
                    </Scrollspy>
                </div>
                <div class="cursor-pointer 2xl:text-xl text-base hover:opacity-50">
                    <Scrollspy offset={600} componentTag="div" items={ ['pack'] } currentClassName="font-bold cursor-pointer 2xl:text-xl text-base hover:opacity-50">
                        <Link to="pack" smooth={true} offset={-40}>simulate pack</Link>
                    </Scrollspy>
                </div>
                <div class="cursor-pointer 2xl:text-xl text-base hover:opacity-50">
                    <Scrollspy offset={500} componentTag="div" items={ ['founders'] } currentClassName="font-bold cursor-pointer 2xl:text-xl text-base hover:opacity-50">
                        <Link to="founders" smooth={true} offset={-40}>founders</Link>
                    </Scrollspy>
                </div>
            </div>
            <p class="invisible">filler</p>
            <p class="invisible">filler</p>
            <p class="invisible">filler</p>
            <a class="" href="mailto:topshotsimulator@gmail.com" target="_blank"><span class="cursor-pointer 2xl:text-xl text-base hover:opacity-50">send us a message </span>↗</a>

    </div>

        
        
        
    )
}