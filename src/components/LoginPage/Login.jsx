import React from 'react';
import "../LoginPage/Login.css"
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';

const Login = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: 'What is Netflix?',
      answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. Theres always something new to discover, and new TV shows and movies are added every week!',
    },
    {
      question: 'How much does Netflix cost?',
      answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.',
    },
    {
      question: 'Where can I watch?',
      answer: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while youre on the go and without an internet connection. Take Netflix with you anywhere.',
    },
    {
      question: 'How do I cancel?',
      answer: 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
    },
    {
      question: 'What can I watch on Netflix?',
      answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    },
    {
      question: 'Is Netflix good for kids?',
      answer: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.'
    },
    // Add more questions and answers as needed
  ];


  return (
    <>

      <div className='home-div'>
        <div className="container">
          <Navbar />
          <div className="content">
            <h1 >Laughter. Tears. Thrills.
              Find it all on <span>Netflix.</span></h1>
            <p className='content-p1'>Endless entertainment starts at just ₹149. Cancel anytime.</p>

            <div className="box-1">
              <p className='content-p2'>Ready to watch? Enter your email to create or restart your membership.</p>
              <div className="input-box">
                <input className='input-email' type="email" placeholder='Email address' />
                <button className='getStart-btn'>Get Started</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='line'></div>

      <section className='section-1'>
        <div className="section-box-1">
          <h2 className='section-box-h1'>Enjoy on your TV</h2>
          <p className='section-box-p'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>

        </div>
        <div className="section-box-2">
          <img className='section-box-2-img' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
          <video className='tv-video' autoPlay playsInline muted loop src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"></video>
        </div>

      </section>

      <div className='line'></div>

      <section className='section-1'>

        <div className="section-box-2">
          <img className="mobile-png" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
          <div className="animi">
            <img className='animi-img-1' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
            <div className="sub-animi">
              <h4>Stranger Things</h4>
              <p>Downloading...</p>
            </div>
            <img className='animi-img-2' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />

          </div>
        </div>
        <div className="section-box-1">
          <h2 className='section-box-h1'>Download your shows to watch offline</h2>
          <p className='section-box-p'>Save your favourites easily and always have something to watch.</p>

        </div>


      </section>

      <div className='line'></div>

      <section className='section-1'>
        <div className="section-box-1">
          <h2 className='section-box-h1'>Watch everywhere</h2>
          <p className='section-box-p'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>

        </div>
        <div className="section-box-2">
          <img className='section-box-2-img' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" />
          <video className='computer-video' autoPlay playsInline muted loop src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4"></video>
        </div>

      </section>

      <div className='line'></div>

      <section className='section-1'>

        <div className="section-box-2">
          <img className="mobile-png" src="https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="" />

        </div>
        <div className="section-box-1">
          <h2 className='section-box-h1'>Create profiles for kids</h2>
          <p className='section-box-p'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>

        </div>


      </section>

      <div className='line'></div>

      <section className='quetion-section'>
        <div className="quetion-sub-box">
          <h1>Frequently Asked Questions</h1>

          {questions.map((item, index) => (
            <div key={index} className="accordion-item">
              <div className="accordion-header" onClick={() => handleAccordionClick(index)}>
                <h3>{item.question}</h3>
                <span className={activeIndex === index ? 'icon active' : 'icon'}>&#43;</span>
              </div>
              {activeIndex === index && (
                <div className="accordion-content">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}



        </div>

        <div className="quetion-form">
        <div className="box-1">
              <p className='content-p2'>Ready to watch? Enter your email to create or restart your membership.</p>
              <div className="input-box">
                <input className='input-email' type="email" placeholder='Email address' />
                <button className='getStart-btn'>Get Started</button>
              </div>
            </div>
        </div>



      </section>

      <div className='line'></div>


      <footer className='footer'>
        <p className='footer-p'>Questions? Call 000-800-919-1694</p>
        <div className="footer-div">
          <div className="footer-box">
            <ul>
              <li><a href="">FAQ</a></li>
              <li><a href="">Investor Relations</a></li>
              <li><a href="">Privacy</a></li>
              <li><a href="">Speed Test</a></li>
            </ul>
          </div>
          <div className="footer-box">
            <ul>
              <li><a href="">Help Centre</a></li>
              <li><a href="">Jobs</a></li>
              <li><a href="">Cookie Preferences</a></li>
              <li><a href="">Legal Notices</a></li>
            </ul>
          </div>
          <div className="footer-box">
            <ul>
              <li><a href="">Account</a></li>
              <li><a href="">Ways to Watch</a></li>
              <li><a href="">Corporate Information</a></li>
              <li><a href="">Only on Netflix</a></li>
            </ul>
          </div>
          <div className="footer-box">
            <ul>
              <li><a href="">Media Centre</a></li>
              <li><a href="">Terms of Use</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <select name="" id="" className='language'>
          <option className='language-option' value="English">English</option>
          <option className='language-option' value="Hindi">हिन्दी</option>
        </select>
        <p className='footer-p'>Netflix India</p>
      </footer>
    </>
  );
}

export default Login;
