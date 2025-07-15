interface Instructor {
  name: string;
  title: string;
  imageUrl: string;
  featured: boolean;
  bio: string;
  lineage: string;
  experience: string;
  philosophy: string;
  specialties: string[];
}

interface InstructorsProps {
  instructors: Instructor[];
}

const Instructors = ({ instructors }: InstructorsProps) => {
  return (
    <section id="instructors" className="py-12 sm:py-16 lg:py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Your Master Instructors
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Learn directly from the last authentic heirs of Bruce Lee's art. 
            A pure lineage, a unique transmission.
          </p>
        </div>

        {/* Instructors Grid - Only 2 instructors now */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
          {instructors.map((instructor, index) => (
            <div 
              key={index}
              className={`group relative transform transition-all duration-500 hover:-translate-y-4 ${
                index % 2 === 0 ? 'lg:rotate-1' : 'lg:-rotate-1'
              } hover:rotate-0`}
            >
              {/* Card */}
              <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 group-hover:border-yellow-400/50 shadow-xl group-hover:shadow-2xl group-hover:shadow-yellow-400/20 transition-all duration-500">
                {/* Featured Badge */}
                {instructor.featured && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-yellow-400 text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold z-10">
                    MASTER
                  </div>
                )}

                {/* Image */}
                <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                  <img 
                    src={instructor.imageUrl} 
                    alt={instructor.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{instructor.name}</h3>
                    <p className="text-yellow-400 font-medium text-sm sm:text-base">{instructor.title}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  {/* Lineage */}
                  <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-3">
                    <p className="text-xs sm:text-sm text-yellow-400 font-bold mb-1">Lineage</p>
                    <p className="text-white text-xs sm:text-sm">{instructor.lineage}</p>
                  </div>

                  {/* Experience */}
                  <div className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs sm:text-sm">{instructor.experience}</span>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {instructor.bio}
                  </p>

                  {/* Philosophy Quote */}
                  <div className="border-l-4 border-yellow-400 pl-3 sm:pl-4 py-2">
                    <p className="text-gray-300 italic text-xs sm:text-sm">
                      {instructor.philosophy}
                    </p>
                  </div>

                  {/* Specialties */}
                  <div>
                    <p className="text-white font-bold text-xs sm:text-sm mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {instructor.specialties.map((specialty, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-700 text-yellow-400 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bruce Lee Legacy Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 lg:p-12 border border-yellow-400/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Bruce Lee's Legacy</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
                These two masters represent the purest and most authentic lineage of Jun Fan Jeet Kune Do. 
                They learned directly from Bruce Lee's first students, preserving the original essence 
                of this revolutionary art.
              </p>
              <div className="flex items-center text-yellow-400">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-sm sm:text-base">Authenticity guaranteed</span>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <img 
                src="/images/seminar_paris.png" 
                alt="Sifu Abe and Sifu Greglon in Paris"
                className="rounded-xl shadow-xl w-full h-48 sm:h-64 lg:h-80 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                <p className="font-bold text-sm sm:text-base">Paris Seminar</p>
                <p className="text-xs sm:text-sm text-gray-300">Sifu Abe & Sifu Greglon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Instructors
