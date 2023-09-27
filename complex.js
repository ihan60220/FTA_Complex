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
        for (let i = 1; i < 100; i++) {
            let x = radius * Math.cos(2 * Math.PI * i / 100) + 250;
            let y = radius * Math.sin(2 * Math.PI * i / 100) + 250;
            ctx_1.lineTo(x, y);
            ctx_1.stroke();
        };
    }


    const canvas_2 = document.getElementById("output");
    const ctx_2 = canvas_2.getContext("2d");
    

    function output(radius) {
        ctx_2.clearRect(0, 0, canvas_2.width, canvas_2.height);

        ctx_2.beginPath();
        ctx_2.moveTo(0, 250);
        ctx_2.lineTo(500, 250);
        ctx_2.stroke();
        ctx_2.moveTo(250, 0);
        ctx_2.lineTo(250, 500);
        ctx_2.stroke();



        ctx_2.moveTo(300, 250);
        // draws output map f(z) = z^2 + 10

        for (let i = 0; i < 100; i++) {
            let x = radius ** 2 * Math.cos(4 * Math.PI * i / 100) + 260;
            let y = radius ** 2 * Math.sin(4 * Math.PI * i / 100) + 250;
            ctx_2.lineTo(x, y);
            ctx_2.stroke();
        };
    }

    function draw() {
        let v = document.getElementById("myRange").value
        document.getElementById("inputmap").textContent = `Input Map |z| = ${v}`
        console.log(v)

        circle(10 * v)
        output(v)
    }