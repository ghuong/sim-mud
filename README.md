# Group Chat Server

## About

This the server component for an anonymous real-time group chat. There is a corresponding [web client](https://github.com/ghuong/group-chat-client).

## Getting Started

### Prerequisites

1. Have npm installed

2. Clone both this server project, and the matching [web client project](https://github.com/ghuong/group-chat-client) into the same directory (but _not_ one inside the other):

```git
git clone https://github.com/ghuong/group-chat-server.git
git clone https://github.com/ghuong/group-chat-client.git
```

3. Read the [client's README](https://github.com/ghuong/group-chat-client) to prepare it.

4. Have MongoDB running locally (or edit MONGODB_URI environment variable in .env)

### Installing

For a quick start, run this in the server project's directory:

```bash
npm run quickstart
```

This will:

1. Install dependencies:

```bash
npm install
```

2. Create a basic .env file (dev. environment variables):

```bash
cp .env.example .env
```

3. Build the client project (see Prerequisites), and copy it into build/web: 

```bash
npm run build:ui
```

4. Run tests (make sure they pass):

```
npm test
```

5. Start server (with live reload) at http://localhost:4001: 

```bash
npm start
```

See `package.json` for the npm scripts.

## Usage

Add notes about how to use the system.

## License

[MIT License](https://github.com/ghuong/simmud/blob/main/LICENSE)
