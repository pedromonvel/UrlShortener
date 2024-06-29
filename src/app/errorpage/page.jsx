import "./errorpage.css"
import InputSection from "../../../components/input"

export const metadata = {
    title: "Invalid URL",
}

export default function InvalidUrlPage () {
    return <>
        <section className="warning-section">
            <div>
                <img src="/images/advertencia.png" alt="image" />
            </div>

            <h1>UPS! el link no es valido</h1>
            <p>Escribe un URL valido a continuacion:</p>
            <InputSection/>
        </section>
    </>
}