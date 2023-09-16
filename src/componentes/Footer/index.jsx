import "./footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "URL(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://www.aluracursos.com">
                <img src="img/facebook.png" alt="facebook" />
            </a>
            <a href="https://www.aluracursos.com">
                <img src="img/instagram.png" alt="Instagram"/>
            </a>
            <a href="https://www.aluracursos.com">
                <img src="img/twitter.png" alt="twitter" />
            </a>
        </div>
        <img src="img/Logo.png" alt="logo" />
        <strong>Desarrollado por WillRebirth</strong>

    </footer>
}

export default Footer