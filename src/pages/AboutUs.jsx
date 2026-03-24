import AppNavbar from "../components/AppNavbar"





export default function AboutUs() {



    return (
        <>
            
            {/* page header */}
            <section className="py-5 bg-dark text-white text-center">
                <div className="container">
                    <h1 className="display-4 fw-bold">La Nostra Storia</h1>
                    <p className="lead">Passione, qualità e trasparenza dal 2001</p>
                </div>
            </section>

            {/* mission section */}
            <section className="py-5" id="missionSection">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img
                                src="../src/assets/our-team.jpg"
                                alt="Il nostro team"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                        <div className="col-md-6">
                            <h2 className="fw-bold mb-3">Perché abbiamo iniziato</h2>
                            <p className="text-muted">
                                Tutto è nato da un'idea semplice: rendere accessibili a tutti prodotti di alta qualità
                                senza compromessi. Crediamo che ogni acquisto debba essere un'esperienza positiva.
                            </p>
                            <p className="text-muted">
                                Oggi serviamo migliaia di clienti, mantenendo sempre lo stesso spirito artigianale
                                e l'attenzione ai dettagli degli inizi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values section */}
            <section className="py-5 bg-light" id="valuesSection">
                <div className="container text-center">
                    <h2 className="mb-5 fw-bold">I nostri valori</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="p-3">
                                <i className="bi bi-shield-check display-4"></i>
                                <h4 className="mt-3">Affidabilità</h4>
                                <p className="text-muted">Selezioniamo solo il meglio per i nostri clienti.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3">
                                <i className="bi bi-truck display-4"></i>
                                <h4 className="mt-3">Sostenibilità</h4>
                                <p className="text-muted">Spedizioni eco-friendly e packaging riciclabile.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3">
                                <i className="bi bi-heart display-4"></i>
                                <h4 className="mt-3">Passione</h4>
                                <p className="text-muted">Amiamo quello che facciamo e si vede.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )



}