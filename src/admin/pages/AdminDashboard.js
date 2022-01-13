const AdminDashboard = {
    show: () => `
          
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Reports</a>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">Tom Cook</div>
            <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
          </div>
          <button type="button" class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: outline/bell -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
        <div class="mt-3 px-2 space-y-1">
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>

          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>

          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
        </div>
      </div>
    </div>
  </nav>

  <main>
   
  <section class="max-w-8xl mx-auto container bg-white pt-7">
  <div>
      <div role="contentinfo" class="flex items-center flex-col px-4">
          <hh1 tabindex="0" class="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4">TRANG CHỦ QUẢN TRỊ</hh1>
      </div>
      <div tabindex="0" aria-label="group of cards" class="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4">
          <div tabindex="0" aria-label="card 1" class="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
              <div class="w-20 h-20 relative mr-5">
                  <div class="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                  <div class="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg" alt="drawer">
                  </div>
              </div>
              <div class="w-10/12">
                  <h2 tabindex="0" class="focus:outline-none text-lg font-bold leading-tight text-gray-800">Ready to use components</h2>
                  <p tabindex="0" class="focus:outline-none text-base text-gray-600 leading-normal pt-2">It provides a very simple start, no need to write a lot of code, you just import it and start the primitive components and create the ones you need.</p>
              </div>
          </div>
          <div tabindex="0" aria-label="card 2" class="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
              <div class="w-20 h-20 relative mr-5">
                  <div class="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                  <div class="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg" alt="check">
                  </div>
              </div>
              <div class="w-10/12">
                  <h2 tabindex="0" class="focus:outline-none text-lg font-semibold leading-tight text-gray-800">Hight Quality UI you can reply on</h2>
                  <p tabindex="0" class="focus:outline-none text-base text-gray-600 leading-normal pt-2">Modify the visual appearance of your site – including colors, fonts, margins and other style-related properties – with a sophisticated style.</p>
              </div>
          </div>
          <div tabindex="0" aria-label="card 3" class="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
              <div class="w-20 h-20 relative mr-5">
                  <div class="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                  <div class="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg" alt="html tag">
                  </div>
              </div>
              <div class="w-10/12">
                  <h2 tabindex="0" class="focus:outline-none text-lg font-semibold leading-tight text-gray-800">Coded by Developers for Developers</h2>
                  <p tabindex="0" class="focus:outline-none text-base text-gray-600 leading-normal pt-2">Instead of just giving you the tools to create your own site, they offer you a list of themes you can choose from. Thus a handy product.</p>
              </div>
          </div>
          <div tabindex="0" aria-label="card 4" class="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
              <div class="w-20 h-20 relative mr-5">
                  <div class="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                  <div class="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg" alt="monitor">
                  </div>
              </div>
              <div class="w-10/12">
                  <h2 tabindex="0" class="focus:outline-none text-lg font-semibold leading-tight text-gray-800">The Last UI kit you’ll ever need</h2>
                  <p tabindex="0" class="focus:outline-none text-base text-gray-600 leading-normal pt-2">We have chosen the bright color palettes that arouse the only positive emotions. The kit that simply assures to be loved by everyone.</p>
              </div>
          </div>
      </div>
  </div>
</section>


  </main>
</div>`,
};

export default AdminDashboard;