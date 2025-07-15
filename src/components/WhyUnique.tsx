interface WhyUniqueProps {
  whyUnique: {
    title: string;
    problem: string;
    solution: string;
    promise: string;
    uniquePoints: string[];
  };
  onOpenCart: (packageType?: '1day' | '2days') => void;
}

const WhyUnique = ({ whyUnique, onOpenCart }: WhyUniqueProps) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-white leading-tight">
            {whyUnique.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Problem */}
            <div className="p-4 sm:p-6 bg-red-900/20 border-l-4 border-red-400 rounded-r-lg">
              <h3 className="text-lg sm:text-xl font-bold text-red-400 mb-2 sm:mb-3">The Problem</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {whyUnique.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="p-4 sm:p-6 bg-blue-900/20 border-l-4 border-blue-400 rounded-r-lg">
              <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-2 sm:mb-3">The Solution</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {whyUnique.solution}
              </p>
            </div>

            {/* Promise */}
            <div className="p-4 sm:p-6 bg-yellow-900/20 border-l-4 border-yellow-400 rounded-r-lg">
              <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2 sm:mb-3">Our Promise</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {whyUnique.promise}
              </p>
            </div>
          </div>

          {/* Right Content - Unique Points */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">What makes this seminar unique:</h3>
            
            {whyUnique.uniquePoints.map((point, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors duration-300 group"
              >
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm sm:text-base group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {point}
                </p>
              </div>
            ))}

            {/* Bruce Lee Quote */}
            <div className="mt-8 sm:mt-12 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-yellow-400/10 to-transparent border border-yellow-400/30 rounded-xl">
              <blockquote className="text-base sm:text-lg lg:text-xl italic text-gray-300 mb-3 sm:mb-4">
                "Absorb what is useful, discard what is not, add what is uniquely your own."
              </blockquote>
              <cite className="text-yellow-400 font-bold text-sm sm:text-base">— Bruce Lee</cite>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <button 
            onClick={() => onOpenCart()}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-lg sm:text-xl transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-yellow-400/25 w-full sm:w-auto"
          >
            I WANT THIS TRANSFORMATION
          </button>
          <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4">Only a few spots remaining</p>
        </div>
      </div>
    </section>
  )
}

export default WhyUnique
