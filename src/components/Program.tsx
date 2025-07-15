interface Day {
  title: string;
  date: string;
}

interface ProgramProps {
  program: {
    title: string;
    subtitle: string;
    day1: Day;
    day2: Day;
  };
  onOpenCart: (packageType?: '1day' | '2days') => void;
}

const Program = ({ program, onOpenCart }: ProgramProps) => {
  return (
    <section id="program" className="py-12 sm:py-16 lg:py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white">
            {program.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {program.subtitle}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Day 1 */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-400/30 rounded-2xl p-8 sm:p-12 lg:p-16 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-400 rounded-full flex items-center justify-center text-black font-bold text-2xl sm:text-3xl mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">{program.day1.title}</h3>
              <p className="text-red-400 font-medium text-lg sm:text-xl">{program.day1.date}</p>
              <div className="mt-8 p-6 bg-gray-800/30 rounded-xl">
                <p className="text-gray-300 text-sm sm:text-base">
                  Learn the authentic fundamentals of Bruce Lee's art with the masters.
                </p>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-400/30 rounded-2xl p-8 sm:p-12 lg:p-16 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-400 rounded-full flex items-center justify-center text-black font-bold text-2xl sm:text-3xl mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">{program.day2.title}</h3>
              <p className="text-blue-400 font-medium text-lg sm:text-xl">{program.day2.date}</p>
              <div className="mt-8 p-6 bg-gray-800/30 rounded-xl">
                <p className="text-gray-300 text-sm sm:text-base">
                  Perfect your mastery with advanced Jeet Kune Do principles.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Take Away */}
        <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/30 rounded-2xl p-6 sm:p-8 lg:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
            What you'll take away
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: "🥋",
                title: "Authentic Techniques",
                description: "Bruce Lee's secret movements, transmitted by his direct heirs"
              },
              {
                icon: "🧠",
                title: "Martial Philosophy",
                description: "The mindset that makes the difference between technique and martial art"
              },
              {
                icon: "⚡",
                title: "Combat Reflexes",
                description: "The instinct and automatisms of true masters"
              },
              {
                icon: "🎯",
                title: "Personal Plan",
                description: "Your roadmap to continue progressing after the seminar"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-4 sm:p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors duration-300 group"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <button 
            onClick={() => onOpenCart()}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-lg sm:text-xl transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-yellow-400/25 w-full sm:w-auto"
          >
            I WANT TO LEARN THESE TECHNIQUES
          </button>
          <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4">
            The most comprehensive program ever offered in the US
          </p>
        </div>
      </div>
    </section>
  )
}

export default Program
