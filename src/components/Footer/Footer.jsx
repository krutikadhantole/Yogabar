import React from "react";
import Logo from "../../assets/logo.png";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#D7336C] text-white px-6 py-10 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Column 1: About */}
        <div>
          <img src={Logo} alt="YogaBar Logo" className="w-20 mb-4" />
          <p className="text-sm leading-relaxed">
            WE’RE A NUTRITION-LED FOOD COMPANY THAT PRIDES ITSELF IN MAKING
            LIP-SMACKING FOOD THAT’S GOOD FOR YOU. ALL WITHOUT ANY ARTIFICIAL
            COLOURS, CHEMICALS OR PRESERVATIVES. IYKYK.
            <br />
            AND IF YOU DON’T, WHAT ARE YOU WAITING FOR? GO ON AND TRY SOME!
          </p>

          <div className="flex space-x-4 mt-6">
            <a href="#" className="bg-[#FDECE6] text-[#D7336C] p-3 rounded-md">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="bg-[#FDECE6] text-[#D7336C] p-3 rounded-md">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="bg-[#FDECE6] text-[#D7336C] p-3 rounded-md">
              <FaFacebookF size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Shop */}
        <div>
          <h3 className="font-bold text-lg mb-4 ">SHOP</h3>
          <ul className="space-y-2">
            <li>
              <a href="#">All Products</a>
            </li>
            <li>
              <a href="#">New Launches & Offers</a>
            </li>
            <li>
              <a href="#">Protein</a>
            </li>
            <li>
              <a href="#">Breakfast</a>
            </li>
            <li>
              <a href="#">Muesli</a>
            </li>
            <li>
              <a href="#">Bars</a>
            </li>
            <li>
              <a href="#">YogaBaby</a>
            </li>
            <li>
              <a href="#">Dry Fruits & Seeds</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 ">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li>
              <a href="#">Shipping & Delivery</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">CONTACT US</h3>
          <p>PH: +91 9606030616</p>
          <p className="my-2">
            We are available Monday to Saturday; 10 AM – 6:00 PM.
          </p>
          <p>
            Email: <a href="mailto:hello@yogabars.in">hello@yogabars.in</a>
          </p>
          <p className="mt-2">We try to respond within 48 hours.</p>
        </div>
      </div>

      <hr className="my-6 border-t border-white/30" />

      {/* Bottom tagline */}
      <p className="text-center text-sm">
        Who needs a magic wand when you've got our protein bars? They’ll turn
        your cravings into happy little lettuce leaves. Poof! 🪄✨
      </p>

      <hr className="my-6 border-t border-white/30" />
      <p className="text-center text-sm">© 2025, Yoga Bars</p>
    </footer>
  );
};

export default Footer;
