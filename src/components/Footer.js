import React from "react";

const FooterPage = () => {
  return (
    <footer className="footer">
    <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
        <span> About the project</span> This project is a practical part of my thesis work to demonstrate 
        a simple web application which consume REST API in which i used the API endpoints from <a href="https://api.themoviedb.org/">themovieDB </a>
        the tech stack i used to build this website are  ReactJS, JavaScript, HTML and CSS.  </p>
        <div className="icons">
        <a href="https://www.linkedin.com/in/valentine-onah/"><i className="fa fa-facebook"></i></a>
        <a href="https://www.linkedin.com/in/valentine-onah/"><i className="fa fa-twitter"></i></a>
        <a href="https://www.linkedin.com/in/valentine-onah/"><i className="fa fa-linkedin"></i></a>
        <a href="https://www.linkedin.com/in/valentine-onah/"><i className="fa fa-google-plus"></i></a>
        <a href="https://www.linkedin.com/in/valentine-onah/"><i className="fa fa-instagram"></i></a>
        </div>
    </div>
    <div className="footer-center col-md-4 col-sm-6">
        <div>
        <i className="fa fa-map-marker"></i>
        <p><span> Street name and number</span> Warsaw, Poland</p>
        </div>
        <div>
        <i className="fa fa-phone"></i>
        <p> (+00) 0000 000 000</p>
        </div>
        <div>
        <i className="fa fa-envelope"></i>
        <p><a href="https://www.linkedin.com/in/valentine-onah/"> valentineonah1@gmail.com</a></p>
        </div>
    </div>
    <div className="footer-right col-md-4 col-sm-6">
        <h2> Company<span> logo</span></h2>
        <p className="menu">
        <a href="https://www.linkedin.com/in/valentine-onah/"> Home</a> |  
        <a href="https://www.linkedin.com/in/valentine-onah/"> About </a> | 
        <a href="https://www.linkedin.com/in/valentine-onah/"> Services</a> | 
        <a href="https://codepen.io/ValentineOnah/full/BajaVar"> Portfolio</a> | 
        <a href="https://www.linkedin.com/in/valentine-onah/"> News</a> | 
        <a href="https://www.linkedin.com/in/valentine-onah/"> Contact</a>
        </p>
        <p className="name"> University project &copy; 2022</p>
    </div>
    </footer>
  );
}

export default FooterPage;