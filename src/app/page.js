
import Button from "../../components/button"
import UrlShortedSection from "../../components/url-shorted"

export default function Page() {
  return  <>
    <h1>URLShrt</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div>
        <input type="url" placeholder={"Enter the link here..."}/><Button />
    </div>
    <UrlShortedSection/>
  </>
}
  
