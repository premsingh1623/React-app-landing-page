import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer id="footer">
            <div className="footer">
                <div>
                    <p>Copyright © <strong>Jeane </strong>&nbsp;</p>
                    <p> All Rights Reserved.</p>
                </div>

                <div>
                    <a className="policy" href="#">Terms & Policy</a>
                    <a className="policy" href="#">Disclaimer</a>
                    <a href="#home"><i className="fa fa-arrow-up"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
