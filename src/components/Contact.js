// Contact.js
import React, { useState } from 'react';
import './Contact.css';
import { FiSend, FiMail, FiMessageSquare } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = ({ id }) => {
    const [formData, setFormData] = useState({
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendToWhatsApp = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const adminPhoneNumber = '7569001096';
        const message = encodeURIComponent(
            `New message from contact form:\n\nEmail: ${formData.email}\nMessage: ${formData.message}`
        );
        const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${message}`;
        
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            setFormData({ email: '', message: '' });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <div id={id} className="contact-container">
            <motion.div 
                className="contact-box"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Contact <span className="highlight">Me</span>
                    <h5>Feel free to reach out for collaborations</h5>
                </motion.h1>
                
                <motion.form 
                    onSubmit={sendToWhatsApp}
                    className="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <div className="floating-symbols">
                        <div className="symbol symbol-1">✉️</div>
                        <div className="symbol symbol-2">📱</div>
                        <div className="symbol symbol-3">💬</div>
                    </div>
                    
                    <div className="input-group">
                        <FiMail className="input-icon" />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Your Email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                        <div className="input-border"></div>
                    </div>

                    <div className="input-group">
                        <FiMessageSquare className="input-icon" />
                        <textarea 
                            name="message" 
                            placeholder="Your Message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            required 
                        />
                        <div className="input-border"></div>
                    </div>

                    <motion.button 
                        type="submit" 
                        className="contact-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <span className="sending">Sending...</span>
                        ) : (
                            <>
                                <FiSend className="send-icon" />
                                Send via WhatsApp
                            </>
                        )}
                    </motion.button>
                </motion.form>
            </motion.div>
        </div>
    );
};

export default Contact;