import Button from "./button"
import Link from "next/link"
import "./url-shorted.css"

export default function UrlShortedSection ({shortenedUrl}) {
    return( 
        <>
            <section className="urlshorted-section">
                <Link href={shortenedUrl} className="urlshorted-link" >{shortenedUrl}</Link>
                <Button 
                    className="urlshorted-button"
                    text="Copy Link"
                />
            </section>
        </>
    )
}