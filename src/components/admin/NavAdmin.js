import { DataMenu } from "../../DataAdmin";

const NavAdmin = {
    show: () => `<ul class="text-white flex" id="header_bottom">
                   ${DataMenu.map((e) => `<li class="display: inline;"><a href="${e.link}" class="m-5 hover:border-b-2">${e.name}</a></li>`).join("")}
                 </ul>`,
};

export default NavAdmin;