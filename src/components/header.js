import Nav from "./nav";

const Header = {
    show: () => `<header>
                    <div class= "bg-blue-900">
                        <img src="https://picsum.photos/100/70" class="m-auto py-3" alt="" />
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