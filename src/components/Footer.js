import React from 'react'
//import './styles/footer.css'

const styles = {
    footerStyle: {
        background: '#4CD7D0',
        fontSize: '20px',
        marginTop: '0px',
        width:'100%',
        backgroundImage:`url('https://images.pexels.com/photos/268976/pexels-photo-268976.jpeg?cs=srgb&dl=pexels-pixabay-268976.jpg&fm=jpg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    
        
        
    }
}

function Footer() {
    return (
        <div className='footer' style={styles.footerStyle}>
            <footer >
                <div className='icons'>
                    <ul className='list-style: none list-inline text-center'>
                        <li className='list-inline-item'>
                            <a target="_blank" href="https://github.com/thutuephan"><i className="fab fa-github-square fa-2x"></i><br/>GitHub
                            </a>
                        </li>
                        <li className='list-inline-item'>
                            <a target="_blank" href="https://www.linkedin.com/in/thu-phan-2abaa1221/"><i className="fab fa-linkedin-in fa-2x"></i><br/>LinkedIn</a>                           
                        </li>
                        <li><a target="_blank" href="mailto:alicebe.phan@gmail.com"><i className="fas fa-envelope-open-text fa-2x"></i><br/>Email</a>
                        </li>
                        <li><a target="_blank" href="https://alicezenmind.com"><i className="far fa-file fa-2x"></i><br/>Resume</a></li>
                        {/* <li><a target="_blank" href="https://stackoverflow.com/users/17991642/thu-phan"><i className="fab fa-stack-overflow fa-2x"></i><br/>Stack</a></li> */}


                    </ul>

                </div>
                <p> Created by Thu Phan</p>

            </footer>
            
        </div>
    )
}

export default Footer
