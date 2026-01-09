## Author: Edoardo Sabatini  
## Date: 09-01-2026  
## Project: FractionLayer  

---

# FractionLayer - Go Backend  

Lightweight Go REST service for the FractionLayer ecosystem.  
Built with [Fiber](https://gofiber.io) for fast JSON APIs.

## Stack
- **Language**: Go 1.22.2  
- **Framework**: Fiber v2.52.10  
- **Port**: 3000 (configurable via `PORT` env)  
- **Endpoints**:  
  - `GET /ping` → liveness probe  

## Quick start
```bash
git clone https://github.com/edosaba/FractionLayer.git
cd FractionLayer/fractionlayer-backend
go mod tidy
go run main.go
```

### Server boot log:

```bash
Server listening on :3000
Fiber v2.52.10 http://127.0.0.1:3000
```

### Test:

```bash
curl localhost:3000/ping
{"service":"fractionlayer-backend","status":"ok"}
```

## Roadmap
- Docker multi-stage build
- Prometheus metrics
- JWT middleware
- React proxy (/api → localhost:3000)

## License
Same as FractionLayer root project.
