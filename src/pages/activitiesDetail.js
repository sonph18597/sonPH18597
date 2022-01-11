import { activities } from "../data";

const activitiesDetail = {
    show(id) {
        const found = activities.find((element) => element.id == id);

        return `<div>
            <h1 class="font-bold text-2xl my-5">${found.title}</h1>
            <img src="${found.image}" class="w-1/2"/>
            <p>${found.desc}</p>
            <p class="mt-5">${found.content}</p>
        </div>`;
    },
};

export default activitiesDetail;