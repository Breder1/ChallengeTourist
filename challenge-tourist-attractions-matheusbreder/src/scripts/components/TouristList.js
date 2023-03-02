export class TouristList {
    constructor() {
        this.list = [];
        this.selectors();
        this.events();
    }

    selectors() {
        this.form = document.querySelector(".tourist-form");
        this.TitleInput = document.querySelector(".tourist-form-title-input");
        this.DescriptionInput = document.querySelector(
            ".tourist-form-description-input"
        );
        this.items = document.querySelector(".tourist-name");
        this.div_preview = document.querySelector(".tourist-form-img-wrapper");
        this.preview = document.querySelector("#preview");
        this.img_input = document.querySelector("#imgInp");
    }

    events() {
        this.img_input.addEventListener("change", this.readImage, false);
        this.form.addEventListener("submit", this.addItemToList);
        this.div_preview.addEventListener("click", () => {
            document.getElementById("imgInp").click();
        });
    }

    readImage() {
        if (this.files && this.files[0]) {
            var file = new FileReader();
            file.onload = function (e) {
                document.getElementById("preview").src = e.target.result;
            };
            file.readAsDataURL(this.files[0]);
        }
    }

    addItemToList = (event) => {
        event.preventDefault();

        const touristName = event.target["titulo"].value;
        const touristDescription = event.target["descricao"].value;
        const file = event.target["imgInp"].files[0];

        if (touristName != "") {
            const item = {
                touristName,
                touristDescription,
                img_src: URL.createObjectURL(file),
            };

            this.list.push(item);
            this.renderListItems();
            this.resetInputs();
        }
    };
    renderListItems() {
        let itemsStructure = "";
        this.list.forEach(function (item) {
            itemsStructure += `

        <li class="tourist-infocard-wrapper">
          <img
              class="tourist-infocard-images"
              src="${item.img_src}"
          />
          <div class="tourist-sd-infocard">
            <div class="subtitle-infocard">
              <h3 class="subtitle-cards"> ${item.touristName}</h3>
            </div>
            <div class="description-infocard">
              <p class="description-cards">
              ${item.touristDescription}
              </p>
          </div>
        </li>
`;
        });

        this.items.innerHTML = itemsStructure;
    }

    resetInputs() {
        this.TitleInput.value = "";
        this.DescriptionInput.value = "";
    }
}
