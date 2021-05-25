import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import Img1 from '../../assets/images/uploads/category/banner_img/1574973859_slide-02.jpg';
import Img2 from '../../assets/images/uploads/category/banner_img/1574974236_slide1.jpg';
import Img3 from '../../assets/images/uploads/category/banner_img/1574974066_kidslide.jpg';
import { Button } from '@material-ui/core';

export default function ProductCarousel() {
    const onClickItem = () => {
    }
    return (
        <Carousel infiniteLoop={true} showThumbs={false} autoPlay={true} showArrows={true} onClickItem={onClickItem}>
            <div>
                <img src={Img1} style={{maxHeight: 600}}/>
                <p className="title">Legend 1</p>
                <p className="subtitle">THisfljsalkdfjsalkfjslkj sdlfkjsalk ksldfjdlsa;kj l sdlfkjl asdklfj  1</p>
                <Button className="legend">Shop Now</Button>
            </div>
            <div>
                <img src={Img2} style={{maxHeight: 600}}/>
                <p className="title">Legend 333</p>
                <p className="subtitle">THisfljsalkdfjsalkfjslkj sdlfkjsalk ksldfjdlsa;kj l sdlfkjl asdklfj  1</p>
                <p className="legend">Button</p>
            </div>
            <div>
                <img src={Img3} style={{maxHeight: 600}}/>
                <p className="title">Legend 3</p>
                <p className="subtitle">THisfljsalkdfjsalkfjslkj sdlfkjsalk ksldfjdlsa;kj l sdlfkjl asdklfj  1</p>
                <Button className="legend">Shop Now</Button>
            </div>
        </Carousel>
    );
};