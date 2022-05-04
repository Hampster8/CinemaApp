import React from 'react';
import { GitHubSVG } from '../styles/global.styles';

const AboutPage = () => {
    return (
            <div style={styles.text}>
                <h1>Hi!</h1>
                <p>We are five students at Högskolan Kristianstad who decided upon creating a Cinema App for educational purposes. <br/><br/>
                
                <b>Created by:</b><br/><br/>
                <a style={styles.text} href="https://github.com/Waveya" target="_blank">Linnéa Svensson</a><br/>
                <a style={styles.text} href="https://github.com/dtrix90" target="_blank">Dominique Ghaffari</a><br/>
                <a style={styles.text} href="https://github.com/jvighagen" target="_blank">Jens Vighagen</a><br/>
                <a style={styles.text} href="https://github.com/OsvarK" target="_blank">Oscar Karlsson</a><br/>
                <a style={styles.text} href="https://github.com/Hampster8" target="_blank">Hampus Andersson</a><br/>
                </p>
                <b>Link to Project:</b>
                <div style={{ height: 30, margin: 0, padding: 0}}><a href="https://github.com/Hampster8/CinemaApp" target="_blank"><GitHubSVG /></a></div>
            </div>
    );
}

const styles = {
    text: {
        color: 'white'
    }


}

export default AboutPage;