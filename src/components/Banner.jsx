import banner from '../assets/image-intro-mobile.jpg'

import bannerDesktop from '../assets/image-intro-desktop.jpg'

const Banner = () => {
    return ( 
        <div className='row-1'>
            <div className='info'>
                <h1>Humanizing your insurance.</h1>
                <p>Get our life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
                <a className='btn' href="#">VIEW PLANS</a>
                <picture className='img-left'>
                    <source srcSet='bg-pattern-intro-left-desktop.svg' media='(min-width: 1024px)'/>
                    <img src='bg-pattern-intro-left-mobile.svg' alt=''/>
                </picture>
                <picture className='img-right'>
                    <source srcSet='bg-pattern-intro-right-desktop.svg' media='(min-width: 1024px)'/>
                    <img src='bg-pattern-intro-right-mobile.svg' alt=''/>
                </picture>
            </div>
            <div className='image'>
                <picture>
                    <source media="(min-width: 680px)" srcSet={bannerDesktop}/>
                    <img src={banner} alt=""/>
                </picture>
            </div>
        </div>
     );
}
 
export default Banner;