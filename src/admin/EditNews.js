import { news } from "../data";

const EditNews = {
    show(id) {
        const foundNews = news.find((e) => e.id == id);

        return ` <div>
  <div class="md:grid md:grid-cols-3 md:gap-6 mt-5">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-bold leading-6 text-gray-900">Tin tức</h3>
        <p class="mt-1 text-sm text-gray-600">
          Chỉnh sửa bài viết tin tức
        </p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label for="company-website" class="block text-sm font-bold text-gray-700">
                  Tiêu đề
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input type="text" name="company-website" value="${foundNews.title}" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="chủ đề ngắn gọn của bài viết...">
                </div>
              </div>
            </div>

            <div>
              <label for="about" class="block text-sm font-bold text-gray-700">
                Mô tả
              </label>
              <div class="mt-1">
                <textarea id="about" name="about" rows="3" class="resize-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full  sm:text-sm border border-gray-300 rounded-md" placeholder="mô tả ngắn gọn nội dung bài viết...">${foundNews.desc}</textarea>
              </div>

              <label for="about" class="block text-sm font-bold text-gray-700 mt-4">
                Nội dung
              </label>
              <div class="mt-1">
                <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full h-64 resize-none sm:text-sm border border-gray-300 rounded-md" placeholder="Viết nội dung tại đây...">${foundNews.content}</textarea>
              </div>
            </div>

            <div>
              <label class="block text-sm font-bold text-gray-700">
                Photo
              </label>
              <div class="mt-1 flex items-center">
                <span class="inline-block w-fit overflow-hidden bg-gray-100">
                  <img src="${foundNews.image}">
                </span>
                <label for="change_image_news">
                    <span class="cursor-pointer ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Thay đổi
                    </span>
                    <input type="file" id="change_image_news" hidden>
                </label>
                
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Chỉnh sửa
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

<div class="hidden sm:block" aria-hidden="true">
  <div class="py-5">
    <div class="border-t border-gray-200"></div>
  </div>
</div>`;
    },
};

export default EditNews;