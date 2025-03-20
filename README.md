# Velocity Dreams - Car Enthusiast Landing Page

A stunning, animated landing page for car enthusiasts featuring modern animations, parallax effects, and a responsive design.

## 🚀 Features

- Animated hero section with speed line effects
- GSAP-powered smooth scrolling and animations
- Framer Motion interactive elements
- Responsive design for all devices
- Tailwind CSS styling
- Modern glass-morphism UI elements

## 📋 Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd car-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

## 🖼️ Image Requirements

For best results, use high-quality images with the following specifications:

### Hero Background
- Place in: `public/images/hero-bg.jpg`
- Recommended size: 1920 x 1080px (16:9 ratio)
- High-quality image of a luxury car in motion
- Dark/moody atmosphere works best with the design

### Car Images
- Place in: `public/images/car-1.jpg`, `car-2.jpg`, etc.
- Recommended size: 800 x 600px
- High-quality images of exotic cars
- Consistent style/lighting for a cohesive look

## 🎨 Customization

### Colors
Edit the Tailwind configuration file `tailwind.config.js` to change the color scheme:

```js
colors: {
  'racing-red': '#FF0000', // Primary accent color
  'midnight-blue': '#0A1128', // Dark background color
  'silver-metallic': '#C0C0C0', // Secondary accent color
  'carbon-black': '#1A1A1A', // Main background color
},
```

### Fonts
The site uses Racing Sans One for headings and Roboto for body text. You can change these in the `tailwind.config.js` file and update the Google Fonts import in `public/index.html`.

## 🔧 Project Structure

```
car-landing/
├── public/
│   ├── images/              # All site images
│   │   ├── hero-bg.jpg      # Hero background
│   │   ├── car-1.jpg        # Car gallery images
│   │   ├── car-2.jpg
│   │   └── car-3.jpg
│   ├── index.html           # HTML template
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Gallery.jsx      # Car gallery
│   │   ├── Footer.jsx       # Page footer
│   ├── styles/              # CSS styles
│   │   ├── global.css       # Global styles
│   │   ├── animations.css   # Animation classes
│   ├── App.jsx              # Main app component
│   └── index.js             # React entry point
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind CSS config
└── README.md                # Project documentation
```

## 🛠️ Technologies Used

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)

## 📱 Responsive Design

The site is fully responsive with:
- Mobile-first approach
- Tailwind CSS breakpoints
- Optimized animations for mobile devices
- Adaptive layout for different screen sizes 