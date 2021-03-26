import * as Scroll from 'react-scroll';
import BottomMenu from "../components/bottomMenu" 

export default function Menu() {

    let Link = Scroll.Link;

    return (
        
        <div class="fixed space-y-24">

            <div class="space-y-6">

                <Link to="landing" smooth={true} offset={-100} class="font-bold block text-base tracking-widest cursor-pointer hover:opacity-50 duration-200">TOPSHOT SIMULATOR<span class="invisible">ha</span></Link>

                <div class="border-b border-black"></div>
            </div>
            <div class="space-y-0">
                <Link to="runDown" smooth={true} offset={-48} class="cursor-pointer text-base hover:opacity-50 duration-200">run-down</Link>
                <br/>
                <Link to="drop" smooth={true} offset={-40} class="cursor-pointer text-base hover:opacity-50 duration-200">drop</Link>
                <br/>
                <Link to="pack" smooth={true} offset={-40} class="cursor-pointer text-base hover:opacity-50 duration-200">pack</Link>
                <br/>
                <Link to="founders" smooth={true} offset={-40} class="cursor-pointer text-base hover:opacity-50 duration-200">founders</Link>
                
            </div>
            <p class="invisible">filler</p>
            <p class="invisible">filler</p>
            <div class="space-y-0">
                <BottomMenu/>
            </div>

    </div>

        
        
        
    )
}