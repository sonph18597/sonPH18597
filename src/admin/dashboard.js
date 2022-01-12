import AdminUser from "./AdminUser";

const AdminDashboard = {
    show: (dataAdmin) => `
    <div class="flex flex-col">
    <h1 class="font-bold text-4xl text-blue-900 my-8 text-center">QUẢN TRỊ</h1>
    <div class="flex justify-around border mb-5">
        <a href="/admin/dashboard" class="font-bold text-xl text-neutral-700">Người dùng</a>
        <a href="/admin/news" class="font-bold text-xl text-neutral-700">Tin tức</a>
    </div>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <div id="data_table">${dataAdmin}</div>
        </div>
      </div>
    </div>
  </div>
    `,
};
export default AdminDashboard;