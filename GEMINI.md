# Project Overview

This is a React-based website for a DJ named Kevin Froger. The website is built with Vite and TypeScript, and it uses `react-router-dom` for routing and Tailwind CSS for styling. The project is configured with a strict TypeScript setup and includes a comprehensive routing system with code splitting for different pages.

## Project Structure

The project is structured into the following main directories:

*   `src/components`: Contains reusable components like the `Header`, `Footer`, and `ContactForm`.
*   `src/pages`: Contains the main pages of the website, such as the `HomePage`, `ContactPage`, and various pages for different services and regions.
*   `src/data`: Contains data files, such as a list of Dutch cities.
*   `public`: Contains static assets like images, sitemaps, and the `index.html` file.

## Building and Running

### Development

To run the project in development mode, use the following command:

```bash
npm run dev
```

This will start a development server with hot module replacement.

### Building for Production

To build the project for production, use the following command:

```bash
npm run build
```

This will create a `dist` directory with the optimized and minified production build.

### Linting

To lint the project files, use the following command:

```bash
npm run lint
```

## Development Conventions

*   **TypeScript:** The project uses a strict TypeScript configuration, which helps to ensure code quality and catch errors early.
*   **Routing:** The project uses `react-router-dom` for routing, with a clear structure for different pages and dynamic imports for code splitting.
*   **Styling:** The project uses Tailwind CSS for styling, which allows for rapid UI development.
*   **SEO:** The project is heavily optimized for SEO. It includes JSON-LD structured data, a large number of internal links to various SEO pages, and dynamically set page titles and meta descriptions.
*   **Icons:** The project uses `lucide-react` for icons.