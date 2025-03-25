import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-white py-12">
      <div className="container grid grid-cols-2 gap-8 md:grid-cols-4">
        {/* Column 1 - Home */}
        <div>
          <h3 className="mb-4 text-lg font-heading font-semibold">Home</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-sm text-muted-foreground hover:text-[#84894A]">
                O.Soetan
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-sm text-muted-foreground hover:text-[#84894A]">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-[#84894A]">
                Services
              </Link>
            </li>
            <li>
              <Link href="#interests" className="text-sm text-muted-foreground hover:text-[#84894A]">
                Interests
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 - Portfolio */}
        <div>
          <h3 className="mb-4 text-lg font-heading font-semibold">Portfolio</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-[#84894A]">
                All Projects
              </Link>
            </li>
            <li>
              <Link href="/portfolio?filter=DE" className="text-sm text-muted-foreground hover:text-[#84894A]">
                Data Engineering
              </Link>
            </li>
            <li>
              <Link href="/portfolio?filter=AE" className="text-sm text-muted-foreground hover:text-[#84894A]">
                Analytics Engineering
              </Link>
            </li>
            <li>
              <Link href="/portfolio?filter=DA" className="text-sm text-muted-foreground hover:text-[#84894A]">
                Data Analysis
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Articles */}
        <div>
          <h3 className="mb-4 text-lg font-heading font-semibold">Articles</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/articles" className="text-sm text-muted-foreground hover:text-[#84894A]">
                All Articles
              </Link>
            </li>
            <li>
              <Link href="/articles?category=IWT" className="text-sm text-muted-foreground hover:text-[#84894A]">
                IWT
              </Link>
            </li>
            <li>
              <Link href="/articles?category=ITTS" className="text-sm text-muted-foreground hover:text-[#84894A]">
                ITTS
              </Link>
            </li>
            <li>
              <Link href="/articles?category=ITTS-HIGID" className="text-sm text-muted-foreground hover:text-[#84894A]">
                ITTS-HIGID
              </Link>
            </li>
            <li>
              <Link href="/articles?category=IWT-Quotes" className="text-sm text-muted-foreground hover:text-[#84894A]">
                IWT Quotes
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h3 className="mb-4 text-lg font-heading font-semibold">Contact</h3>
          <ul className="space-y-2">
            <li className="text-sm text-muted-foreground">Anywhere the Internet is</li>
            <li className="text-sm text-muted-foreground">+1(123)-456-7890</li>
            <li className="text-sm text-muted-foreground">info@osoetan.com</li>
          </ul>

          <h3 className="mb-2 mt-6 text-lg font-heading font-semibold">Connect</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="#" className="text-muted-foreground hover:text-[#84894A]">
              <Twitter size={18} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-[#84894A]">
              <Facebook size={18} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-[#84894A]">
              <Instagram size={18} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-[#84894A]">
              <Linkedin size={18} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-[#84894A]">
              <Github size={18} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-[#84894A]">
              <Mail size={18} />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mt-8 border-t border-border/40 pt-8 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} O.Soetan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

