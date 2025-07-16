import Navbar from '../components/Navbar';

const Leadership = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Our <span className="text-orange-200">Leadership</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
              Meet the dedicated individuals guiding our organization's mission
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Image */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-orange-100">
              <img 
                src={"https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-16%20at%2000.18.20_626f0b3c.jpg?updatedAt=1752605802470"}
                alt="Leadership panel discussion during Central Conference at Sarat Sadan, Howrah" 
                className="w-full h-auto object-cover"
              />
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

export default Leadership;