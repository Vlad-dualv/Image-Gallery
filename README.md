# 🖼️ Image Search App

A React application for searching images by keyword using the [Unsplash](https://unsplash.com/) API.

## ⚙️ Technologies

- **React** + **TypeScript**
- **Vite** — project bundler
- **Axios** — for making HTTP requests
- **CSS Modules** — for component styling
- **React Hot Toast** — for toast notifications
- **React Modal** — for modal window functionality
- **react-spinners** — for loading indicators

## 🚀 Features

- Search for images by keyword
- Image gallery with pagination
- Open images in a modal window
- Load additional images via "Load more" button
- Error handling for HTTP requests
- Toast notification if the search input is empty
- Loading indicator rendered below the gallery

## 🧩 Component Structure

### `SearchBar`
- Input field for the search keyword
- Submit button
- Shows a toast notification if the input is empty (via `react-hot-toast`)

### `ImageGallery`
- Renders a list of image cards (`ImageCard` components)
- Only renders if there are images loaded

### `ImageCard`
- Displays an image (`small` version)
- Opens a modal window on click

### `ImageModal`
- Rendered inside the `App` component
- Displays the large image (`regular` version)
- Closes on pressing `ESC` or clicking outside the modal

### `Loader`
- Displayed below the gallery while images are being fetched

### `ErrorMessage`
- Rendered instead of the gallery when an HTTP error occurs

### `LoadMoreBtn`
- "Load more" button
- Loads the next page of images and appends them
- Only shown when there are loaded images

## 📦 Installation

```bash
git clone https://github.com/your-username/image-search-app.git
cd image-search-app
npm install
npm run dev
