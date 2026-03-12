// document.addEventListener("DOMContentLoaded", function () {

//   const productForm = document.querySelector("product-form-component form");

//   if (!productForm) return;

//   productForm.addEventListener("submit", function (event) {

//     const sizeType = document.querySelector('input[name="size-type"]:checked')?.value;

//     if (!sizeType) return;

//     let properties = {};

//     if (sizeType === "standard") {

//       const size = document.querySelector(".size-btn.active");
//       const height = document.querySelector(".height-dropdown .dropdown-selected")?.dataset.value;

//       if (!size) {
//         alert("Please select size");
//         event.preventDefault();
//         return;
//       }

//       if (!height) {
//         alert("Please select height");
//         event.preventDefault();
//         return;
//       }

//       properties["Size Type"] = "Standard";
//       properties["Standard Size"] = size.dataset.size;
//       properties["Height"] = height;

//     }

//     if (sizeType === "custom") {

//       const fields = document.querySelectorAll(".custom-field");

//       for (const field of fields) {

//         const label = field.querySelector("label").innerText;
//         const value = field.querySelector(".dropdown-selected")?.dataset.value;

//         if (!value) {
//           alert("Please select " + label);
//           event.preventDefault();
//           return;
//         }

//         properties[label] = value;

//       }

//       const height = document.querySelector(".height-dropdown .dropdown-selected")?.dataset.value;

//       if (!height) {
//         alert("Please select height");
//         event.preventDefault();
//         return;
//       }

//       properties["Size Type"] = "Custom";
//       properties["Height"] = height;

//       const optional = document.querySelectorAll(".optional-field");

//       optional.forEach(field => {

//         const label = field.querySelector("label").innerText;
//         const value = field.querySelector(".dropdown-selected")?.dataset.value;

//         if (value) {
//           properties[label] = value;
//         }

//       });

//     }

//     Object.keys(properties).forEach(key => {

//       const input = document.createElement("input");

//       input.type = "hidden";
//       input.name = "properties[" + key + "]";
//       input.value = properties[key];

//       productForm.appendChild(input);

//     });

//   });

// });