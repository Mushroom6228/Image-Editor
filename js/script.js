const newImgBtn = document.getElementById("newImg");
const inputFile = document.querySelector("input[type=file]");
const img = document.getElementById("previewImage");
const filterButtons = document.querySelectorAll(".filters-content button");
const rangeInput = document.getElementById("rangeControl");
const rangeValueLabel = document.getElementById("spnRangeValue");
const resetBtn = document.getElementById("btnResetFilters");
const saveBtn = document.getElementById("btnSalvar");

let rotate = 0;
let flipX = 1;
let flipY = 1;
let activeFilter = "Brightness";

const filters = {
  Brightness: { value: 100, max: 200 },
  Contrast: { value: 100, max: 200 },
  Saturation: { value: 100, max: 200 },
  Gray: { value: 0, max: 100 },
  Inversion: { value: 0, max: 100 }
};

function initEditor() {
  rotate = 0;
  flipX = 1;
  flipY = 1;
  activeFilter = "Brightness";

  for (const key in filters) {
    filters[key].value = key === "Brightness" || key === "Contrast" || key === "Saturation" ? 100 : 0;
  }

  updateUI();
  applyTransform();
  applyFilters();
}

function updateUI() {
  document.querySelector(".filters-content .active")?.classList.remove("active");
  const activeBtn = Array.from(filterButtons).find(btn => btn.textContent === activeFilter);
  if (activeBtn) activeBtn.classList.add("active");

  rangeInput.max = filters[activeFilter].max;
  rangeInput.value = filters[activeFilter].value;
  rangeValueLabel.textContent = `${filters[activeFilter].value}%`;
}

function applyFilters() {
  const { Brightness, Contrast, Saturation, Gray, Inversion } = filters;
  img.style.filter = `
    brightness(${Brightness.value}%) 
    contrast(${Contrast.value}%) 
    saturate(${Saturation.value}%) 
    grayscale(${Gray.value}%) 
    invert(${Inversion.value}%)
  `;
}

function applyTransform() {
  img.style.transform = `rotate(${rotate}deg) scale(${flipY}, ${flipX})`;
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.textContent;
    updateUI();
  });
});

rangeInput.addEventListener("input", () => {
  filters[activeFilter].value = parseInt(rangeInput.value);
  rangeValueLabel.textContent = `${rangeInput.value}%`;
  applyFilters();
});

newImgBtn.addEventListener("click", () => inputFile.click());

inputFile.addEventListener("change", () => {
  const file = inputFile.files[0];
  if (file) {
    img.src = URL.createObjectURL(file);
    initEditor();
  }
});

resetBtn.addEventListener("click", initEditor);

window.handleDirection = function (type) {
  switch (type) {
    case "rotateRight":
      rotate += 90;
      break;
    case "rotateLeft":
      rotate -= 90;
      break;
    case "reflectY":
      flipY *= -1;
      break;
    case "reflectX":
      flipX *= -1;
      break;
  }
  applyTransform();
};

saveBtn.addEventListener("click", () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  ctx.filter = `
    brightness(${filters["Brightness"].value}%) 
    contrast(${filters["Contrast"].value}%) 
    saturate(${filters["Saturation"].value}%) 
    grayscale(${filters["Gray"].value}%) 
    invert(${filters["Inversion"].value}%)
  `;

  ctx.translate(centerX, centerY);
  if (rotate !== 0) ctx.rotate((rotate * Math.PI) / 180);
  ctx.scale(flipY, flipX);
  ctx.drawImage(img, -centerX, -centerY, canvas.width, canvas.height);

  const link = document.createElement("a");
  link.download = "edited_image.png";
  link.href = canvas.toDataURL();
  link.click();
});

initEditor();
