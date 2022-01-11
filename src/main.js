import Navigo from "navigo";
import Header from "./components/header";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import newsDetail from "./pages/newsDetail";
import activitiesDetail from "./pages/activitiesDetail";
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
        console.log(id);
        render(newsDetail.show(id));
    },
    "activities/:id": ({ data }) => {
        const { id } = data;
        render(activitiesDetail.show(id));
    },
});

route.resolve();