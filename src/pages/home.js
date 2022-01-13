import { news, activities } from "../data";

const HomePage = {
    show: () => `
                              <div>
                                 <img src="https://picsum.photos/500/150" class="w-full m-auto pt-3" alt="" />
                              </div>
                              
                              <h3 class="font-bold text-2xl my-5 text-sky-900">TIN TỨC HỌC TẬP</h3>
                              <div class="grid grid-cols-3 gap-8">
                                 ${news.map((e) => `
                                    <div class="px-5 border border-red-300 py-3">
                                       <a href="news/post=${e.id}">
                                          <img src="${e.image}" class="w-full m-auto py-3" alt="" />
                                          <h4 class="text-lg font-bold text-orange-700"> ${e.title}</h4>
                                       </a>
                                       <p class="mt-5 text-sm">${e.desc}</p>
                                    </div>`).join("")}
                              </div>


                              <h3 class="font-bold text-2xl my-5 text-sky-900">HOẠT ĐỘNG SINH VIÊN</h3>
                              <div class="grid grid-cols-3 gap-8">
                                 ${activities.map((e) => `
                                    <div class="px-5 border border-red-300 py-3">
                                       <a href="activities/post=${e.id}">
                                          <img src="${e.image}" class="w-full m-auto py-3" alt="" />
                                          <h4 class="text-lg font-bold text-orange-700"> ${e.title}</h4>
                                       </a>
                                       <p class="mt-5 text-sm">${e.desc}</p>
                                    </div>`).join("")}
                              </div>
                              
                              `,
};

export default HomePage;