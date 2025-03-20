const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('\x1b[36m%s\x1b[0m', '🏎️  Velocity Dreams - Setup Script');
console.log('\x1b[36m%s\x1b[0m', '====================================');
console.log('');

// Check if Node.js is installed
console.log('Checking Node.js installation...');
exec('node --version', (error, stdout, stderr) => {
  if (error) {
    console.error('\x1b[31m%s\x1b[0m', '❌ Node.js is not installed.');
    console.log('Please install Node.js from https://nodejs.org/ (version 14.0.0 or later)');
    process.exit(1);
  }

  const version = stdout.trim().replace('v', '');
  const majorVersion = parseInt(version.split('.')[0], 10);

  if (majorVersion < 14) {
    console.error('\x1b[31m%s\x1b[0m', `❌ Node.js version ${version} is too old.`);
    console.log('Please upgrade to Node.js 14.0.0 or later.');
    process.exit(1);
  }

  console.log('\x1b[32m%s\x1b[0m', `✅ Node.js ${version} is installed.`);

  // Check if npm is installed
  console.log('Checking npm installation...');
  exec('npm --version', (error, stdout, stderr) => {
    if (error) {
      console.error('\x1b[31m%s\x1b[0m', '❌ npm is not installed.');
      console.log('Please install npm (usually comes with Node.js)');
      process.exit(1);
    }

    console.log('\x1b[32m%s\x1b[0m', `✅ npm ${stdout.trim()} is installed.`);

    // Check if required directories exist, create if not
    console.log('Checking required directories...');
    const directories = [
      'public/images',
      'public/videos',
      'src/components',
      'src/styles',
    ];

    directories.forEach((dir) => {
      const fullPath = path.join(__dirname, dir);
      if (!fs.existsSync(fullPath)) {
        console.log(`Creating directory: ${dir}`);
        fs.mkdirSync(fullPath, { recursive: true });
      }
    });

    console.log('\x1b[32m%s\x1b[0m', '✅ All required directories exist.');

    // Check for image placeholders
    console.log('Checking for required image files...');
    const requiredImages = [
      'public/images/hero-bg.jpg',
      'public/images/car-1.jpg',
      'public/images/car-2.jpg',
      'public/images/car-3.jpg',
    ];

    const missingImages = requiredImages.filter(
      (img) => !fs.existsSync(path.join(__dirname, img))
    );

    if (missingImages.length > 0) {
      console.log('\x1b[33m%s\x1b[0m', '⚠️  The following image files are missing:');
      missingImages.forEach((img) => console.log(`   - ${img}`));
      console.log('See IMAGE_GUIDE.md for instructions on required images.');
    } else {
      console.log('\x1b[32m%s\x1b[0m', '✅ All required image files exist.');
    }

    // Install dependencies
    console.log('Installing dependencies... (this may take a few minutes)');
    exec('npm install', (error, stdout, stderr) => {
      if (error) {
        console.error('\x1b[31m%s\x1b[0m', '❌ Failed to install dependencies.');
        console.error(stderr);
        process.exit(1);
      }

      console.log('\x1b[32m%s\x1b[0m', '✅ Dependencies installed successfully.');
      console.log('');
      console.log('\x1b[36m%s\x1b[0m', '🎉 Setup complete!');
      console.log('');
      console.log('To start the development server, run:');
      console.log('\x1b[33m%s\x1b[0m', '  npm start');
      console.log('');
      console.log('For more information, see the README.md file.');
    });
  });
}); 