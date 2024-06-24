import Button from "./button"
import Link from "next/link"

export default function UrlShortedSection () {
    return <>
        <Link href="https://encr.pw/fK6Bp" >https://encr.pw/fK6Bp</Link>
        <Button 
        text="Copy Link"
        style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', margin: '5px' }} 
        />
    </>
}