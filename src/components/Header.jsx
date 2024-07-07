import logoImg from "./../assets/investment-calculator-logo.png"

export default function Header() {

    return (
        <div id="header">
            <img src={logoImg} alt="" />
            <h1>Rohit's Investment Calculator</h1>
        </div>
    )

}