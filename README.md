# 🚀 Mini Postman

A modern, lightweight API testing tool built with Next.js 16, React 19, and TypeScript. Inspired by Postman and Requestly, designed for developers who need a fast, clean interface for testing APIs.

![Mini Postman](https://img.shields.io/badge/Next.js-16.0.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)

## ✨ Features

- 🎯 **All HTTP Methods**: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS
- 📝 **Custom Headers**: Add, edit, and toggle custom request headers
- 📦 **JSON Body Editor**: Built-in JSON validation and formatting
- 🎨 **Beautiful UI**: Dark mode with zinc color scheme using shadcn/ui
- ⚡ **Fast & Responsive**: Smooth animations with Motion (Framer Motion)
- 📊 **Response Viewer**: Tabbed interface for Body, Headers, and Raw response
- 🕐 **Request History**: Automatically saves last 10 requests to localStorage
- ⌨️ **Keyboard Shortcuts**:
  - `Ctrl+Enter` (or `Cmd+Enter`) to send request
  - `Ctrl+K` (or `Cmd+K`) to focus URL bar
- 📋 **Copy Response**: One-click copy to clipboard
- 🔍 **Syntax Highlighting**: JSON responses with collapsible tree view
- 🚨 **Error Handling**: Comprehensive error messages for network, CORS, and validation issues
- 📱 **Mobile Friendly**: Responsive design that works on all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.3 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (zinc theme)
- **Animations**: Motion (Framer Motion)
- **HTTP Client**: Axios
- **JSON Viewer**: react-json-view-lite
- **Notifications**: Sonner
- **Icons**: Lucide React

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd mini-postman

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Usage

### Making a Request

1. **Select HTTP Method**: Choose from GET, POST, PUT, DELETE, PATCH, HEAD, or OPTIONS
2. **Enter URL**: Type or paste your API endpoint
3. **Add Headers** (optional): Switch to Headers tab and add custom headers
4. **Add Body** (optional): For POST/PUT/PATCH, switch to Body tab and enter JSON
5. **Click Send**: Or press `Ctrl+Enter` to send the request

### Example Requests

#### GET Request

```
Method: GET
URL: https://jsonplaceholder.typicode.com/posts/1
```

#### POST Request

```
Method: POST
URL: https://jsonplaceholder.typicode.com/posts
Headers:
  Content-Type: application/json
Body:
{
  "title": "Test Post",
  "body": "This is a test",
  "userId": 1
}
```

### Request History

- All requests are automatically saved to localStorage
- Click any history item to restore that request
- Maximum 10 requests are stored
- Clear all history with the "Clear All" button

### Keyboard Shortcuts

- `Ctrl+Enter` / `Cmd+Enter`: Send request
- `Ctrl+K` / `Cmd+K`: Focus URL input

## 🎨 Project Structure

```
mini-postman/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts
│   │   ├── page.tsx            # Main application page
│   │   └── globals.css         # Global styles & theme
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── BodyEditor.tsx      # JSON body editor with validation
│   │   ├── HeaderEditor.tsx    # Key-value header editor
│   │   ├── MethodSelector.tsx  # HTTP method dropdown
│   │   ├── RequestForm.tsx     # Tabbed request configuration
│   │   ├── RequestHistory.tsx  # Sidebar history panel
│   │   └── ResponseViewer.tsx  # Tabbed response display
│   ├── hooks/
│   │   └── useApiRequest.ts    # Custom hook for API logic
│   ├── lib/
│   │   ├── apiClient.ts        # Axios wrapper with error handling
│   │   └── utils.ts            # Utility functions (cn)
│   └── types/
│       └── index.ts            # TypeScript type definitions
├── public/                     # Static assets
└── package.json
```

## 🔧 Configuration

### Environment Variables

No environment variables required! The app runs entirely in the browser.

### CORS Issues

If you encounter CORS errors:

1. **Use CORS-enabled APIs**: Many public APIs like JSONPlaceholder support CORS
2. **Use a CORS proxy**: Services like `cors-anywhere` can proxy requests
3. **Enable CORS on your server**: Add appropriate CORS headers to your API

## 🧪 Testing APIs

### Recommended Public APIs for Testing

- **JSONPlaceholder**: `https://jsonplaceholder.typicode.com`
- **ReqRes**: `https://reqres.in/api`
- **HTTPBin**: `https://httpbin.org`
- **Dog API**: `https://dog.ceo/api`
- **Cat Facts**: `https://catfact.ninja`

## 🎯 Features in Detail

### Error Handling

The app handles various error scenarios:

- **Invalid URL**: Validates URL format before sending
- **Network Errors**: Detects connection issues, timeouts, DNS failures
- **CORS Errors**: Provides helpful messages and suggestions
- **Invalid JSON**: Real-time validation in body editor
- **HTTP Errors**: Displays status codes and error messages

### Response Display

- **Body Tab**: Formatted JSON with syntax highlighting and collapsible nodes
- **Headers Tab**: Clean key-value display of response headers
- **Raw Tab**: Plain text view of response body
- **Status Badge**: Color-coded status (green for 2xx, red for errors)
- **Response Time**: Millisecond-accurate timing

## 🚀 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🐛 Known Issues

- CORS limitations when testing APIs that don't support cross-origin requests
- localStorage has a 5-10MB limit (sufficient for 10 requests)

## 🔮 Future Enhancements

- [ ] Collections/Folders for organizing requests
- [ ] Environment variables support
- [ ] Request/Response export (JSON, cURL)
- [ ] Authentication helpers (Bearer, Basic, API Key)
- [ ] Query parameters editor
- [ ] File upload support
- [ ] WebSocket testing
- [ ] GraphQL support
- [ ] Dark/Light mode toggle
- [ ] Request chaining

## 📧 Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js 16 and React 19
