import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';
function Page() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
        <header className="text-gray-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border-b">
  <CiSearch className='mx-40'/>
   
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center gap-300 text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      
      <span className="ml-80 text-xl  " >Avion</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
    <Link className='text-xs mr-2' href={"/about"}>about</Link>
    <Link className='text-xs mr-2' href={"/productlisting"}>Products</Link>
    <Link href={"/cart"}><CiShoppingCart className='mx-10'  / ></Link>
    
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





      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Your shopping cart</h1>
        <div className="border-b border-gray-300 pb-4 mb-4">
          {/* Product Table Header */}
          <div className="grid grid-cols-3 gap-4 text-gray-500 text-sm uppercase font-semibold">
            <div>Product</div>
            <div className="text-center">Quantity</div>
            <div className="text-right">Total</div>
          </div>
        </div>
        {/* Product Items */}
        <div className="space-y-4">
          {/* Graystone Vase */}
          <div className="grid grid-cols-3 items-center gap-4">
            <div className="flex items-center space-x-4">
              <img
                src="/photo1.png"
                alt="Graystone vase"
                className="w-16 h-16 rounded object-cover"
              />
              <div>
                <h2 className="font-semibold text-gray-800">Graystone vase</h2>
                <p className="text-sm text-gray-500">
                  A timeless ceramic vase with a tri-color grey glaze.
                </p>
                <p className="text-gray-800 font-semibold mt-1">£85</p>
              </div>
            </div>
            <div className="text-center">
              <button className="px-2 text-gray-500">-</button>
              <span className="px-4">1</span>
              <button className="px-2 text-gray-500">+</button>
            </div>
            <div className="text-right text-gray-800 font-semibold">£85</div>
          </div>
          {/* Basic White Vase */}
          <div className="grid grid-cols-3 items-center gap-4">
            <div className="flex items-center space-x-4">
              <img
                src="/photo2.png"
                alt="Basic white vase"
                className="w-16 h-16 rounded object-cover"
              />
              <div>
                <h2 className="font-semibold text-gray-800">Basic white vase</h2>
                <p className="text-sm text-gray-500">
                  Beautiful and simple, this is one for the classics.
                </p>
                <p className="text-gray-800 font-semibold mt-1">£125</p>
              </div>
            </div>
            <div className="text-center">
              <button className="px-2 text-gray-500">-</button>
              <span className="px-4">1</span>
              <button className="px-2 text-gray-500">+</button>
            </div>
            <div className="text-right text-gray-800 font-semibold">£125</div>
          </div>
        </div>
        {/* Subtotal */}
        <div className="border-t border-gray-300 mt-6 pt-4">
          <div className="flex justify-between text-gray-800 text-lg font-semibold">
            <span>Subtotal</span>
            <span>£210</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Taxes and shipping are calculated at checkout
          </p>
          <button className="mt-6 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700">
            Go to checkout
          </button>
        </div>
      </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      <footer className="bg-indigo-900 text-white py-8">
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

export default Page