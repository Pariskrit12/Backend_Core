import httpProxy from "http-proxy";
import http from "http";
const servers = [
  "http://localhost:5001",
  "http://localhost:5002",
  "http://localhost:5003",
];

let currentIndex = 0;

const proxy = httpProxy.createProxyServer();

const server = http.createServer((req, res) => {
  const target = servers[currentIndex];
  currentIndex = (currentIndex + 1) % servers.length;
  console.log(`forwarding request to ${target}`);

  proxy.web(req, res, { target });
});
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Loadbalancer Running on Port:${PORT} `);
});


// Client → Load balancer at 8000

// Load balancer picks backend server using round robin

// Load balancer calls proxy.web(req, res, { target })

// Proxy forwards request to backend server (e.g., 5001)

// Backend server responds

// Proxy sends the response back to the original client