import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('email', email);

        const response = await fetch('https://formspree.io/f/mblryzop', {
            method: 'POST',
            body: form,
            headers: {
                'Accept': 'application/json',
            },
        });

        if (response.ok) {
            alert('Thank you for subscribing!');
            setEmail('');
        } else {
            alert('Oops! There was a problem with your submission.');
        }
    };

    return (
        <footer className="bg-gray-800 text-gray-300 py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Company</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:text-teal-400 transition">About Us</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-teal-400 transition">Careers</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-teal-400 transition">Press</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-teal-400 transition">Blog</a></li>
                    </ul>
                </div>

                {/* Customer Service Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Customer Service</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:text-teal-400 transition">Contact Us</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-teal-400 transition">Returns</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-teal-400 transition">Shipping</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-teal-400 transition">FAQ</a></li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Connect with Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/shubham.aarya.351/" className="text-xl text-gray-400 hover:text-blue-600 transition">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#" className="text-xl text-gray-400 hover:text-blue-400 transition">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.instagram.com/shubham84093/?next=%2F&hl=en" className="text-xl text-gray-400 hover:text-pink-600 transition">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.linkedin.com/in/shubham-kumar-poddar-a936ba23b/" className="text-xl text-gray-400 hover:text-blue-800 transition">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Newsletter</h3>
                    <p className="mb-4">Sign up to receive updates on the latest products and offers.</p>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 mb-4 rounded bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                            required
                        />
                        <button 
                            type="submit" 
                            className="w-full p-2 bg-teal-400 text-gray-800 font-bold rounded hover:bg-teal-300 transition">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4">
                <p className="text-center text-gray-400">&copy; 2024 Shubham💫. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

