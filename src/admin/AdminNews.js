import { news } from "../data";

const AdminNews = {
    show: () => `
    <a href="/admin/news/add" class="font-bold text-lg text-neutral-600 m-3 block">Thêm mới</a>
    <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Id                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Content
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            ${news.map((e) => `
                <tr>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                          ${e.id}
                          </div>
                        </div>
                      </td>
                      
                      <td class="px-6 py-4 w-1/3">
                        <span class="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          ${e.title}
                        </span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                      <img class="h-10 w-10 rounded-full" src="${e.image}" alt="">
                      </td>
                      <td class="w-1/2 px-6 py-4 text-sm text-gray-500">
                        ${e.desc}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="admin/news/${e.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                      </td>
                </tr>`).join("")}
              
  
              <!-- More people... -->
            </tbody>
          </table>

        </div>
        
      </div>
      
    </div>
    
  </div>
  `,

};

export default AdminNews;