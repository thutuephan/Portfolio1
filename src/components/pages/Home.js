import React from "react";

const styles = {
    
    marginTop: '0px',
    width:'100%',
    height: '100%',
    backgroundImage:`url('https://images.pexels.com/photos/2088170/pexels-photo-2088170.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-2088170.jpg&fm=jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
    

}

function Home() {
    return (
        
        <div className="home">
            <div className="home container-fluid" style={{marginTop:'50px'}} style={styles}>
                <h1 style={{textAlign:'center'}}>
                    Thu Phan
                </h1>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h3 style={{textAlign:'center'}}>Software Developer</h3>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                

            </div>
        </div>
            
            
        
    )
}

export default Home
