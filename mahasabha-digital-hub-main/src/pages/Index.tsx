import { useState } from "react";
// import {img1} from 'public/img/139thBirthAnniversaryCelebration.jpeg'
import {
  ChevronDown,
  Heart,
  HandHeart,
  X,
  Users,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import BackgroundVideoSlider from "../components/BackgroundVideoSlider";
import Navbar from "../components/Navbar";
import Founder from "./Founder";

const DonationModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded-lg shadow-xl max-w-3xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 z-10"
        >
          <X className="w-6 h-6" />
        </button>
        <img
          src="/hjmbharat-uploads/WhatsApp Image 2025-07-12 at 05.00.50.jpeg"
          alt="Donation Information"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

const homeSliderImages = [
  "/hjmbharat-uploads/Home Page . Fast _page-0003.jpg",
  "/hjmbharat-uploads/Home Page . Fast _page-0002.jpg",
  "/hjmbharat-uploads/Home Page . Fast _page-0001.png",
];

const Index = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const organizationActivities = [
    {
      icon: "📖",
      title: "Religious & Cultural Propagation",
      description:
        "To propagate the activities of Hindu religion all over the country with effective and positive vision.",
    },
    {
      icon: "🤝",
      title: "Welfare Services",
      description:
        "To establish, develop, maintain, run all kind of welfare services for the backward class of the society at every level.",
    },
    {
      icon: "📢",
      title: "Community Awareness",
      description:
        "To conduct the programmes to raise awareness among Hindu community towards Sanatani spiritual and religious culture, custom to upgrade the life of the country.",
    },
    {
      icon: "💰",
      title: "Economic Support",
      description:
        "To provide economical support arranging relief and assistance to the needy victims during natural calamities and disaster.",
    },
    {
      icon: "👥",
      title: "Social Upliftment",
      description:
        "To conduct the effective programme for upliftment of the life style among the people particularly women and children in the society.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Navbar />

      {/* Hero Section with Background Video Slider */}
      <section id="home" className="relative pt-24 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-5 ">
            <a href="#">
              <img
                className="p-8 rounded-t-lg"
                src={
                  "https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-12%20at%2015.00.32_831f70c2.jpg?updatedAt=1752505907877"
                }
                alt="product image"
              />
            </a>
          </div>
        </div>

        {/* Additional Content Overlay */}
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
              About <span className="text-orange-600">Us</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 md:p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                  About Us
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  To propagate the activities of Hindu religion all over the
                  country with effective and positive vision. Our Aims and
                  Objects is help to the distressed, to nurse to the sick, to
                  feed the hungry and to clothe the naked, to give necessary
                  relief to the afflicted people in time of flood, famine,
                  earthquake and other disastrous condition of the country.
                </p>
                <p className="text-gray-600 text-sm">
                  Last 2 years under the supervision of the central executive
                  and West Bengal state executive committee the members
                  participated in various welfare programme in different areas
                  of the State.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal Objectives Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
              Some of our Principal{" "}
              <span className="text-orange-600">Objectives</span>
            </h2>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0"></span>
                  <p className="text-base md:text-lg leading-relaxed">
                    To propagate the activities of Hindu religion all over the
                    country with effective and positive vision.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0"></span>
                  <p className="text-base md:text-lg leading-relaxed">
                    To establish, develop, maintain, run all kind of welfare
                    services for the backward class of the society at every
                    level.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0"></span>
                  <p className="text-base md:text-lg leading-relaxed">
                    To conduct the programmes to raise awareness among Hindu community towards Sanatani spritual and religious culture, custom to upgrade the life of the country.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0"></span>
                  <p className="text-base md:text-lg leading-relaxed">
                    To provide economical support arranging relief anf assistance to the needy victims during natural calamities  and disaster.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0"></span>
                  <p className="text-base md:text-lg leading-relaxed">
                   To conduct the effective programme for upliftment of the life style among the people particularly women and children in the society.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Activities Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
              Our <span className="text-orange-600">Activities</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-14%20at%2023.15.37_e06115f8.jpg?updatedAt=1752517584100",
                  title: "Sanatana Dharma Sammelan 2024 ",
                  description:
                    "The Sanatana Dharma Sammelan was held on January 21, 2024, in Bhimpur, Nadia district, West Bengal.",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-14%20at%2023.15.37_9cc75016.jpg?updatedAt=1752517583027",
                  title: "Hanuman Jayanti 2024 ",
                  description:
                    "The Hanuman Jayanti festival was held on 23 April 2024 in the city of Berhampur, Murshidabad district, West Bengal, organized by the Hindu Janajagruti Mahasabha.",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-14%20at%2023.15.37_b6526916.jpg?updatedAt=1752517583142",
                  title:
                    "Celebrating The organization's founding anniversary in 2024",
                  description:
                    "The organization's first anniversary celebration was held on August 10, 2024 at the Mahabodhi Society Hall, College Square, Kolkata.",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-14%20at%2023.15.37_a960bc81.jpg?updatedAt=1752517584099",
                  title: "Annual General Conference 2025",
                  description:
                    "The Annual General Conference of the organization 2025 was held at the Calcutta University Institute Auditorium. The general members of the organization participated in this conference.",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-14%20at%2023.15.37_05659e5b.jpg?updatedAt=1752517584013",
                  title: "Free Medical Camp- Tribeni Kumbh Mela 2025",
                  description:
                    "A free medical camp was organized by the Hindu Janajagruti Mahasabha at the Tribeni Kumbh Mela in Hooghly district of West Bengal. More than 1,000 people were provided free medical treatment and free medicine in the camp",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-14%20at%2023.15.37_4c61611f.jpg?updatedAt=1752517583591",
                  title: "Central Executive Conference - 2025 (April)",
                  description:
                    "Central Executive Conference - 2025 (April), the meeting was held at the National Library in Kolkata.",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-14%20at%2023.15.37_a0538d66.jpg?updatedAt=1752517582845",
                  title: "Sanatan Dharma Sammelan - 2025",
                  description: "",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-14%20at%2023.15.37_dc99e453.jpg?updatedAt=1752517583279",
                  title: "139th Birth Anniversary Celebration of Revolutionary Rash Behari Bose.",
                  description: "139th Birth Anniversary Celebration of Revolutionary Rash Behari Bose, The event was held on 25th 2025 at Mahabodhi Society Hall, College Square, Kolkata.",
                  
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-14%20at%2023.15.37_71b8309b.jpg?updatedAt=1752517583976",
                  title: "Central Council Conference - 2025 (June) Howrah ",
                  description: "Central Council Conference - 2025 (June) Howrah, is held at Sharat Sadan, Howrah, West Bengal.",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-orange-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-2 text-lg">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founded by section  */}
      {<Founder />}

      {/* Support Our Mission Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-orange-600 to-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-6 shadow-lg">
                <HandHeart className="w-12 h-12 text-white mx-auto mb-4" />
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
                  Support Our Mission
                </h2>
                <p className="text-orange-100 mb-6 max-w-2xl mx-auto text-sm md:text-base">
                  Your generous donations help us continue our work in community
                  awareness, cultural preservation, and social service. Every
                  contribution makes a difference.
                </p>
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                  <button
                    onClick={() => setIsDonationModalOpen(true)}
                    className="bg-white text-orange-600 px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <Heart className="w-5 h-5" />
                    Donate Now
                  </button>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-left max-w-md text-white">
                    <p className="text-orange-200 mb-4 text-sm">
                      Please send your information regarding donation to us
                      through mail at{" "}
                      <a
                        href="mailto:hjjms.contact@gmail.com"
                        className="underline"
                      >
                        hjjms.contact@gmail.com
                      </a>{" "}
                      for getting Money Receipt.
                    </p>
                    <h4 className="font-bold text-base md:text-lg mb-3 text-orange-200">
                      Donor Details:
                    </h4>
                    <div className="space-y-2 text-xs md:text-sm">
                      <p>1. Donor PAN (Mandatory)</p>
                      <p>2. Name of Donor</p>
                      <p>3. Address with Pin Code</p>
                      <p>4. Mobile No.</p>
                      <p>5. Mail ID</p>
                      <p>
                        6. Transaction Ref. No. or Screen Shot to be attached
                        with this form.
                      </p>
                    </div>
                    <p className="text-orange-200 mt-4 text-xs md:text-sm">
                      You will be acknowledged after getting your information
                      within 3 working days through above mentioned mailing
                      address.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Contact Section */}
<section
  id="contact"
  className="py-16 md:py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white"
>
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
        Contact <span className="text-orange-400">Us</span>
      </h2>
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg space-y-6 text-sm md:text-base">
        
        {/* Contact Info */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-3">
            <Phone className="w-6 h-6 text-orange-400" />
            <h3 className="text-xl font-semibold">Contact</h3>
          </div>
          <p className="text-orange-300 font-medium">
            📞 <a href="tel:+918637809502" className="hover:text-orange-200 transition">+91 8637809502</a><br />
            ✉ <a href="mailto:hjjms.contact@gmail.com" className="hover:text-orange-200 transition">hjjms.contact@gmail.com</a>
          </p>
        </div>

        {/* Registered Office */}
        <div>
          <h3 className="text-xl font-semibold mb-1 text-white">Registered Office Address</h3>
          <p className="text-gray-300">
            Bhimpur, Krishnanagar 1,<br />
            Nadia, West Bengal, India.<br />
            Pin - 741167
          </p>
        </div>

        {/* City Office */}
        <div>
          <h3 className="text-xl font-semibold mb-1 text-white">City Office</h3>
          <p className="text-gray-300">
            P 58/1 Strand Bank Road,<br />
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
          <p className="text-gray-400 text-sm">
            &copy; 2025 Hindu Janajagriti Mahasabha. All rights reserved.
          </p>
        </div>
      </footer>
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </div>
  );
};

export default Index;
