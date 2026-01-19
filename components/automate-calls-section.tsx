export default function AutomateCallsSection() {
  return (
    <section className="w-full text-white px-4 sm:px-6 py-16 sm:py-20 font-poppins">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left */}
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-start gap-4 mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                Automate your call processes with AI
              </h1>

              <span className="bg-yellow-400 text-black text-sm px-4 py-1 rounded-full rotate-[-6deg] mt-1">
                No-code
              </span>
            </div>

            <p className="text-neutral-400 text-lg sm:text-xl md:text-2xl max-w-xl">
              Build the perfect AI employee to handle sales, bookings, surveys
              and all your customer support with no code or skills.
            </p>
          </div>

          {/* Right - Testimonial */}
          <div className="lg:flex lg:justify-end lg:w-[380px] lg:items-end">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-neutral-700 flex items-center justify-center shrink-0">
                <span className="text-lg">👤</span>
              </div>

              <div>
                <p className="font-medium">Michael Levitt</p>

                <div className="flex gap-1 my-1">
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>

                <p className="text-neutral-400 text-sm sm:text-base">
                  Callfluent is like having a powerhouse sales and support team
                  working 24/7 — without missing a beat.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20">
          {/* Card 1 */}
          <div className="rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] bg-violet-300 text-black w-full">
            <span className="text-md sm:text-lg  border border-black rounded-full px-4 py-2 sm:py-3 mb-6 w-fit">
              100+ minutes processed daily
            </span>

            <div>
              <h3 className="text-4xl md:text-5xl font-semibold mb-3">
                Sales and Cold Calling
              </h3>
              <p className="opacity-80 text-lg">
                Automate outbound phone calls without human reps.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] bg-indigo-600 text-white w-full">
            <span className="text-md sm:text-lg  border border-white rounded-full px-4 py-2 sm:py-3 mb-6 w-fit">
              &gt; 50K actions triggered daily
            </span>

            <div>
              <h3 className="text-4xl md:text-5xl font-semibold mb-3">
                Booking and Reminders
              </h3>
              <p className="opacity-80 text-lg">
                Streamline your appointment booking process.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] bg-neutral-800 text-white w-full">
            <span className="text-md sm:text-lg  border border-white rounded-full px-4 py-2 sm:py-3 mb-6 w-fit">
              &gt; 5K support agents deployed
            </span>

            <div>
              <h3 className="text-4xl md:text-5xl font-semibold mb-3">
                Customer Support
              </h3>
              <p className="opacity-80 text-lg">
                Provide exceptional, 24/7 automated customer support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
