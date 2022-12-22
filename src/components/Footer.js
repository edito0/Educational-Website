import React from 'react';
import './css/footer.css'
function Footer() {
    return (
        <>

            <footer>
                <div className='footer_logo'>
                    <svg width="95" height="28" viewBox="0 0 95 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9993 0.666016C21.3593 0.666016 27.3327 6.63935 27.3327 13.9993C27.3327 21.3593 21.3593 27.3327 13.9993 27.3327C6.63935 27.3327 0.666016 21.3593 0.666016 13.9993C0.666016 6.63935 6.63935 0.666016 13.9993 0.666016ZM13.9993 24.666C19.902 24.666 24.666 19.902 24.666 13.9993C24.666 8.0967 19.902 3.33268 13.9993 3.33268C12.5981 3.33093 11.2102 3.60563 9.9153 4.14106C8.6204 4.67649 7.4438 5.46212 6.45296 6.45296C5.46212 7.4438 4.67649 8.6204 4.14106 9.9153C3.60563 11.2102 3.33093 12.5981 3.33268 13.9993C3.33268 19.902 8.0967 24.666 13.9993 24.666ZM13.9993 21.9993C9.5727 21.9993 5.99935 18.426 5.99935 13.9993C5.99935 9.5727 9.5727 5.99935 13.9993 5.99935C18.426 5.99935 21.9993 9.5727 21.9993 13.9993C21.9993 18.426 18.426 21.9993 13.9993 21.9993ZM13.9993 11.3327C12.5327 11.3327 11.3327 12.5327 11.3327 13.9993C11.3327 15.466 12.5327 16.666 13.9993 16.666C15.466 16.666 16.666 15.466 16.666 13.9993C16.666 12.5327 15.466 11.3327 13.9993 11.3327Z" fill="#1355FF" />
                        <path d="M38 14.5646C38 18.5529 40.8543 21.1787 45.1988 21.1787C49.5686 21.1787 52.4229 18.4043 52.4229 14.5646C52.4229 10.7498 49.5686 8.0249 45.1988 8.0249C40.8543 8.0249 38 10.5764 38 14.5646ZM41.2837 14.5646C41.2837 12.5333 42.3951 10.9479 45.1988 10.9479C48.0025 10.9479 49.1392 12.5333 49.1392 14.5646C49.1392 16.5959 48.0025 18.2556 45.1988 18.2556C42.4203 18.2556 41.2837 16.5959 41.2837 14.5646Z" fill="#061237" />
                        <path d="M57.0064 19.8162C57.0064 19.073 56.5517 18.206 56.3244 17.4876L56.8548 17.3142C57.1074 18.0078 57.2337 19.0235 57.7642 19.5437C58.6987 20.5098 60.0122 21.1538 61.6793 21.1538C65.3418 21.1538 67.893 18.1069 67.994 14.5398C68.0698 10.8735 65.4681 8 61.6793 8C59.9869 8 58.6735 8.5698 57.7389 9.5359C57.2337 10.0561 57.1074 11.0717 56.8548 11.7901L56.3244 11.6167C56.577 10.8983 57.0064 10.0313 57.0064 9.2881V8.3964L53.8995 8.4211V27L57.0064 26.9752V19.8162ZM61.2499 10.824C63.6242 10.824 64.8872 12.4094 64.8872 14.4902C64.8872 16.5958 63.6242 18.3299 61.2499 18.3299C58.9008 18.3299 57.5621 16.5958 57.5621 14.4902C57.5621 12.4094 58.9008 10.824 61.2499 10.824Z" fill="#061237" />
                        <path d="M77.4825 20.0144C77.9877 19.5438 78.1645 18.652 78.3918 18.0079L78.9223 18.2061C78.6949 18.8502 78.2403 19.6181 78.215 20.2869V20.7824H81.2966V8.39648H78.215V14.9362C78.215 17.3886 76.6995 18.4786 74.8556 18.4786C73.1632 18.4786 71.9761 17.5125 71.9761 14.9362V8.39648H68.8692V16.8932C68.8692 19.6924 71.2688 21.1539 73.7442 21.1539C75.4871 21.1539 76.4469 21.0053 77.4825 20.0144Z" fill="#061237" />
                        <path d="M95 16.7693C95 11.7406 85.7805 13.4499 85.7805 11.6663C85.7805 10.8736 86.9929 10.5021 88.3822 10.5021C90.4281 10.5021 91.6153 11.1214 91.6153 11.9141H94.7222C94.7222 10.18 93.0298 8.0249 88.559 8.0249C84.568 8.0249 82.6736 9.7589 82.6736 11.6911C82.6736 16.15 91.8426 14.5399 91.8426 16.9675C91.8426 17.6611 91.2112 18.33 89.2915 18.33C86.9171 18.33 85.6794 17.2152 85.6794 16.5712H82.5726C82.5726 18.652 84.6186 21.1787 88.9631 21.1787C93.0803 21.1787 95 19.1722 95 16.7693Z" fill="#061237" />
                    </svg>
                </div>

                <div className='footer_data_container'>

                    <div className='footer_item'>
                        <p>OVERVIEW</p>
                        <a href="">Overview</a>
                        <a href="">Landing</a>
                        <a href="">Pricing</a>
                        <a href="">CMS Pages</a>
                        <a href="">Accounts</a>
                        <a href="">Buy for Figma</a>
                    </div>

                    <div className='footer_item'>
                        <p>OVERVIEW</p>
                        <a href="">Overview</a>
                        <a href="">Landing</a>
                        <a href="">Pricing</a>
                        <a href="">CMS Pages</a>
                        <a href="">Accounts</a>
                        <a href="">Buy for Figma</a>
                    </div>
                    <div className='footer_item'>
                        <p>OVERVIEW</p>
                        <a href="">Overview</a>
                        <a href="">Landing</a>
                        <a href="">Pricing</a>
                        <a href="">CMS Pages</a>
                        <a href="">Accounts</a>
                        <a href="">Buy for Figma</a>
                    </div>

                    <div className='footer_links'>
                           <div>
                               <p>OPUS FOR WEBFLOW</p>
                               <p>Lorem Ipsum</p>
                           </div>
                           <div>
                               <p>OPUS FOR WEBFLOW</p>
                               <p>Lorem Ipsum</p>
                           </div>
                    </div>
                </div>

                <div className='footer_bottom'>
                    <a href="">Style Guide</a>
                    <a href="">Licence</a>
                    <a href="">Changelog</a>
                </div>
            </footer>

        </>
    );
}

export default Footer;
