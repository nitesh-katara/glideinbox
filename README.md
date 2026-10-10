<div align="center">
  <h1>GlideInbox</h1>
  <p><strong>A fast, brutalist, and entirely free disposable email generator.</strong></p>
</div>

<br />

GlideInbox is a modern, privacy-first web application that allows users to instantly generate temporary disposable email addresses without any registration. Built with a bold **neo-brutalist** design system, it seamlessly connects to the Guerrilla Mail API to receive real-time emails and archives them to Firebase Firestore.

## ✨ Features

- **Instant Generation**: Get a disposable email address in seconds. No registration required.
- **Multiple Domains**: Choose from multiple domains (e.g., `@sharklasers.com`, `@grr.la`).
- **Live Inbox**: Auto-refreshes every 5 seconds to fetch incoming emails.
- **Neo-Brutalist UI**: A striking, high-contrast user interface with heavy borders, solid shadows, and blocky typography.
- **Image Un-proxying**: Automatically decrypts and loads images hidden behind proxy servers.
- **HTML Downloads**: Download individual emails as beautifully formatted `.html` files tailored to the site's brutalist theme.
- **Firestore Archiving**: Silently and automatically logs received emails to a Firebase Firestore database.
- **Fully Responsive**: Flawless layout across desktops, tablets, and mobile devices with custom touch-friendly slide-out navigation.

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Database**: [Firebase Firestore](https://firebase.google.com/)
- **API**: [Guerrilla Mail API](https://www.guerrillamail.com/GuerrillaMailAPI.html)
- **Routing**: React Router DOM v7

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/glideinbox.git
   cd glideinbox/glideinbox-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Firebase:**
   By default, the project uses a predefined `src/firebase.ts` file. To connect your own Firebase project:
   - Create a project on the [Firebase Console](https://console.firebase.google.com/).
   - Enable **Firestore Database**.
   - Update `src/firebase.ts` with your own project's configuration keys.

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Design System

GlideInbox utilizes a custom Neo-Brutalist design language powered by Tailwind CSS v4. Key design tokens include:
- `bg-grid`: A custom CSS repeating linear-gradient creating a subtle graph-paper background.
- Hard 4px to 8px solid black drop shadows (`shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`).
- Thick `border-2` and `border-4` solid black borders.
- Monospace/Grotesk typography pairings.
- Primary accent color: Bright Yellow (`#fde047`).

## 📜 Disclaimer & Privacy

GlideInbox relies on the public API provided by Guerrilla Mail. 
- Do not use temporary email addresses for sensitive information, financial accounts, or permanent registrations.
- Emails received via temporary domains are not password protected and can be viewed by anyone who knows the exact address.
- The developer assumes no liability for lost data or compromised accounts resulting from the use of this service.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
