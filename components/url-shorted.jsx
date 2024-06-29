import Button from "./button"
import Link from "next/link"
import "./url-shorted.css"

export default function UrlShortedSection () {
    return <>
        <section className="urlshorted-section">
            <Link href="https://encr.pw/fK6Bp" className="urlshorted-link" >https://urlshrt.co/jRi9d</Link>
            <Button 
                className="urlshorted-button"
                text="Copy Link"
            />
        </section>
    </>
}