import './home.css'

import { Social } from '../../components/Social'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Home() {
    return (
        <div className='homeContainer'>
            <h1>Samuel Santos</h1>
            <span>Veja meus links</span>

            <main className='links'>
                <section className='linkArea'>
                    <a href="#">
                        <p className='linkText'>Canal no Youtube</p>

                    </a>
                </section>
                <section className='linkArea'>
                    <a href="#">
                        <p className='linkText'>Canal no Youtube</p>

                    </a>
                </section>
                <section className='linkArea'>
                    <a href="#">
                        <p className='linkText'>Grupo no Discord</p>

                    </a>
                </section>
                <section className='linkArea'>
                    <a href="#">
                        <p className='linkText'>Grupo no Whatsapp</p>

                    </a>
                </section>

                <footer>
                    <Social url="https://facebook.com/">
                        <FaFacebook size={32} color="#fff"/>
                    </Social>
                    <Social url="https://youtube.com/">
                        <FaYoutube size={32} color="#fff"/>
                    </Social>
                    <Social url="https://instagram.com/">
                        <FaInstagram size={32} color="#fff"/>
                    </Social>
                </footer>
            </main>
        </div>
    )
}
