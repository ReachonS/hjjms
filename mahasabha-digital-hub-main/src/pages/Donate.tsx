import { useState } from 'react';
import { Heart, HandHeart, X, Users } from 'lucide-react';
import BackgroundVideoSlider from '../components/BackgroundVideoSlider';
import Navbar from '../components/Navbar';

const DonationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={onClose}>
      <div className="bg-white p-4 rounded-lg shadow-xl max-w-3xl w-full relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 z-10">
          <X className="w-6 h-6" />
        </button>
        <img style={{width:'100%',height:"70vh"}} src={"https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-14%20at%2020.35.01_0d208e6b.jpg?updatedAt=1752507140051"} alt="Donation Information" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

const homeSliderImages = [
  '/hjmbharat-uploads/Home Page . Fast _page-0003.jpg',
  '/hjmbharat-uploads/Home Page . Fast _page-0002.jpg',
  '/hjmbharat-uploads/Home Page . Fast _page-0001.png',
];

const Donate = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Navbar />

      {/* Hero Section with Background Video Slider */}
      <section className="relative pt-24 px-2">
        <div className='flex items-center justify-center h-screen'>

       <img style={{height:'90vh',width:'auto'}} src={'https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-14%20at%2020.35.01_0d208e6b.jpg?updatedAt=1752507140051'} alt="" />
        </div>
      </section>

      {/* Support Our Mission Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-orange-600 to-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-6 shadow-lg">
                <HandHeart className="w-12 h-12 text-white mx-auto mb-4" />
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Support Our Mission</h1>
                <p className="text-orange-100 mb-6 max-w-2xl mx-auto text-sm md:text-base">
                  Your generous donations help us continue our work in community awareness, 
                  cultural preservation, and social service. Every contribution makes a difference.
                </p>
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                  <button onClick={() => setIsDonationModalOpen(true)} className="bg-white text-orange-600 px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Donate Now
                  </button>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-left max-w-md text-white">
                    <p className="text-orange-200 mb-4 text-sm">
                      Please send your information regarding donation to us through mail at <a href="mailto:hjjms.contact@gmail.com" className="underline">hjjms.contact@gmail.com</a> for getting Money Receipt.
                    </p>
                    <h4 className="font-bold text-base md:text-lg mb-3 text-orange-200">Donor Details:</h4>
                    <div className="space-y-2 text-xs md:text-sm">
                      <p>1. Donor PAN (Mandatory)</p>
                      <p>2. Name of Donor</p>
                      <p>3. Address with Pin Code</p>
                      <p>4. Mobile No.</p>
                      <p>5. Mail ID</p>
                      <p>6. Transaction Ref. No. or Screen Shot to be attached with this form.</p>
                    </div>
                    <p className="text-orange-200 mt-4 text-xs md:text-sm">
                      You will be acknowledged after getting your information within 3 working days through above mentioned mailing address.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Hindu Janajagriti Mahasabha. All rights reserved.
          </p>
        </div>
      </footer>
      
      <DonationModal isOpen={isDonationModalOpen} onClose={() => setIsDonationModalOpen(false)} />
    </div>
  );
};

export default Donate;