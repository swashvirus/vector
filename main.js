export default class {
    // {constructor}
    // {params}
    // {intager} x,
    // {intager} y
    // {description} creates an instance of a vector with x, y values
    // ------------------
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    // Returns vector values
    get() {
        return {
            x: this.x,
            y: this.y
        }
    }

    // Assings vector coordinates
    set(x, y) {
        this.x = x
        this.y = y
        return this
    }

    // It performs arithmetic operation on
    arithmetic(vector, operator) {
        this.x = operator(this.x, vector.x)
        this.y = operator(this.y, vector.y)

        return this
    }

    // Multiplication
    multiply(matrix) {
        return this.arithmetic(vector, (a, b) => {
            return a * b
        })
    }

    // Addition
    add(vector) {
        return this.arithmetic(vector, (a, b) => {
            return a + b
        })
    }

    // Division
    divide(vector) {
        return this.arithmetic(vector, (a, b) => {
            return a / b
        })
    }

    // Subtraction
    subtract(vector) {
        return this.arithmetic(vector, (a, b) => {
            return a - b
        })
    }
}