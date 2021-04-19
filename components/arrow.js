import * as Scroll from 'react-scroll';
import Image from 'next/image'

export default function Arrow(props) {

    let Link = Scroll.Link;

    return (
        <div class="animate-bounce cursor-pointer">
            <Link to={props.target} smooth={true} offset={-40}>
                <Image
                    src="/arrow.png"
                    alt="Down Arrow"
                    height={48}
                    width={48}
                    quality={100}
                    layout="intrinsic"
                />
            </Link>
      </div>
    )
  }