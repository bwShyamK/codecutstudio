import {
  FaDiscord,
  FaTwitter,
  FaYoutube,
  FaMedium,
  FaLinkedin,
} from 'react-icons/fa'

const socialLinks = [
  { href: 'https://discord.gg/VZXuMMzNB3', icon: <FaDiscord /> },
  { href: 'https://x.com/usevelto', icon: <FaTwitter /> },
  { href: 'https://www.linkedin.com/company/usevelto/', icon: <FaLinkedin /> },
]

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          @codecutstudio by VELTO {new Date().getFullYear()} All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
