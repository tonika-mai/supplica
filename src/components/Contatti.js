import React from "react";

export default function Contatti() {

    function handleSubmit(event) {
        event.preventDefault();
        alert("Grazie di averci contattato! Un operatore le risponderà entro 24 ore.");
    };

    return (
        <section className="contattiSection" id="navContatti">
            <address>
                <h2>Supplìca!</h2>
                <p id="sede">Sede centrale:<br />
                    <span>Piazza Campo de' Fiori, 44<br />
                00186 - Roma</span></p>
                <p id="tel">Telefono:<br />
                    <span>06 64.222.418</span></p>
                <p id="orari">Orari:<br />
                    <span>lun - gio <br /> 12:00 - 15:00, 18:00 - 23:00<br />
                ven - dom <br /> 12:00 - 15:00, 17:30 - 00:30</span></p>
            </address>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d742.4679337687755!2d12.471988288086585!3d41.895615496963345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f604f5feaec67%3A0xe8ec245d86ad6874!2sPiazza%20Campo%20de&#39;%20Fiori%2C%2044%2C%2000186%20Roma%20RM!5e0!3m2!1sit!2sit!4v1597823845186!5m2!1sit!2sit"
                width="400"
                height="440"
                frameBorder="0"
                style={{ border: 0 }} allowFullScreen="" aria-hidden="false"
                tabIndex="0"
                title="shop location"
                className="shopMap"></iframe>
            <form onSubmit={handleSubmit}>
                <p>Invia un'email a <span>info@supplica.it</span> oppure compila il form qui sotto:</p>
                <input type="text"
                    name="nome"
                    placeholder="Nome..." />
                <input type="email"
                    name="email"
                    placeholder="Email..." />
                <input type="tel"
                    name="telefono"
                    placeholder="Telefono..." />
                <input type="text"
                    name="oggetto"
                    placeholder="Oggetto..." />
                <textarea name="messaggio"
                    placeholder="Messaggio..."
                    required></textarea>
                <button>Invia!</button>
            </form>
        </section>
    )
}