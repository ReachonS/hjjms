import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Contact <span className="text-orange-200">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
              Get in touch with us for inquiries, support, or to join our mission
            </p>
          </div>
        </div>
      </section>

     {/* Contact Information */}
<section className="py-16 md:py-20">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Get In <span className="text-orange-600">Touch</span>
      </h2>
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 space-y-8">

        {/* Contact Details */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Phone className="w-8 h-8 text-orange-600" />
            <h3 className="text-2xl font-bold text-gray-800">Contact</h3>
          </div>
          <p className="text-xl md:text-2xl text-gray-700">
            📞 <a href="tel:+918637809502" className="text-orange-600 hover:text-orange-700 font-semibold transition">+91 8637809502</a><br />
            ✉ <a href="mailto:hjjms.contact@gmail.com" className="text-orange-600 hover:text-orange-700 font-semibold transition">hjjms.contact@gmail.com</a>
          </p>
        </div>

        {/* Registered Office */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Registered Office Address</h3>
          <p className="text-lg text-gray-600">
            Bhimpur, Krishnanagar 1,<br />
            Nadia, West Bengal, India.<br />
            Pin - 741167
          </p>
        </div>

        {/* City Office */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">City Office</h3>
          <p className="text-lg text-gray-600">
            P 58/1, Strand Bank Road,<br />
            Kolkata - 700006
          </p>
        </div>

      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; 2025 Hindu Janajagriti Mahasabha. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
