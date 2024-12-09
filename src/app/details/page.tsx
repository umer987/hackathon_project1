import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';
function Details() {
  return (
    <div className='bg-indigo-900 w-full h-8'>
      <div className=''>
     <p className='text-white text-center '> Free delivery on all orders over £50 with code easter checkout</p>
     <p className='text-white text-right -mt-5 '>X</p>
     </div>
     <header className="text-gray-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border-b">
  <CiSearch className='mx-40'/>
   
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center gap-300 text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      
      <span className="ml-80 text-xl  " >Avion</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
    <Link  className='text-xs mr-2' href={"/about"}>about</Link>
    <Link className='text-xs mr-2' href={"/productlisitng"}>Products</Link>
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
</header>

<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 h-96 mx-auto flex flex-wrap">
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src="/ImageLeft.png"
      />
      <div className="lg:w-1/2 w-full lg:pl-10 mt-14 lg:py-6  lg:mt-0">
       
        <h1 className="text-gray-900 text-3xl mt-10 title-font font-medium mb-1">
          The Dany Chair
        </h1>
        <span className="title-font font-medium text-2xl text-gray-900">
            $58.00
          </span>
        
        <p className="leading-relaxed">
        A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
        </p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Dimension</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          
          <button className="flex ml-auto text-white bg-indigo-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
          Add To Cart
          </button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
           
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>








    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">New Ceramics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <img
              src="/photo-1.png"
              alt="The Dandy chair"
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-left">The Dandy chair</h3>
            <p className="text-gray-600 text-left" >£250</p>
          </div>
          <div className="text-center">
            <img
              src="photo-2.png"
              alt="Rustic Vase Set"
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-lg text-left font-semibold">Rustic Vase Set</h3>
            <p className="text-gray-600 text-left">£155</p>
          </div>
          <div className="text-center">
            <img
              src="photo-3.png"
              alt="The Silky Vase"
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-left">The Silky Vase</h3>
            <p className="text-gray-600 text-left">£125</p>
          </div>
          <div className="text-center">
            <img
              src="photo.png"
              alt="The Lucy Lamp"
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-lg text-left font-semibold">The Lucy Lamp</h3>
            <p className="text-gray-600 text-left">£399</p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button >
            View collection
          </button>
        </div>
      </div>
    </div>





    <section className="bg-white py-16">
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
    </section>


    <div className="flex justify-center items-center h-32 mt-24 bg-gray-50">
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

    <footer className="bg-indigo-900 mt-28 text-white py-8">
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

    </div>
  )
}

export default Details