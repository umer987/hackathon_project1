import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';
function About() {
  return (
    <header className="text-gray-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border-b">
  <CiSearch className='mx-40'/>
   
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center gap-300 text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      
      <span className="ml-80 text-xl  " >Avion</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
    <CiShoppingCart className='mx-10'/ >
    <CgProfile />

    </div>
    
  </div>
  <div className='items-centre text-xs font-small w-100% mt-3'>
    <nav className="ml-30 md:mr-auto flex flex-wrap text-xs items-center  justify-center">
    <a className="mr-5 hover:text-gray-900" href='/productlisting'>All Products</a>
      <a className="mr-5 hover:text-gray-900">Plant Ports</a>
      <a className="mr-5 hover:text-gray-900">Ceramics</a>
      <a className="mr-5 hover:text-gray-900">Tables</a>
      <a className="mr-5 hover:text-gray-900">Chairs</a>
      <a className="mr-5 hover:text-gray-900">Crocary</a>
      <a className="mr-5 hover:text-gray-900">Tableware</a>
      <a className="mr-5 hover:text-gray-900">Cutlary</a>
    </nav>
    </div>
    <div className="h-60 mt-3 bg-gray-50 flex flex-col justify-center items-center">
      <div className="container mx-auto mt-12 px-4">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <p className="text-xl md:text-2xl font-light text-gray-800 max-w-2xl text-center md:text-left">
            A brand built on the love of craftsmanship, quality and outstanding customer service
          </p>
          <button  className="mt-4 mr-28 md:mt-0 px-6 py-3 bg-gray-100 text-gray-800 rounded shadow-md hover:shadow-lg" >
          <Link href={"/productlisting"}>view our all products</Link>
          </button>
        </div>
        </div>
        </div>

        <div>
        <section className="text-gray-600 body-font mx-auto flex mt-5 md:flex-row flex-col items-center">
  <div className="container mx-auto flex mt-5 md:flex-row flex-col h-72 py-56  items-center bg-purple-900">
    <div className=" lg:flex-grow h-full md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 container items-center text-center bg-purple-900 ">
      <h1 className="-mt-36 title-font ml-20 sm:text-4xl text-3xl  font-medium text-white">
      The furniture brand for the future, 
        <br className="hidden lg:inline-block" />
        with timeless designs
      </h1>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-gray-800 ml-20 border-0 py-2 px-6 focus:outline-none my-6 hover:bg-indigo-600 rounded text-lg">
          View Collection
        </button>
        
      </div>
      <p className="mb-40 leading-relaxed ml-20 text-white">
      A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.
      </p>
      
    </div>
   
  </div>
  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
     
    
     <img
       className="object-cover ml-4 object-center rounded"
       alt="/herophoto.png"  src="/yell.png"
     />
   
   </div>







   
</section>




<div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-lg shadow-md mb-16">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="/touch.png"
              alt="Service example"
              className="w-full h-80 rounded-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Our service isn’t just personal, it’s actually hyper personally exquisite
            </h2>
            <p className="text-gray-600 mb-4">
              When we started Avion, the idea was simple: Make high-quality furniture affordable and available for the mass market.
            </p>
            <p className="text-gray-600 mb-8">
              Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique becomes the hotbed for the London interior design community.
            </p>
            <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded shadow-md hover:shadow-lg">
              Get in touch
            </button>
          </div>
        </div>




    </div>

    <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-12">
          What makes our brand different
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-indigo-600 text-4xl mb-4">
              <i className="fas fa-shipping-fast"></i> {/* Example icon */}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Next day as standard</h3>
            <p className="text-gray-600">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-indigo-600 text-4xl mb-4">
              <i className="fas fa-hand-holding-heart"></i> {/* Example icon */}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Made by true artisans</h3>
            <p className="text-gray-600">
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-indigo-600 text-4xl mb-4">
              <i className="fas fa-tags"></i> {/* Example icon */}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Unbeatable prices</h3>
            <p className="text-gray-600">
              For our materials and quality you won’t find better prices anywhere.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-indigo-600 text-4xl mb-4">
              <i className="fas fa-recycle"></i> {/* Example icon */}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Recycled packaging</h3>
            <p className="text-gray-600">
              We use 100% recycled packaging to ensure our footprint is manageable.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-16 items-center h-32 bg-gray-50">
      <div className="text-center p-6 w- bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Join the club and get the benefits
        </h1>
        <p className="text-gray-600 mb-6">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
        </p>
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 p-3 focus:outline-none text-gray-700"
          />
          <button className="px-5 py-3 bg-gray-800 text-white font-medium hover:bg-indigo-700">
            Sign up
          </button>
        </div>
      </div>
    </div>


    <footer className="bg-indigo-900 text-white mt-16 py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Menu Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li>New arrivals</li>
            <li>Best sellers</li>
            <li>Recently viewed</li>
            <li>Popular this week</li>
            <li>All products</li>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
          </ul>
        </div>

        {/* Our Company Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our company</h3>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Returns policy</li>
          </ul>
        </div>

        {/* Join Our Mailing List Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Join our mailing list</h3>
          <div className="flex border border-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 bg-transparent text-sm text-white placeholder-gray-300 focus:outline-none"
            />
            <button className="px-4 py-2 bg-white text-indigo-900 font-medium text-sm">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>Copyright © 2022 Avion LTD</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Replace `#` with the appropriate links */}
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>
    </footer>


</header>






  )
}

export default About