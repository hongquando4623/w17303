import { useEffect, router } from "../../lib";

const AdminProjectsAddPage = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectName = document.querySelector("#project-name");
        const projectAuthor = document.querySelector("#project-author");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            //tao projects moi
            const fromData ={
                name:projectName.value,
                author:projectAuthor.value,

            };
            //call api

            //settimeout
            fetch("http://localhost:3000/projects", { 
                method:"POST",
                headers:{
                "content-Type":"application/json",
            },
            body:JSON.stringify(fromData),
           
            }).then(()=>router.navigate("admin/projects"))
        });
    });
    return `<div class="container pt-5">
        <form action="" id="form-add">
            <div class="form-group">
                <label for="" class="form-label">Ten Dự án</label>
                <input type="text" class="form-control" id="project-name" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Tác giả</label>
                <input type="text" class="form-control" id="project-author" />
            </div>
            <button class="btn btn-primary">Thêm dự án</button>
        </form>
        </div>`;
};

export default AdminProjectsAddPage;
