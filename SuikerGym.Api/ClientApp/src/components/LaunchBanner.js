
import { HashLink } from "react-router-hash-link";

export default function LaunchBanner({ buttonLink = "#aanmelden" }) {
  return (
    <div className="launch-banner">
      <div className="launch-banner-content">
        <span className="launch-badge">🎉 Nieuwe groep</span>

        <p>
          De Breakfast Club start op <strong>maandag 31 augustus</strong>. Er
          zijn slechts <strong>10 introductieplekken</strong>
          beschikbaar.
        </p>

        <HashLink
  smooth
  to="/breakfast-club#aanmelden"
  className="launch-button"
>
  Reserveer jouw plek
</HashLink>
      </div>
    </div>
  );
}
