import React from 'react'

export class ServiceFooter extends React.Component {

    render() {

        return <div className="jumbotron text-center backgroundFooter">
            <h2 className="text-center footerh2"><strong>Express Service</strong></h2>
    
            <div className="container-fluid margintop30">
                <div className="row">

                    <div className="col-md-4">
                      
                        <h2 className="footerh2">Utility</h2>
                        <div className='footerEle'>Home</div>
                        <div className='footerEle'>Blog</div>
                        <div className='footerEle'>Reviews</div>
                        <div className='footerEle'>Careers</div>
                        <div className='footerEle'>Contact Us</div>
                    </div>

                    <div class="col-md-4">
                      
                        <h2 className="footerh2">Our Partners</h2>
                        <div className='footerEle'>Xyz Company</div>
                        <div className='footerEle'>Pqr Company</div>
                        <div className='footerEle'>Abc Company</div>
                        <div className='footerEle'>Mno Company</div>
                    </div>

                    <div class="col-md-4">
                      
                        <h2 className="footerh2">Overview</h2>
                        <div className='footerEle'>Customers</div>
                        <div className='footerEle'>Update Details</div>
                        <div className='footerEle'>Trending Items</div>
                        <div className='footerEle'>Stats</div>
                    </div>

                </div>
            </div>

            <ul className='spul'>

                <li className="fa fa-facebook spli"><a href="#" className="fa"></a></li>
                <li><a href="#" className="fa fa-twitter spli"></a></li>
                <li><a href="#" className="fa fa-google spli"></a></li>
                <li><a href="#" className="fa fa-linkedin spli"></a></li>
                <li><a href="#" className="fa fa-youtube spli"></a></li>
                <li><a href="#" className="fa fa-instagram spli"></a></li>
            </ul>
        </div>
    }
}