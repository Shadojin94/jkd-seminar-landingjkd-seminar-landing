interface Testimonial {
  name: string;
  location: string;
  photoUrl: string;
  rating: number;
  comment: string;
  highlight: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  onOpenCart: (packageType?: '1day' | '2days') => void;
}

const Testimonials = ({ testimonials, onOpenCart }: TestimonialsProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 sm:w-5 sm:h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white">
            They lived the transformation
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover what our former participants say about their unique experience 
            with the masters of authentic Jeet Kune Do.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {[
            { number: "98%", label: "Recommend the seminar", icon: "👍" },
            { number: "4.9/5", label: "Average rating", icon: "⭐" },
            { number: "500+", label: "Participants trained", icon: "🥋" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 sm:p-6 bg-gray-800 rounded-xl border border-gray-700">
              <div className="text-3xl sm:text-4xl mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`group relative transform transition-all duration-500 hover:-translate-y-2 ${
                index % 2 === 0 ? 'lg:rotate-1' : 'lg:-rotate-1'
              } hover:rotate-0`}
            >
              {/* Card */}
              <div className="bg-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700 group-hover:border-yellow-400/50 shadow-xl group-hover:shadow-2xl group-hover:shadow-yellow-400/20 transition-all duration-500 h-full">
                {/* Quote Icon */}
                <div className="text-yellow-400 mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3 sm:mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Highlight */}
                <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-3 sm:mb-4">
                  "{testimonial.highlight}"
                </h3>

                {/* Comment */}
                <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 italic text-sm sm:text-base">
                  "{testimonial.comment}"
                </p>

                {/* Author */}
                <div className="flex items-center mt-auto">
                  <img 
                    src={testimonial.photoUrl} 
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-yellow-400 mr-3 sm:mr-4 object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="font-bold text-white text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{testimonial.location}</p>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="flex items-center mt-3 sm:mt-4 text-green-400">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm">Verified testimonial</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section - Previous Seminar */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 lg:p-12 border border-yellow-400/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                "An experience that changes a life"
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
                Watch exclusive footage from our previous seminar with Sifu Abe Santos and Sifu Greglon Yimm Lee. 
                See for yourself the authenticity and intensity of this unique teaching.
              </p>
              <div className="flex items-center text-yellow-400">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-sm sm:text-base">Watch seminar video</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/BSHx6AZFe6Y?start=57"
                  title="Séminaire Jun Fan Jeet Kune Do avec Sifu Abe Santos et Sifu Greglon Yimm Lee"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            Join them and live your own transformation
          </p>
          <button 
            onClick={() => onOpenCart()}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-lg sm:text-xl transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-yellow-400/25 w-full sm:w-auto"
          >
            I WANT TO LIVE THIS EXPERIENCE
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
