import Navigo from "navigo";
import Header from "./components/header";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import newsDetail from "./pages/newsDetail";
import activitiesDetail from "./pages/activitiesDetail";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import AdminDashboard from "./admin/dashboard";
import AdminNews from "./admin/AdminNews";
import AdminUser from "./admin/AdminUser";
import AddNews from "./admin/AddNews";
import EditNews from "./admin/EditNews";
import Footer from "./components/footer";

const header = document.querySelector("#header");
const main = document.querySelector("#main");
const footer = document.querySelector("#footer");

const render = (content) => {
    header.innerHTML = Header.show();
    main.innerHTML = content;
    footer.innerHTML = Footer.show();
};

const route = new Navigo("/", { linksSelector: "a" });

route.on({
    "/": () => {
        render(HomePage.show());
    },
    "/about": () => {
        render(AboutPage.show());
    },
    "news/:id": ({ data }) => {
        const { id } = data;
        render(newsDetail.show(id));
    },
    "activities/:id": ({ data }) => {
        const { id } = data;
        render(activitiesDetail.show(id));
    },
    "/signin": () => {
        render(Signin.show());
    },
    "/signup": () => {
        render(Signup.show());
    },
    "/admin/dashboard": () => {
        render(AdminDashboard.show(AdminUser.show()));
    },
    "/admin/news": () => {
        render(AdminDashboard.show(AdminNews.show()));
    },
    "/admin/news/add": () => {
        render(AddNews.show());
    },
    "/admin/news/:id/edit": ({ data }) => {
        const { id } = data;
        render(EditNews.show(id));
    },
});

route.resolve();