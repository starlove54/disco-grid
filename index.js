// Declare variables to store grid dimensions, rectangle sizes, and Perlin noise parameters
let rows, cols
let sizes = []
let size = 28 // Initial size of each rectangle
let xoff, yoff
let incre = 0.1 // Increment for Perlin noise
let zoff = 0

function setup() {
  // Set up the canvas
  createCanvas(800, 800)
  // Calculate the number of rows and columns in the grid based on canvas size and rectangle size
  rows = width / size
  cols = height / size
  // Set rectangle mode to the center
  rectMode(CENTER)
}

function draw() {
  // Set the background to a light gray color
  background(220)

  // Initialize an empty array for each row in the grid
  for (let i = 0; i < rows; i++) {
    sizes[i] = []
  }

  // Nested loops to iterate through each cell in the grid
  for (let i = 0; i < rows; i++) {
    // Reset xoff for each row
    xoff = 0
    yoff = 0
    for (let j = 0; j < cols; j++) {
      // Use Perlin noise to map values to the size of each rectangle
      sizes[i][j] = map(noise(xoff, yoff, zoff), 0, 1, 0, size * 1.5)
      // Increment xoff for the next cell
      xoff += incre

      // Use Perlin noise for color values
      let r = noise(zoff) * 255
      let g = noise(zoff + 15) * 255
      let b = noise(zoff + 30) * 255

      // Set fill color and draw a rectangle at the specified position with the calculated size
      fill(r, g, b)
      noStroke()
      rect(size / 2 + i * size, size / 2 + j * size, sizes[i][j], sizes[i][j])
    }
    yoff += incre

    // Increment zoff for the next row to create variation over time
    zoff += 0.0003
  }
}
