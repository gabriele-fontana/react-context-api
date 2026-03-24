import { Link } from "react-router-dom"
import AppNavbar from "../components/AppNavbar"

export default function Homepage() {



    return(
        <>
            
            <header className="py-5" id='heroSection'>
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-7">
                            <div className="my-5 text-center">
                                <h1 className="display-3 fw-bold mb-2">Benvenuti nel nostro Store</h1>
                                <p className="lead mb-4">
                                    Scopri la nostra selezione esclusiva di prodotti pensati per te.
                                    Qualità garantita e spedizione rapida.
                                </p>
                                <div className="gap-3 d-sm-flex justify-content-sm-center">
                                    <Link to="/products" className="btn btn-lg px-4 fw-bold" id='btn'>
                                        Start Shopping
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* ADD REVIEWS SECTION */}
            <section id="reviews">
                <div className="container p-5">
                    <div className="text-center mb-5">
                        <h2 className="fw-bolder">Cosa dicono i nostri clienti</h2>
                        <p className="lead text-muted mb-0">La tua fiducia è il nostro traguardo</p>
                    </div>
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <div className="card-body p-4">
                                    <div className="text-warning mb-2">★★★★★</div>
                                    <p className="card-text mb-4">"Prodotti fantastici e consegna puntuale. Ricomprerò sicuramente!"</p>
                                    <div className="small text-muted">- Jack Sparrow</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <div className="card-body p-4">
                                    <div className="text-warning mb-2">★★★★★</div>
                                    <p className="card-text mb-4">"Servizio clienti impeccabile, mi hanno aiutato a scegliere il modello giusto."</p>
                                    <div className="small text-muted">- Zaphod Beeblebrox</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <div className="card-body p-4">
                                    <div className="text-warning mb-2">★★★★☆</div>
                                    <p className="card-text mb-4">"Ottimo rapporto qualità-prezzo. Il sito è molto intuitivo."</p>
                                    <div className="small text-muted">- John M. Dorian</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )



}