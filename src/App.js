import React from "react";
import {  Route, Routes, RouterProvider,createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import Form from "./Form";
import Services from "./Services";
import Home from "./Home";
import Layout from "./Layout";
import Information from "./Information";
import Error from "./Error";
import Component from "./Component";
import Product from "./Product";
import About from "./About";
import ScrollToTop from "./ScrollToTop";

const router = createBrowserRouter(createRoutesFromElements(
      
  
  
     <Route path="/" element={<ScrollToTop/>} >
        
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>} />
    <Route path="/:id" element={<Information/>} />
   </Route>
  
 
    <Route element={<Component/>}>
     <Route path="About" element={<About/>} />
    <Route path="Services" element={<Services />} />
    <Route path="Product" element={<Product/>}/>
    </Route>
    
    <Route path="form" element={<Form/>} />
    
    <Route path="*" element={<Error/>} />
    </Route>
))




function App () {

    return(
        
    <RouterProvider router={router} />  
    )
}


export default App ;