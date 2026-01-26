import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const Header = () => (
  <div className="header flex-col flex md:flex-row bg-white rounded-b-lg border-b-2 border-white flex-1 p-4 gap-8">
    <div className="flex">
      <div className="flex flex-col gap-2 text-black">
        <h1 className="lg:text-3xl md:text-xl mr-auto text-xl uppercase font-semibold text-black">
          Ajay Amala Chandran A
        </h1>
        <div className="text-lg">Software Engineer</div>
        <div className="text-sm">
          React.js | Next.js | Node.js | NestJS | PostgreSQL | TypeScript | Web
          Development
        </div>
        {/* <Link
          className="text-sm underline text-black"
          href={"https://ak-ajith-portfolio.vercel.app/"}
          target="_blank"
        >
          https://ak-ajith-portfolio.vercel.app/
        </Link> */}
      </div>
    </div>
    <div className="flex flex-col gap-3 items-start md:items-end flex-1 text-black text-sm">
      <a
        href="mailto:official.ajith171995@gmail.com"
        className="flex items-center gap-2"
      >
        <FontAwesomeIcon icon={faEnvelope} />
        <span>ajayamalachandran@gmail.com</span>
      </a>
      <a
        href="https://www.linkedin.com/in/ajay-amal-95554912a/"
        className="flex items-center gap-2"
      >
        <FontAwesomeIcon icon={faLinkedin} />
        <span>linkedin.com/in/ajay-amal-95554912a</span>
      </a>
      <a
        href="https://github.com/ajayamal"
        className="flex items-center gap-2"
      >
        <FontAwesomeIcon icon={faGithub} />
        <span>github.com/ajayamal</span>
      </a>
      <a href="tel:+918754789957" className="flex items-center gap-2">
        <FontAwesomeIcon icon={faPhone} />
        <span>+91 959 757 1559</span>
      </a>
    </div>
  </div>
);
