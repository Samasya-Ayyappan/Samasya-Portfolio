# Samasya T A — Portfolio

A responsive, single-page portfolio for frontend developer and software development engineer roles. It presents professional experience, selected projects, technical skills, education, and contact details in a clean, minimal layout.

## Portfolio sections

- Introduction and resume link
- About
- Professional experience
- Selected projects
- Technical skills and tools
- Education and certification
- Contact and social links

## Technology

The portfolio is built with React 19 and Create React App (`react-scripts` 5), using plain CSS for layout and styling. It includes bundled SVG skill icons and a PDF resume. The content references Next.js, TypeScript, and other technologies from Samasya's experience; those are portfolio subject matter, not dependencies used to build this site.

## Local setup

Node.js and npm are needed to use the npm commands below. Install the dependencies and start the development server:

```sh
npm install
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

Create a production build with:

```sh
npm run build
```

## Deployment

The project is configured for GitHub Pages at the `homepage` URL in `package.json`. The configured deployment script builds the app and publishes the `build` directory:

```sh
npm run deploy
```

This command uses the `gh-pages` development dependency and requires GitHub Pages deployment access.
