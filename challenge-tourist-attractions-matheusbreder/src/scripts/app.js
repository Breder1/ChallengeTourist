import { TouristList } from "./components/TouristList";

document.addEventListener("DOMContentLoaded", function () {
    new TouristList();
    //   const list = [];
    //   const form = document.querySelector(".tourist-form");
    //   const TitleInput = document.querySelector(".tourist-form-title-input");
    //   const DescriptionInput = document.querySelector(
    //     ".tourist-form-description-input"
    //   );
    //   const items = document.querySelector(".tourist-name");
    //   const div_preview = document.querySelector(".tourist-form-img-wrapper");
    //   const preview = document.querySelector("#preview");
    //   const img_input = document.querySelector("#imgInp");
    //   img_input.onchange = (event) => {
    //     const [file] = imgInp.files;
    //     if (file) {
    //       preview.src = URL.createObjectURL(file);
    //       preview.style.display = "block";
    //     }
    //   };
    //   div_preview.addEventListener("click", () => {
    //     document.getElementById("imgInp").click();
    //   });
    //   form.addEventListener("submit", addItemToList);
    //   function readImage() {
    //     if (this.files && this.files[0]) {
    //       var file = new FileReader();
    //       file.onload = function (e) {
    //         document.getElementById("preview").src = e.target.result;
    //       };
    //       file.readAsDataURL(this.files[0]);
    //     }
    //   }
    //   document
    //     .getElementById("preview")
    //     .addEventListener("click", () => document.getElementById("imgInp").click());
    //   document
    //     .getElementById("imgInp")
    //     .addEventListener("change", readImage, false);
    //   function addItemToList(event) {
    //     event.preventDefault();
    //     console.log(event);
    //     const touristName = event.target["titulo"].value;
    //     const touristDescription = event.target["descricao"].value;
    //     const file = event.target["imgInp"].files[0];
    //     if (touristName != "") {
    //       const item = {
    //         touristName,
    //         touristDescription,
    //         img_src: URL.createObjectURL(file),
    //       };
    //       list.push(item);
    //       renderListItems();
    //       resetInputs();
    //     }
    //   }
    //   function renderListItems() {
    //     let itemsStructure = "";
    //     console.log(list);
    //     list.forEach(function (item) {
    //       itemsStructure += `
    //         <li class="tourist-infocard-wrapper">
    //           <img
    //               class="tourist-infocard-images"
    //               src="${item.img_src}"
    //           />
    //           <div class="tourist-sd-infocard">
    //             <div class="subtitle-infocard">
    //               <h3 class="subtitle-cards"> ${item.touristName}</h3>
    //             </div>
    //             <div class="description-infocard">
    //               <p class="description-cards">
    //               ${item.touristDescription}
    //               </p>
    //           </div>
    //         </li>
    // `;
    //     });
    //     items.innerHTML = itemsStructure;
    //   }
    //   function resetInputs() {
    //     TitleInput.value = "";
    //     DescriptionInput.value = "";
    //   }
});
