export default function Home() {
  return (
    <>
      <div className="w-screen h-[100dvh] bg-violet-600 flex flex-col">
        <div className="w-full p-5 flex justify-center items-start">
          <div className="w-screen h-[100dvh]flex justify-center items-center">
            <div className="w-[1200px] flex justify-between items-center">
              <div className="flex justify-start items-start">
                <div className="w-60 h-30 p-2.5 inline-flex flex-col justify-center items-center gap-2.5">
                  <div className="w-100 h-50 bg-yellow-300" />
                  <img
                    className="w-100 h-50"
                    src="/src/assets/home/logo-transparent.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-wrap justify-start items-start gap-6 w-full">
                <div className="px-3 py-6 flex justify-start items-start">
                  <div className="justify-start text-white text-lg font-semibold font-['Montserrat']">
                    Courses
                  </div>
                </div>
                <div className="px-3 py-6 flex justify-start items-start">
                  <div className="justify-start text-white text-lg font-semibold font-['Montserrat']">
                    Pricing
                  </div>
                </div>
                <div className="px-3 py-6 flex justify-start items-start">
                  <div className="justify-start text-white text-lg font-semibold font-['Montserrat']">
                    Log in
                  </div>
                </div>
                <div className="px-3 py-6 flex justify-start items-start">
                  <div className="justify-start text-white text-lg font-semibold font-['Montserrat']">
                    Sign up
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 px-5 py-20 flex justify-center items-start gap-20">
          <div className="w-[1200px] flex justify-start items-center">
            <div className="flex-1 flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col gap-6">
                <div className="px-4 py-2.5 bg-black/10 rounded-[40px]  outline-1 outline-offset-[-1px] outline-white/50 inline-flex justify-center items-center gap-2.5">
                  <div className="text-white text-[10px] font-bold uppercase leading-none tracking-wide">
                    Featured Course
                  </div>
                </div>
                <div className="self-stretch justify-start text-white text-6xl font-bold font-['Montserrat'] leading-[72.60px]">
                  Introduction to computer science
                </div>
              </div>
              <div className="pt-4 flex items-center gap-4">
                <div className="w-56 px-6 py-4 bg-yellow-300 rounded-md   shadow-[inset_0px_1px_2px_0px_rgba(148,131,255,1.00)] flex justify-center items-center">
                  <div className=" text-black text-base font-semibold font-['Montserrat'] leading-tight">
                    Start learning for free
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-32 inline-flex flex-col justify-center items-start">
                    <img
                      className="w-32 h-8"
                      src="/src/assets/home/image44.png"
                    />
                  </div>
                  <div className=" text-white text-xs font-semibold font-['Montserrat'] leading-none">
                    100% real users 😉
                  </div>
                </div>
              </div>
              <div className=" text-white text-sm font-medium font-['Montserrat'] leading-tight">
                Donec et scelerisque quam. Aliquam varius et sapien a pharetra.
                Maecenas auctor, augue finibus rhoncus, orci lorem ultricies
                eli.
              </div>
            </div>
            <div className="flex-1 flex justify-start items-start gap-2.5">
              <div className="flex-1 inline-flex flex-col justify-center items-center">
                <img
                  className="self-stretch h-96"
                  src="/src/assets/home/image.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" px-5 pt-7 pb-28 bg-violet-600 flex flex-col justify-start items-center">
          <div className="w-full max-w-[1300px] flex flex-col justify-start items-center">
            <div className="self-stretch text-center justify-start text-white/10 text-9xl font-extrabold font-['Montserrat'] leading-[139.46px]">
              New courses
            </div>
            <div className="flex flex-wrap justify-start items-start gap-6 w-full">
              <div className="flex-1 inline-flex justify-start items-start gap-6">
                <div className="flex-1 h-[500px] pt-16 bg-black/10 rounded-xl shadow-[0px_20px_100px_0px_rgba(0,0,0,0.25)] outline-1 outline-offset-[-1px] outline-white/50 backdrop-blur-[6px] flex flex-col justify-between items-start">
                  <div className="flex-1 px-14 rounded-xl flex flex-col justify-start items-start gap-9">
                    <div className=" flex flex-col justify-start items-start gap-6">
                      <div className="flex justify-start text-white text-5xl font-bold font-['Montserrat'] leading-[52.80px]">
                        The JavaScript Journey
                      </div>
                      <div className="flex justify-start items-center gap-3">
                        <div className="justify-center text-white text-lg font-semibold font-['Montserrat'] leading-snug">
                          Learn more
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="self-stretch h-64"
                    src="/src/assets/home/image 42.png"
                  />
                </div>
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-center">
                <div className="self-stretch h-[500px] pt-16 bg-black/10 rounded-xl shadow-[0px_20px_100px_0px_rgba(0,0,0,0.25)] outline-1 outline-offset-[-1px] outline-white/50 backdrop-blur-[6px] flex flex-col justify-between items-start">
                  <div className="self-stretch px-14 rounded-xl flex flex-col justify-start items-start gap-9">
                    <div className="self-stretch flex flex-col justify-start items-start gap-6">
                      <div className="self-stretch justify-start text-white text-5xl font-bold font-['Montserrat'] leading-[52.80px]">
                        An introduction to databases
                      </div>
                      <div className="inline-flex justify-start items-center gap-3">
                        <div className="justify-center text-white text-lg font-semibold font-['Montserrat'] leading-snug">
                          Learn more
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="self-stretch h-56"
                    src="/src/assets/home/image 41.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-5 pt-7 pb-28 bg-violet-600 flex flex-col justify-start items-center">
          <div className="w-full max-w-[1300px] flex flex-col justify-start items-center">
            <div className="text-center justify-start text-white/10 text-9xl font-extrabold font-['Montserrat'] leading-[139.46px]">
              Wall of love
            </div>
            <div className="self-stretch flex flex-wrap justify-start items-start gap-6 w-full">
              <div className="w-[1300px] inline-flex justify-start items-start gap-6">
                <div className="flex-1 inline-flex flex-col justify-start items-center gap-6">
                  <div className="self-stretch h-72 px-6 py-6 bg-black/10 rounded-xl shadow-[0px_20px_100px_0px_rgba(0,0,0,0.25)]  outline-1 outline-offset-[-1px] outline-white/50 backdrop-blur-[6px] flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch h-56 flex flex-col justify-start items-start gap-6">
                      <div className="self-stretch flex flex-col justify-start items-start gap-6">
                        <div className="self-stretch inline-flex justify-between items-start">
                          <div className="flex justify-start items-center gap-1.5">
                            <div className="w-11 h-11 flex justify-center items-center">
                              <img
                                className="flex-1 self-stretch rounded-full"
                                src="/src/assets/home/testimonal2.svg"
                              />
                            </div>
                            <div className="inline-flex flex-col justify-start items-start gap-[3px]">
                              <div className="justify-start text-white text-sm font-semibold font-['Montserrat']">
                                Esther Howard
                              </div>
                              <div className="justify-start text-white/60 text-xs font-normal font-['Montserrat']">
                                @totallyrealperson
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch h-28 justify-start text-white text-lg font-medium font-['Montserrat'] leading-relaxed">
                          Pharetra pharetra massa massa ultricies. Accumsan sit
                          amet nulla facilisi morbi. Integer eget aliquet nibh
                          praesent tristique magna sit amet.{" "}
                        </div>
                      </div>
                      <div className="self-stretch h-3.5 justify-start text-white text-xs font-medium font-['Montserrat']">
                        12:15 PM · May 19, 2009
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-center gap-6">
                  <div className="self-stretch h-72 px-6 py-6 bg-black/10 rounded-xl shadow-[0px_20px_100px_0px_rgba(0,0,0,0.25)] outline-1 outline-offset-[-1px] outline-white/50 backdrop-blur-[6px] flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch h-56 flex flex-col justify-start items-start gap-6">
                      <div className="self-stretch flex flex-col justify-start items-start gap-6">
                        <div className="self-stretch inline-flex justify-between items-start">
                          <div className="flex justify-start items-center gap-1.5">
                            <div className="w-11 h-11 flex justify-center items-center">
                              <img
                                className="w-12 h-12 rounded-full"
                                src="/src/assets/home/testimonial3.svg"
                              />
                            </div>
                            <div className="inline-flex flex-col justify-start items-start gap-[3px]">
                              <div className="justify-start text-white text-sm font-semibold font-['Montserrat']">
                                Leslie Alexander
                              </div>
                              <div className="justify-start text-white/60 text-xs font-normal font-['Montserrat']">
                                @totallyrealperson
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch h-28 justify-start text-white text-lg font-medium font-['Montserrat'] leading-relaxed">
                          Magna fermentum iaculis eu non diam phasellus. Arcu
                          cursus euismod quis viverra nibh cras pulvinar mattis
                          nunc.
                        </div>
                      </div>
                      <div className="self-stretch h-3.5 justify-start text-white text-xs font-medium font-['Montserrat']">
                        12:15 PM · May 19, 2009
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-center gap-6">
                  <div className="self-stretch h-72 px-6 py-6 bg-black/10 rounded-xl shadow-[0px_20px_100px_0px_rgba(0,0,0,0.25)]  outline-1 outline-offset-[-1px] outline-white/50 backdrop-blur-[6px] flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch h-56 flex flex-col justify-start items-start gap-6">
                      <div className="self-stretch flex flex-col justify-start items-start gap-6">
                        <div className="self-stretch inline-flex justify-between items-start">
                          <div className="flex justify-start items-center gap-1.5">
                            <div className="w-11 h-11 flex justify-center items-center">
                              <img
                                className="w-12 h-12 rounded-full"
                                src="/src/assets/home/testimonial4svg.svg"
                              />
                            </div>
                            <div className="inline-flex flex-col justify-start items-start gap-[3px]">
                              <div className="w-24 justify-start text-white text-sm font-semibold font-['Montserrat']">
                                Wade Warren
                              </div>
                              <div className="justify-start text-white/60 text-xs font-normal font-['Montserrat']">
                                @totallyrealperson
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch h-28 justify-start text-white text-lg font-medium font-['Montserrat'] leading-relaxed">
                          Porttitor rhoncus dolor purus non. Varius duis at
                          consectetur lorem donec. Aliquam ut porttitor leo a
                          diam sollicitudin tempor id.
                        </div>
                      </div>
                      <div className="self-stretch h-3.5 justify-start text-white text-xs font-medium font-['Montserrat']">
                        12:15 PM · May 19, 2009
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[1300px] inline-flex justify-start items-start gap-6">
                <div className="flex-1 inline-flex flex-col justify-start items-center gap-6">
                  <div className="self-stretch h-72 px-6 py-6 bg-black/10 rounded-xl shadow-[0px_20px_100px_0px_rgba(0,0,0,0.25)]  outline-1 outline-offset-[-1px] outline-white/50 backdrop-blur-[6px] flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch h-56 flex flex-col justify-start items-start gap-6">
                      <div className="self-stretch flex flex-col justify-start items-start gap-6">
                        <div className="self-stretch inline-flex justify-between items-start">
                          <div className="flex justify-start items-center gap-1.5">
                            <div className="w-11 h-11 flex justify-center items-center">
                              <img
                                className="w-12 h-12 rounded-full"
                                src="/src/assets/home/image.svg"
                              />
                            </div>
                            <div className="inline-flex flex-col justify-start items-start gap-[3px]">
                              <div className="justify-start text-white text-sm font-semibold font-['Montserrat']">
                                Jacob Jones
                              </div>
                              <div className="justify-start text-white/60 text-xs font-normal font-['Montserrat']">
                                @totallyrealperson
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch h-28 justify-start text-white text-lg font-medium font-['Montserrat'] leading-relaxed">
                          Aliquam faucibus purus in massa tempor. Habitasse
                          platea dictumst vestibulum rhoncus est pellentesque
                          elit.{" "}
                        </div>
                      </div>
                      <div className="self-stretch h-3.5 justify-start text-white text-xs font-medium font-['Montserrat']">
                        12:15 PM · May 19, 2009
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-center gap-6">
                  <div className="self-stretch h-72 px-6 py-6 bg-black/10 rounded-xl shadow-[0px_20px_100px_0px_rgba(0,0,0,0.25)] outline-1 outline-offset-[-1px] outline-white/50 backdrop-blur-[6px] flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch h-56 flex flex-col justify-start items-start gap-6">
                      <div className="self-stretch flex flex-col justify-start items-start gap-6">
                        <div className="self-stretch inline-flex justify-between items-start">
                          <div className="flex justify-start items-center gap-1.5">
                            <div className="w-11 h-11 flex justify-center items-center">
                              <img
                                className="w-12 h-12 rounded-full"
                                src="/src/assets/home/image5.svg"
                              />
                            </div>
                            <div className="inline-flex flex-col justify-start items-start gap-[3px]">
                              <div className="justify-start text-white text-sm font-semibold font-['Montserrat']">
                                Courtney Henry
                              </div>
                              <div className="justify-start text-white/60 text-xs font-normal font-['Montserrat']">
                                @totallyrealperson
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch h-28 justify-start text-white text-lg font-medium font-['Montserrat'] leading-relaxed">
                          Nunc sed velit dignissim sodales ut eu sem integer.
                          Scelerisque varius morbi enim nunc faucibus. Mi sit
                          amet mauris commodo quis.{" "}
                        </div>
                      </div>
                      <div className="self-stretch h-3.5 justify-start text-white text-xs font-medium font-['Montserrat']">
                        12:15 PM · May 19, 2009
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-center gap-6">
                  <div className="self-stretch h-72 px-6 py-6 bg-black/10 rounded-xl shadow-[0px_20px_100px_0px_rgba(0,0,0,0.25)]  outline-1 outline-offset-[-1px] outline-white/50 backdrop-blur-[6px] flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch h-56 flex flex-col justify-start items-start gap-6">
                      <div className="self-stretch flex flex-col justify-start items-start gap-6">
                        <div className="self-stretch inline-flex justify-between items-start">
                          <div className="flex justify-start items-center gap-1.5">
                            <div className="w-11 h-11 flex justify-center items-center">
                              <img
                                className="w-12 h-12 rounded-full"
                                src="/src/assets/home/image6.svg"
                              />
                            </div>
                            <div className="inline-flex flex-col justify-start items-start gap-[3px]">
                              <div className="justify-start text-white text-sm font-semibold font-['Montserrat']">
                                Darrell Steward
                              </div>
                              <div className="justify-start text-white/60 text-xs font-normal font-['Montserrat']">
                                @totallyrealperson
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch h-28 justify-start text-white text-lg font-medium font-['Montserrat'] leading-relaxed">
                          Donec et scelerisque quam. Aliquam varius et sapien a
                          pharetra. Maecenas auctor, augue finibus rhoncus, orci
                          lorem ultricies eli.
                        </div>
                      </div>
                      <div className="self-stretch h-3.5 justify-start text-white text-xs font-medium font-['Montserrat']">
                        12:15 PM · May 19, 2009
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-5 py-28 bg-indigo-800 border-t border-white/50 flex flex-col justify-start items-center">
          <div className="w-full max-w-[1300px] flex flex-col justify-start items-center">
            <div className="self-stretch inline-flex justify-start items-start gap-6">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-20">
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  <div className="w-96 flex flex-col justify-start items-start gap-5">
                    <div className="self-stretch justify-start text-white text-3xl font-bold font-['Montserrat'] leading-loose">
                      Join the Computer Science School newsletter
                    </div>
                    <div className="self-stretch justify-start text-white text-sm font-medium font-['Montserrat'] leading-tight">
                      Donec et scelerisque quam. Aliquam varius et sapien.
                    </div>
                  </div>
                  <div className="w-[638px] flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch h-14 inline-flex justify-start items-start gap-4">
                      <div className="flex-1 self-stretch px-4 py-2.5 bg-white/10 rounded-md shadow-[0px_20px_100px_0px_rgba(0,0,0,0.25)]  outline-1 outline-offset-[-1px] outline-white/50 backdrop-blur-[6px] flex justify-start items-center gap-2.5">
                        <div className="w-96 justify-start text-white/90 text-sm font-medium font-['Montserrat'] leading-tight">
                          Enter your email...
                        </div>
                      </div>
                      <div className="px-6 py-4 bg-yellow-300 rounded-md shadow-[inset_0px_1px_2px_0px_rgba(148,131,255,1.00)] flex justify-center items-center gap-2.5">
                        <div className="justify-center text-black text-base font-semibold font-['Montserrat'] leading-tight">
                          Submit
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex justify-start items-center gap-2.5">
                    <div className="inline-flex flex-col justify-start items-start gap-2.5">
                      <div className="w-5 h-3.5 bg-white" />
                    </div>
                    <div className="inline-flex flex-col justify-start items-start gap-2.5">
                      <div className="w-5 h-5 bg-white" />
                    </div>
                    <div className="inline-flex flex-col justify-start items-start gap-2.5">
                      <div className="w-6 h-5 bg-white" />
                    </div>
                    <div className="w-5 h-6 relative">
                      <div className="w-5 h-5 left-0 top-[1.15px] absolute bg-white" />
                      <div className="w-3 h-3 left-[5.35px] top-[6.50px] absolute bg-white" />
                      <div className="w-[2.64px] h-[2.64px] left-[15.28px] top-[4px] absolute bg-white" />
                    </div>
                    <div className="px-0.5 flex justify-start items-start gap-2.5">
                      <div className="w-4 h-5 bg-white" />
                    </div>
                  </div>
                </div>
                <div className="justify-start text-white/70 text-xs font-medium font-['Montserrat'] leading-none">
                  ©️2025 Davide Marino. All Rights Reserved.
                </div>
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-center">
                <div className="self-stretch inline-flex justify-end items-start gap-24">
                  <div className="inline-flex flex-col justify-start items-start gap-5">
                    <div className="justify-start text-white text-2xl font-bold font-['Montserrat'] leading-relaxed">
                      Learn
                    </div>
                    <div className="flex flex-col justify-start items-start gap-3">
                      <div className="justify-start text-white text-sm font-medium font-['Montserrat'] leading-tight">
                        HTML
                      </div>
                      <div className="justify-start text-white text-sm font-medium font-['Montserrat'] leading-tight">
                        CSS
                      </div>
                      <div className="justify-start text-white text-sm font-medium font-['Montserrat'] leading-tight">
                        Javascript
                      </div>
                      <div className="justify-start text-white text-sm font-medium font-['Montserrat'] leading-tight">
                        React
                      </div>
                      <div className="justify-start text-white text-sm font-medium font-['Montserrat'] leading-tight">
                        React Hooks
                      </div>
                      <div className="justify-start text-white text-sm font-medium font-['Montserrat'] leading-tight">
                        TypeScript
                      </div>
                      <div className="justify-start text-white text-sm font-medium font-['Montserrat'] leading-tight">
                        Python
                      </div>
                      <div className="justify-start text-white text-sm font-medium font-['Montserrat'] leading-tight">
                        SQL
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex flex-col justify-start items-start gap-5">
                    <div className="justify-start text-white text-2xl font-bold font-['Montserrat'] leading-relaxed">
                      Company
                    </div>
                    <div className="flex flex-col justify-start items-start gap-3">
                      <div className="justify-start text-white text-sm font-medium font-['Montserrat'] leading-tight">
                        About
                      </div>
                      <div className="justify-start text-white text-sm font-medium font-['Montserrat'] leading-tight">
                        Careers
                      </div>
                      <div className="justify-start text-white text-sm font-medium font-['Montserrat'] leading-tight">
                        Pricing
                      </div>
                      <div className="justify-start text-white text-sm font-medium font-['Montserrat'] leading-tight">
                        Support
                      </div>
                      <div className="justify-start text-white text-sm font-medium font-['Montserrat'] leading-tight">
                        FAQs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
