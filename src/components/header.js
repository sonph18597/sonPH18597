import Nav from "./nav";

const Header = {
    show: () => `<header>

                    <div class= "bg-blue-900 flex justify-between items-center">
                        <a href="/admin/dashboard">
                            <i class="fas fa-key text-white ml-5 text-3xl cursor-pointer"></i>
                        </a>
                        <img src="https://picsum.photos/100/70" class="py-3" alt="" />
                        <a href="/signin">
                            <i class="fas fa-eye mr-5 text-3xl text-white cursor-pointer"></i>
                        </a>
                    </div>
                    <div class="bg-orange-500 py-2 flex justify-between">
                        ${Nav.show()}
                        <div class="search">
                        <input type="text" class="mr-2">
                        <input type="button" class="cursor-pointer bg-blue-900 text-white px-2 mr-4" value="Tìm kiếm">
                        </div>
                    </div>
                </header>`,
};

export default Header;