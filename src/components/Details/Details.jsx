import snappyProcess from '../../assets/icon-snappy-process.svg'
import affordablePrices from '../../assets/icon-affordable-prices.svg'
import peopleFirst from '../../assets/icon-people-first.svg'

import Box from './Box'

const Details = () => {
    return ( 
        <div className='row-2'>
            <div className='row-2_border'></div>
            <h1>We're diffrent</h1>
            <div className='container'>
                <Box title='Snappy Process' img={snappyProcess}>
                    Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.
                </Box>
                <Box title='Affordable Prices' img={affordablePrices}>
                    We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.
                </Box>
                <Box title='Prople First' img={peopleFirst}>
                    Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.
                </Box>
            </div>
        </div>
     );
}
 
export default Details;