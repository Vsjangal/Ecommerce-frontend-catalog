# E-commerce Product Catalog

A modern, responsive e-commerce product catalog built with React, Redux Toolkit, and TypeScript. Features include live search, sorting, pagination, and dark mode support.

Hosted url: https://ecommerce-frontend-catalog.vercel.app/

## 🌟 Features

- **Responsive Design**
  - Grid layout for desktop
  - Single-column list for mobile
  - Fluid transitions between views

- **Product Management**
  - Live search functionality
  - Sort by price or rating
  - Ascending/descending order
  - Pagination support

- **UI/UX**
  - Dark/Light mode toggle
  - Loading states
  - Error handling
  - Responsive image loading
  - Star ratings visualization

- **Performance**
  - Optimized with React.memo
  - Memoized selectors
  - Lazy loading images
  - Efficient state management

## 🚀 Tech Stack

- React 18
- TypeScript
- Redux Toolkit
- Tailwind CSS
- Axios
- Lucide React Icons
- Vite

## 📦 Installation

1. Clone the repository:
```bash
[git clone <repository-url>](https://github.com/Vsjangal/Ecommerce-frontend-catalog.git)
```

2. Navigate to the project directory:
```bash
cd Ecommerce-frontend-catalog
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── ProductCard.tsx
│   ├── SearchBar.tsx
│   ├── SortControls.tsx
│   ├── Pagination.tsx
│   └── ThemeToggle.tsx
├── store/              # Redux store and slices
│   ├── store.ts
│   ├── productSlice.ts
│   └── themeSlice.ts
├── types/              # TypeScript interfaces
│   ├── product.ts
│   └── theme.ts
├── hooks/              # Custom React hooks
│   └── useProductFilters.ts
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## 🎨 Features in Detail

### Product Display
- Displays product image, title, price, and rating
- Responsive grid layout
- Hover effects and animations
- Category tags

### Search Functionality
- Real-time search as you type
- Searches through product titles
- Updates results instantly
- "No results found" state

### Sorting
- Sort by price (low to high, high to low)
- Sort by rating (low to high, high to low)
- Maintains sort state in Redux

### Theme Toggle
- System preference detection
- Persisted theme preference
- Smooth transitions
- Optimized for both light and dark modes

### Pagination
- Dynamic page calculation
- Responsive pagination controls
- Current page indication
- Automatic reset on search/filter

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for the product data
- [Tailwind CSS](https://tailwindcss.com/) for the styling system
- [Lucide React](https://lucide.dev/) for the beautiful icons
