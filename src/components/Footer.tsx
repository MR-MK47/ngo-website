import Link from "next/link";
import { 
  FacebookIcon, 
  InstagramIcon, 
  TwitterIcon, 
  YoutubeIcon, 
  LinkedinIcon 
} from "@/components/icons";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#eeeeee] px-[4%] py-[40px] text-[14px] text-black font-[family-name:var(--font-montserrat)]">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Info Column */}
          <div className="flex flex-col">
            <h2 className="text-[18px] font-bold text-[#0E6119] mb-[15px]">
              CreateTogetherFoundation
            </h2>
            <div className="flex flex-col gap-[8px] text-[#333333]">
              <p>
                Om Sainath Co-Op Hsg Society Ltd, Flat No-1:3, Building No- A-4
                Sector- 10, Kalamboli, Navi Mumbai, Maharashtra 410218
              </p>
              <p>+91 8898477016</p>
              <p>createtogetherfoundation@gmail.com</p>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col">
            <Link href="/blog" className="block my-[8px] text-[#333333] hover:text-[#0E6119] transition-colors duration-300">News</Link>
            <Link href="/projects" className="block my-[8px] text-[#333333] hover:text-[#0E6119] transition-colors duration-300">Intern</Link>
            <Link href="/about-us-1" className="block my-[8px] text-[#333333] hover:text-[#0E6119] transition-colors duration-300">Team</Link>
            <Link href="/about-us-1" className="block my-[8px] text-[#333333] hover:text-[#0E6119] transition-colors duration-300">Contact us</Link>
            <Link href="/about-us-1" className="block my-[8px] text-[#333333] hover:text-[#0E6119] transition-colors duration-300">About us</Link>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col">
            <Link href="/csr" className="block my-[8px] text-[#333333] hover:text-[#0E6119] transition-colors duration-300">CSR</Link>
            <Link href="/donate" className="block my-[8px] text-[#333333] hover:text-[#0E6119] transition-colors duration-300">DONATE</Link>
            <Link href="/permanent-project" className="block my-[8px] text-[#333333] hover:text-[#0E6119] transition-colors duration-300">JOIN US</Link>
          </div>

          {/* Social Column */}
          <div className="flex flex-col">
            <p className="text-[18px] font-bold text-[#0E6119] mb-[15px]">Connect with us</p>
            <div className="flex gap-[15px]">
              <Link href="#" className="text-[#0E6119] hover:opacity-80 transition-opacity" aria-label="Facebook">
                <FacebookIcon className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-[#0E6119] hover:opacity-80 transition-opacity" aria-label="Instagram">
                <InstagramIcon className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-[#0E6119] hover:opacity-80 transition-opacity" aria-label="Twitter">
                <TwitterIcon className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-[#0E6119] hover:opacity-80 transition-opacity" aria-label="Youtube">
                <YoutubeIcon className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-[#0E6119] hover:opacity-80 transition-opacity" aria-label="Linkedin">
                <LinkedinIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-[40px] pt-[20px] flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left border-t border-[#eeeeee]">
          <p>Copyright CreateTogether Foundation All Rights Reserved</p>
          <p>Created by Ravi Verma</p>
        </div>
      </div>
    </footer>
  );
}
