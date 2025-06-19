### 📄 **README.md**

# 🖼️ Image Editor - JavaScript Project

A simple and intuitive image editor built with **HTML**, **CSS**, and **JavaScript**. It allows users to upload an image, apply visual filters, rotate or flip it, and download the edited result directly from the browser — all without needing any backend or external libraries.

---

## 📸 Features

- Upload and preview any local image
- Apply real-time CSS filters:
  - Brightness
  - Contrast
  - Saturation
  - Grayscale
  - Inversion
- Adjust filter values with a dynamic slider
- Rotate image (left or right)
- Flip image horizontally or vertically
- Reset all filters and transformations with one click
- Download the edited image as a `.png` file

---

## 🚀 Technologies Used

- **HTML5**: Structure of the page
- **CSS3**: Styling and layout, with custom properties and responsive design
- **Vanilla JavaScript (ES6+)**: All interactivity and logic (no libraries/frameworks)
- **Canvas API**: Used to render and download the final transformed image

---

## 🧩 How to Use

### 1. Just click on the link: https://image-editor-three-ebon.vercel.app

## 🗂️ Project Structure

```
image-editor/
│
├── css/
│   └── style.css           # All styles and responsive design
│
├── js/
│   └── script.js           # Core image editor logic (filters, canvas, saving)
│
├── img/
│   └── default.png         # Default placeholder image
│
├── index.html              # Main HTML file
└── README.md               # Project documentation
```

---

## ✅ Current Limitations

* Only `.png` image downloads are supported (via `canvas.toDataURL()`).
* Edits are not saved in session/localStorage.
* Filters do not stack or apply selectively (they always apply to the whole image).

---

## 💡 Possible Improvements

* Add drag & drop for image upload
* Support other filters (blur, sepia, hue-rotate)
* Responsive preview resizing with zoom
* Undo/redo history system
* Allow saving as JPEG or WEBP
* Add support for touch gestures (mobile usability)
* Dark mode toggle

---

## 🙌 Acknowledgements

* Icons provided by [Boxicons](https://boxicons.com/)
* Project inspired by basic concepts from online image editors and JS canvas tutorials

---

## 🧠 Author

Made with 💻 by **\[Gabriel Henrique]**
GitHub: [@Mushroom6228]([https://github.com/seu-usuario](https://github.com/Mushroom6228))
Project initiated in: **June 2025**

---

## 📄 License

This project is open source and free to use under the [MIT License](LICENSE).
