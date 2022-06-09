import React, { Suspense } from 'react'
import './App.css'
import './i18n'
import En from './En'
import De from './De'
import LanguageSelector from './LanguageSelector'
import logo from './logo.svg'
import { RecoilRoot } from 'recoil'
import RegisterForm from './components/registerForm/index.js'

const App = () => (
    <div>
        <Suspense fallback={null}>
            <LanguageSelector />
            <En />
            <De />
        </Suspense>

       



        <div className="App">


            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <banner className="App-banner">
                <img src='https://adseen.site/9euroticket.png'></img>
            </banner>

            <tips className='App-tips'>
                <h2>Travel Tips (Germany wide)</h2>
                <p>1. Buy ticket</p>
                <p>2. Book Hotel</p>
                <p>3. Passport & Visa Ready</p>
                <p>4. Take Meds</p>
                <p>5. Tools and Accessories</p>
                <p>6. Emergency contacts</p>
            </tips>


            <tips className='App-ltrip'>
                <h2>Travel Tips (nearby the current GPS location)</h2>
                <p>1. Buy ticket</p>
                <p>2. Book Hotel</p>
                <p>3. Passport & Visa Ready</p>
                <p>4. Take Meds</p>
                <p>5. Tools and Accessories</p>
                <p>6. Emergency contacts</p>
            </tips>

            <tips className='App-weather'>
                <h2>Get Real-time weather forecasting report, susbcribe here</h2>
                
                   <input className='App-input'>

                       
                    </input>

                    <button>Subscribe</button>
    
            </tips>

            <div className='App-acc'>
                <h2>Accomodations</h2>
                <p>-----------------------</p>
                <p>-----------------------</p>
                <p>-----------------------</p>
                <p>-----------------------</p>

            </div>

            <div className='App-jobs'>
                <h2>Latest Jobs</h2>
                <p>-----------------------</p>
                <p>-----------------------</p>
                <p>-----------------------</p>
                <p>-----------------------</p>
                
            </div>

            <form className='register-form'>
                <p>Contact Us</p>
                <RecoilRoot>
                    <RegisterForm />
                </RecoilRoot>
            </form>

            <footer className='App-footer'>
                <a
                    className="App-link"
                    href="https://mawercer.de"
                    target="_blank"
                    rel="noopener noreferrer">
                    IMPRINT
                </a>
            </footer>

        </div>

    </div>


)

export default App