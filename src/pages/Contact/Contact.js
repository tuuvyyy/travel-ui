import classNames from 'classnames/bind'
import styles from './Contact.module.scss'

const cx = classNames.bind(styles)

function Contact() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className={cx('wrapper')}>
            <h2>Contact</h2>
            <nav style={{ position: 'fixed', top: '150px', right: '20px' }}>
                <button onClick={() => scrollToSection('section1')}>Cuộn đến Phần 1</button>
                <button onClick={() => scrollToSection('section2')}>Cuộn đến Phần 2</button>
                <button onClick={() => scrollToSection('section3')}>Cuộn đến Phần 3</button>
            </nav>

            <div id="section1" style={{ height: '600px', padding: '20px', background: '#f0f2f5' }}>
                <h2>Phần 1</h2>
                <p>Nội dung cho phần 1.</p>
            </div>

            <div id="section2" style={{ height: '600px', padding: '20px', background: '#e6f7ff' }}>
                <h2>Phần 2</h2>
                <p>Nội dung cho phần 2.</p>
            </div>

            <div id="section3" style={{ height: '600px', padding: '20px', background: '#fff0f6' }}>
                <h2>Phần 3</h2>
                <p>Nội dung cho phần 3.</p>
            </div>
        </div>
    )
}

export default Contact
