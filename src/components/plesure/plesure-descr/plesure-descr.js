import './plesure-descr.css';
import beansimg from "./img/plesure.png";
import beansLogo from "./img/beans-logo.png"

const PlesureDescr = () => {
    return (
        <div className="beans">
            <img src={beansimg} alt="beans" />
            <div className="beans-descr">
                <h2>About our goods</h2>
                <img src={beansLogo} alt="logo" />
                <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br /><br />

                Afraid at highly months do things on at. Situation recommend objection do intention<br />
                so questions. <br />
                As greatly removed calling pleased improve an. Last ask him cold feel<br />
                met spot shy want. Children me laughing we prospect answered followed. At it went<br />
                is song that held help face.</p>
            </div>
        </div>
    )
}

export default PlesureDescr;