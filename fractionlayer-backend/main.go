/**
 * File: main.go
 * Author: Edoardo Sabatini
 * Date: 09-01-2026
 * Project: FractionLayer
 * Description: Go-Fiber backend scaffolding for FractionLayer project.
 *              Provides RESTful endpoints for blockchain token operations.
 *              Microservice ready for containerization and cloud deployment.
 */
package main

import (
	"github.com/gofiber/fiber/v2"
	"log"
)

func main() {
	app := fiber.New()
	app.Get("/ping", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"status": "ok", "service": "fractionlayer-backend"})
	})
	log.Println("Server listening on :3000")
	app.Listen(":3000")
}
