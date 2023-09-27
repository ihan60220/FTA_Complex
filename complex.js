const canvas_1 = document.getElementById("input");
const ctx_1 = canvas_1.getContext("2d");

function circle(radius) {
    ctx_1.clearRect(0, 0, canvas_1.width, canvas_1.height);

    ctx_1.beginPath();
    ctx_1.moveTo(0, 250);
    ctx_1.lineTo(500, 250);
    ctx_1.stroke();
    ctx_1.moveTo(250, 0);
    ctx_1.lineTo(250, 500);
    ctx_1.stroke();

    ctx_1.moveTo(250 + radius, 250);

    // draws circle
    for (let i = 0; i <= 100; i++) {
        let x = radius * Math.cos(2 * Math.PI * i / 100) + 250;
        let y = -1 * radius * Math.sin(2 * Math.PI * i / 100) + 250;
        ctx_1.lineTo(x, y);
        ctx_1.stroke();
    };
}


const canvas_2 = document.getElementById("output");
const ctx_2 = canvas_2.getContext("2d");
    
function evaluate(coefficients, r, t) {
    // evaluates the polynomial p(r * cis(t))
    // use euler's formula

    let x_result = 0;

    for (let i = 0; i < coefficients.length; i++) {
        // adds the (n - i)th term of the polynomial
        x_result += coefficients[i] * r ** (coefficients.length - 1 - i) * Math.cos((coefficients.length - 1 - i) * t);
    }
                
    let y_result = 0;

    for (let i = 0; i < coefficients.length - 1; i++) {
        // adds the (n - i)th term of the polynomial
        y_result += coefficients[i] * r ** (coefficients.length - 1 - i) * Math.sin((coefficients.length - 1 - i) * t);
    }

    return [x_result, -1 * y_result];
}

function root(array) {
    // given the list of complex values, it returns the value closest to the array
    // use the modulus squared of complex number
    let minval = array[0][0]**2 + array[0][1]**2;
    for (let i = 0; i < array.length; i++) {
        let modulus = array[i][0]**2 + array[i][1]**2;
        if (modulus < minval) {
            minval = modulus;
        }
    }

}


function output(coeffs, radius) {
    ctx_2.clearRect(0, 0, canvas_2.width, canvas_2.height);

    ctx_2.beginPath();
    ctx_2.moveTo(0, 250);
    ctx_2.lineTo(500, 250);
    ctx_2.stroke();
    ctx_2.moveTo(250, 0);
    ctx_2.lineTo(250, 500);
    ctx_2.stroke();



    ctx_2.moveTo(250, 250);
    // draws output map f(z) = z^2 + 10

    for (let i = 0; i <= 500; i++) {
        let t = 2 * Math.PI * i / 500;
        let result = evaluate(coeffs, radius, t);
        let x = result[0] + 250;
        let y = result[1] + 250;
        
        ctx_2.lineTo(x, y);
        ctx_2.stroke();
    };
}

function draw() {

    // get the normalized v-value
    let s = Number(document.getElementById("max-modulus").value);
    let v = Number(document.getElementById("myRange").value);
    v = v / 1000 * s;
    document.getElementById("inputmap").textContent = `Input Map |z| = ${v}`;

    let coeffs = document.getElementById("coefficients").value;
    coeffs = coeffs.split(" ").map(Number);


    circle(v / s * 250);
    output(coeffs, v);
    }