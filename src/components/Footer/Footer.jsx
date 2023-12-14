import fb from '../../assets/icon-facebook.svg'
import pt from '../../assets/icon-pinterest.svg'
import tt from '../../assets/icon-twitter.svg'
import insta from '../../assets/icon-instagram.svg'
import logo from '../../assets/logo.svg'

import Box from './Box'

const Footer = () => {
    return ( 
        <footer>
            <div className='row-1 border'>
                <img src={logo} alt=""/>
                <div>
                    <img src={fb} alt="facebook"/>
                    <img src={tt} alt="twitter"/>
                    <img src={pt} alt="pinterest"/>
                    <img src={insta} alt="instagram"/>
                </div>
            </div>
            <div className='row-2'>
                <Box title='Our company'>
                    <a href='#'>how we work</a>
                    <a href='#'>why insure?</a>
                    <a href='#'>check price</a>
                    <a href='#'>reviews</a>
                </Box>
                <Box title='help me'>
                    <a href='#'>faq</a>
                    <a href='#'>terms of use</a>
                    <a href='#'>privacy policy</a>
                    <a href='#'>cookies</a>
                </Box>
                <Box title='contact'>
                    <a href='#'>sales</a>
                    <a href='#'>support</a>
                    <a href='#'>live chat</a>
                </Box>
                <Box title='Our company'>
                    <a href='#'>careers</a>
                    <a href='#'>press</a>
                    <a href='#'>licenses</a>
                </Box>
            </div>
        </footer>
     );
}
 
export default Footer;