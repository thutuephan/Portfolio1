import React from "react";

const styles = {
    
    icon: {
        fontSize: '75px',
        
    },
    image: {
        backgroundImage:`url('https://images.pexels.com/photos/2088170/pexels-photo-2088170.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-2088170.jpg&fm=jpg')`,}
    
}
function Skills () {
    return (

        <div className="container-fluid" style={styles.image}>
            <h1 style={{textAlign:'center'}}>Skills</h1>
            <div className="front-end">
                <h3>Front-end</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <i style={styles.icon} className="devicon-bootstrap-plain-wordmark colored"></i>

                        </div>
                        <div className="col-md-4 ms-auto">
                            <i style={styles.icon} className="devicon-html5-plain-wordmark colored"></i>
                        </div>

                    </div>
                    <div className="row">
                        <div class="col-md-3 ms-md-auto">
                            <i style={styles.icon} className="devicon-css3-plain-wordmark colored"></i>

                        </div>
                        <div className="col-md-3 ms-md-auto">
                            <i style={styles.icon} className="devicon-javascript-plain colored"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-auto me-auto">
                            <i style={styles.icon} className="devicon-jquery-plain-wordmark colored"></i>

                        </div>
                        <div className="col-auto">
                            <i style={styles.icon} className="devicon-react-original-wordmark colored"></i>

                        </div>
                    </div>
                </div>
            
            </div>
            <div className="back-end">
                <h3>Back-end</h3>
                <div className="container">
                    <div className="row">
                        <div class="col-md-4">
                            <i style={styles.icon} className="devicon-javascript-plain colored"></i>

                        </div>
                        <div class="col-md-4 ms-auto">
                            <i style={styles.icon} className="devicon-nodejs-plain-wordmark colored"></i>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-3 ms-md-auto">
                            <i style={styles.icon} className="devicon-mongodb-plain-wordmark colored"></i>


                        </div>
                        <div className="col-md-3 ms-md-auto">
                            <i style={styles.icon} className="devicon-mysql-plain-wordmark colored"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-auto me-auto">
                            <i style={styles.icon} className="devicon-express-original-wordmark colored"></i>

                        </div>
                        <div className="col-auto">
                            <i style={styles.icon} className="devicon-graphql-plain-wordmark colored"></i>

                        </div>
                    </div>
                </div>
            
            </div>
            
            
        </div>

    )
}

export default Skills;