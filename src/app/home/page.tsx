"use client";
import React from 'react'
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/footer';
import ProductList from '../../../components/productList';

function page() {
  return (
    <>
        <Navbar />
         <h1 className="text-2xl font-bold m-6 text-center"> Featured Products</h1>
      <ProductList />

        <Footer />
  </>
  )
}

export default page