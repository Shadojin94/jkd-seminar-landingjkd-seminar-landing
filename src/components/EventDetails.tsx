interface EventDetailsProps {
  event: {
    dates: string;
    location: {
      venue: string;
      address: string;
      city: string;
      phone: string;
      reviews: string;
    };
    schedule: {
      day1: {
        date: string;
        times: string;
      };
      day2: {
        date: string;
        times: string;
      };
    };
  }
}

const EventDetails = ({ event }: EventDetailsProps) => {
  const details = [
    {
      icon: (
        <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Dates & Schedule",
      content: (
        <div className="space-y-2">
          <div>
            <p className="text-gray-400 text-sm mb-1">{event.schedule.day1.date}</p>
            <p className="text-white font-medium text-sm sm:text-base">{event.schedule.day1.times}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">{event.schedule.day2.date}</p>
            <p className="text-white font-medium text-sm sm:text-base">{event.schedule.day2.times}</p>
          </div>
        </div>
      )
    },
    {
      icon: (
        <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      content: (
        <div className="space-y-2">
          <p className="text-white font-medium text-sm sm:text-base">{event.location.venue}</p>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{event.location.address}</p>
          <p className="text-gray-400 text-xs sm:text-sm">{event.location.city}</p>
          <div className="flex items-center mt-2">
            <svg className="w-3 h-3 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-yellow-400 text-xs font-medium">{event.location.reviews}</span>
          </div>
          <a 
            href={`tel:${event.location.phone}`}
            className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm transition-colors"
          >
            {event.location.phone}
          </a>
        </div>
      )
    },
    {
      icon: (
        <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Level Required",
      content: (
        <div className="space-y-2">
          <p className="text-white font-medium text-sm sm:text-base">Open to all levels</p>
          <p className="text-gray-400 text-xs sm:text-sm">Beginners welcome</p>
          <p className="text-yellow-400 text-xs sm:text-sm mt-2 flex items-center">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Personal adaptation
          </p>
        </div>
      )
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {details.map((detail, index) => (
            <div 
              key={index}
              className="group bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/10"
            >
              <div className="text-yellow-400 mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {detail.icon}
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300">
                {detail.title}
              </h3>
              <div>
                {detail.content}
              </div>
            </div>
          ))}
        </div>

        {/* Urgency Banner */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-yellow-400/20 to-red-500/20 border border-yellow-400/30 rounded-xl p-4 sm:p-6 text-center">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className="flex space-x-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
          <p className="text-lg sm:text-xl font-bold text-white mb-2">⚡ UNIQUE Event in the US ⚡</p>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
            First authentic Jun Fan JKD seminar with direct heirs of Bruce Lee
          </p>
        </div>
      </div>
    </section>
  )
}

export default EventDetails
