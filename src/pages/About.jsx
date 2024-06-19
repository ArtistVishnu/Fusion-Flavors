import React from 'react';
import './About.css';
import AboutChef1 from '../utils/img/about-chef1.jpg';
import AboutChef2 from '../utils/img/about-chef2.jpg';
import { ImageGallery } from '../components/ImageGallery';


function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>About</h1>
                </div>
            </header>

            <div className='container my-5'>
                <p>At Fusion Flavors, we use the finest ingredients to bring you a unique and tantalizing journey for your taste buds. Join us and discover the art of fusion, where every bite is a celebration of global cuisine.</p>
                <p>Our talented chefs are passionate about blending flavors, techniques, and ingredients from around the world to craft dishes that are both innovative and delicious. Whether it's an Asian-inspired pasta, a Latin American spiced seafood dish, or a dessert with a Mediterranean twist, every item on our menu is designed to surprise and delight your palate.</p>

                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt="" />
                    </div>
                </div>

                <p></p>
            </div>

            <div className='bg-dark text-light'>
                <ImageGallery />
            </div>
        </div>
    )
}

export default About;