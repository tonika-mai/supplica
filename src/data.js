import CremaScampi from "./imgs/risotto-crema-scampi_cropped.jpg";
import FunghiTartufo from "./imgs/funghi-tartufo_cropped.jpg";
import MortadellaPistacchio from "./imgs/mortadella-pistacchio_cropped.jpg";
import Parmigiana from "./imgs/parmigiana-di-melanzane_cropped.jpg";
import Pomodoro from "./imgs/pomodoro_cropped.jpg";
import CozzePatate from "./imgs/cozze-patate_cropped.jpg";
import GamberiZucchine from "./imgs/gamberi-zucchine_cropped.jpg";
import Nduja from "./imgs/nduja_cropped.jpg";
import PereTaleggio from "./imgs/pere-taleggio_cropped.jpg";
import SuppliTelefono from "./imgs/supplì-telefono_square.jpg";
import Truck from "./imgs/foodTruck_orange_square.jpg";
import Tracking from "./imgs/tracking_square.jpg";

const elencoGusti = [
    {
        id: 1,
        title: "Crema di Scampi",
        url: CremaScampi
    },

    {
        id: 2,
        title: "Funghi & Tartufo ",
        url: FunghiTartufo
    },

    {
        id: 3,
        title: "Mortadella & Pistacchio",
        url: MortadellaPistacchio
    },

    {
        id: 4,
        title: "Parmigiana di Melanzane",
        url: Parmigiana
    },

    {
        id: 5,
        title: "Pomodoro & Basilico",
        url: Pomodoro
    },

    {
        id: 6,
        title: "Cozze & Patate",
        url: CozzePatate
    },

    {
        id: 7,
        title: "Gamberi & Zucchine",
        url: GamberiZucchine
    },

    {
        id: 8,
        title: "'Nduja",
        url: Nduja
    },

    {
        id: 9,
        title: "Pere, Taleggio & Noci",
        url: PereTaleggio
    }
];

const presentazione = {
    id: "navPresentazione",
    class: "presentazione",
    url: SuppliTelefono,
    title: "Supplì al telefono",
    text: 'Il supplì è un delizioso frittino di origine romana ripieno di riso al sugo di carne e con un bel tocchetto di mozzarella al centro. Dividendolo a metà, le due parti restano unite dai fili di mozzarella - ecco perché lo chiamiamo "supplì al telefono"! Il primo supplì di cui abbiamo testimonianza scritta risale almeno al 1847: da Supplìca potrai assaporarlo secondo la ricetta originale o provare tutte le nostre sfiziosissime varianti!',
    h2: "Pronto? Supplì al telefono!"
};

const onTheRoad = {
    id: "navOnTheRoad",
    class: "onTheRoad",
    url: Truck,
    title: "Supplìcar: il nostro food truck",
    text: "Non hai modo di venirci a trovare nella nostra sede centrale, ma proprio non vuoi rinunciare a un bel supplì filante? Non c'è problema: ci incontriamo a metà strada! Il SupplìCar è un food truck di ultima generazione che porta il nostro frittino in giro per la città. Ogni giorno ci troverai in un punto strategico diverso. Controlla dove siamo e vieni a fare un salto!",
    h2: "Il supplì On The Road"
};

const trackTheTruck = {
    id: "navTrackTheTruck",
    class: "trackTheTruck",
    url: Tracking,
    title: "Location tracking",
    text: "In questa sezione, quando Supplìcar sarà in servizio, potrai monitorarne la posizione in tempo reale. Le nostre zone preferite includono: Piazza Trilussa, Testaccio, Ponte Milvio, Garbatella, Stadio Olimpico, Circo Massimo e tante altre. Ancora troppo lontani? Proponici tu una tappa e cercheremo di accontentarti!",
    h2: "Track the Truck!"
};

export { elencoGusti, presentazione, onTheRoad, trackTheTruck };