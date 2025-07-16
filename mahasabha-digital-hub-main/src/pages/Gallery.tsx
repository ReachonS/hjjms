import React from "react";
import img1 from "../../public/img1.jpg";
import Navbar from "@/components/Navbar";

function Gallery() {
  return (
    <div>
      <Navbar />
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
              <span className="text-orange-600">Gallery</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-14%20at%2023.15.37_e06115f8.jpg?updatedAt=1752517584100",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-14%20at%2023.15.37_9cc75016.jpg?updatedAt=1752517583027",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-14%20at%2023.15.37_b6526916.jpg?updatedAt=1752517583142",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-14%20at%2023.15.37_a960bc81.jpg?updatedAt=1752517584099",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-14%20at%2023.15.37_05659e5b.jpg?updatedAt=1752517584013",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-14%20at%2023.15.37_4c61611f.jpg?updatedAt=1752517583591",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-14%20at%2023.15.37_a0538d66.jpg?updatedAt=1752517582845",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-14%20at%2023.15.37_dc99e453.jpg?updatedAt=1752517583279",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-14%20at%2023.15.37_71b8309b.jpg?updatedAt=1752517583976",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-11%20at%2000.18.37_72be93d1.jpg?updatedAt=1752518573609",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-11%20at%2000.18.35_c0a7bb48.jpg?updatedAt=1752518573435",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/IMG-20250711-WA0005.jpg?updatedAt=1752518526947",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/IMG-20250711-WA0010.jpg?updatedAt=1752518526940",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/IMG-20250711-WA0011.jpg?updatedAt=1752518526937",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/IMG-20250711-WA0013.jpg?updatedAt=1752518526888",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/IMG-20250711-WA0006.jpg?updatedAt=1752518526795",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/IMG-20250711-WA0009.jpg?updatedAt=1752518526422",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/IMG-20250711-WA0008.jpg?updatedAt=1752518526211",
                },
                {
                  image:
                    "https://ik.imagekit.io/vuolawfz7/WhatsApp%20Image%202025-07-11%20at%2000.26.21_6737a8cb.jpg?updatedAt=1752518526169",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-orange-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={activity.image}
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
    </div>
  );
}

export default Gallery;
