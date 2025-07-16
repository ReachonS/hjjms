import { Calendar, MapPin, Users, Clock, Image as ImageIcon } from 'lucide-react';
import Navbar from '../components/Navbar';

const Events = () => {
  const eventImages = [
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
              ]

  const upcomingEvents = [
    {
      title: "Annual Cultural Festival",
      date: "March 15, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Kolkata Community Center",
      description: "Join us for a day-long celebration of Hindu culture featuring traditional music, dance, food, and spiritual discourse.",
      type: "Cultural"
    },
    {
      title: "Medical Camp",
      date: "March 22, 2025", 
      time: "9:00 AM - 4:00 PM",
      location: "Nadia District",
      description: "Free medical checkups and healthcare services for the local community.",
      type: "Service"
    },
    {
      title: "Youth Leadership Workshop",
      date: "April 5, 2025",
      time: "2:00 PM - 6:00 PM", 
      location: "Howrah Conference Hall",
      description: "Empowering young leaders with skills for community service and cultural preservation.",
      type: "Educational"
    },
    {
      title: "Community Awareness Rally",
      date: "April 12, 2025",
      time: "5:00 PM - 8:00 PM",
      location: "Central Kolkata",
      description: "Public awareness campaign about social issues and community participation.",
      type: "Awareness"
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Cultural': return 'bg-purple-100 text-purple-600';
      case 'Service': return 'bg-green-100 text-green-600';
      case 'Educational': return 'bg-blue-100 text-blue-600';
      case 'Awareness': return 'bg-orange-100 text-orange-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Our <span className="text-orange-200">Events</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
              Celebrating culture, serving community, and building connections
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {/* <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Upcoming <span className="text-orange-600">Events</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-orange-100"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock className="w-5 h-5 text-orange-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-orange-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>
                  
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300">
                    Register Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Past Events Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Past <span className="text-orange-600">Events Gallery</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {eventImages.map((image, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-orange-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={image.image} 
                      alt={image.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <h3 className="text-white font-bold text-sm">{image.title}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-xs leading-relaxed">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Information */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Join Our <span className="text-orange-600">Activities</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our events bring together the community to celebrate our rich cultural heritage, 
                provide social services, and create meaningful connections. Every gathering 
                strengthens our bond and advances our mission.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <Users className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800">Community Participation</h3>
                </div>
                <p className="text-gray-600 text-center leading-relaxed">
                  All community members are welcome to participate in our events. 
                  Together we create positive impact and preserve our cultural values.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <ImageIcon className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800">Event Updates</h3>
                </div>
                <p className="text-gray-600 text-center leading-relaxed">
                  Stay connected with us through our website and social channels 
                  for the latest event announcements and photo galleries.
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

export default Events;