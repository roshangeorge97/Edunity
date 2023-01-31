import Navigation from "./Navigation";

export default function Profile(){
    return(
        <>
        <Navigation/>
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />

<main class="profile-page bg-black">
  <section class="relative block h-500-px bg-black">
    <div class="absolute top-0 w-full h-full bg-center bg-cove bg-black">
      <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
    </div>
    <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
      <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
      </svg>
    </div>
  </section>
  <section class="relative py-16 black bg-black">
    <div class="container mx-auto px-4">
      <div class="relative flex flex-col min-w-0 break-words bg-yellow w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div class="relative">
                <img alt="..." src="src\assets\undraw_Male_avatar_re_nyu5 (1).png" class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <div class="py-6 px-3 mt-32 sm:mt-0">
                <button class="bg-green active:bg-green uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  Connect
                </button>
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-1">
              <div class="flex justify-center py-4 lg:pt-4 pt-8">
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-black">2</span><span class="text-sm text-black">Students</span>
                </div>
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-black">3.7</span><span class="text-sm text-black">Rating</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-12">
            <h3 class="text-4xl font-semibold leading-normal mb-2 text-black mb-2">
              Sharma Ji
            </h3>
            <div class="text-sm leading-normal mt-0 mb-2 text-black font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-lg text-black"></i>
              Delhi, India
            </div>
            <div class="mb-2 text-black mt-10">
              <i class="fas fa-briefcase mr-2 text-lg text-black"></i>Student
            </div>
            <div class="mb-2 text-black">
              <i class="fas fa-university mr-2 text-lg text-black"></i>IIT - BHU
            </div>
          </div>
          <div class="mt-10 py-10 border-t border-black text-center">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-9/12 px-4">
                <p class="mb-4 text-lg leading-relaxed text-black">
                  An Student from IIT-BHU with extar ordianry teaching skills inthe domain of Physics. My AIR was 2108 in Mains 2022, and AIR 109 in Advanced.
                </p>
                <a href="#pablo" class="font-normal text-green">Show more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
<link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />

<section class="pt-1 lg:pt-[90px] pb-10 lg:pb-10 bg-black">
   <div class="container">
    <h1 className="font text-4xl font-bold tracking-tight text-yellow sm:text-6xl p-8 pl-0">Courses Offered</h1>
      <div class="flex w-full">
         <div class="w-1/4 md:w-1/2 xl:w-1/3 px-4">
            <div class="bg-yellow rounded-lg overflow-hidden mb-10">
               <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
                  alt="image"
                  class="w-full"
                  />
              <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-green
                        "
                        >
                     The Logics behind Computer Science and Architecture
                     </a>
                  </h3>
                  <p class="text-base text-black leading-relaxed mb-7">
                     A great Course whic covers all the interesting history about how computers were invented at that era. Skills to be learnt after cource include Computer Architecture and boolean Gates.
                  </p>
                  <a
                     href="javascript:void(0)"
                     class="
                     inline-block
                     py-2
                     px-7
                     border border-black
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-green hover:bg-green hover:text-white
                     transition
                     "
                     >
                  View Details
                  </a>
               </div>
            </div>
         </div>
         <div class="w-1/4 md:w-1/2 xl:w-1/3 px-4">
            <div class="bg-yellow rounded-lg overflow-hidden mb-10">
               <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg"
                  alt="image"
                  class="w-full"
                  />
               <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-green
                        "
                        >
                     Complete 90 days Roadmap on Craking IIT JEE in first Attempt
                     </a>
                  </h3>
                  <p class="text-base text-black leading-relaxed mb-7">
                     The Course comprises of a roadmap that has all tricks and tips to cracking IIT-JEE at your very first attempt. Curated Cheatsheets and resourses are also included in the course.
                  </p>
                  <a
                     href="javascript:void(0)"
                     class="
                     inline-block
                     py-2
                     px-7
                     border border-black
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-green hover:bg-green hover:text-white
                     transition
                     "
                     >
                  View Details
                  </a>
               </div>
            </div>
         </div>
         <div class="w-1/4 md:w-1/2 xl:w-1/3 px-4">
            <div class="bg-yellow rounded-lg overflow-hidden mb-10">
               <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg"
                  alt="image"
                  class="w-full"
                  />
               <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-green
                        "
                        >
                     Mastering NEET Physics in 180 days
                     </a>
                  </h3>
                  <p class="text-base text-black leading-relaxed mb-7">
                     A Complete Mentoring guide with 4 classes per week, to discuss your weak points in Physics and help you crack your dream course. Formula Cheats are also included to ace your preparation.
                     </p>
                  <a
                     href="javascript:void(0)"
                     class="
                     inline-block
                     py-2
                     px-7
                     border border-black
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-green hover:bg-green hover:text-white
                     transition
                     "
                     >
                  View Details
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
        </>
    )
}