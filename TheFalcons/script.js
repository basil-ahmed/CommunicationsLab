window.addEventListener("load", () => {

    console.log("BASIL BOSS");

    let panels = document.getElementById("panels");
    let svg = document.getElementById("svg");
    let flying = document.getElementById("flying");
    let panel1 = document.getElementById("panel1");
    let findx = document.getElementById("findx");
    let panel2 = document.getElementById("panel2");
    let gym = document.getElementById("gym");
    let panel3 = document.getElementById("panel3");
    let d2 = document.getElementById("d2");
    let panel4 = document.getElementById("panel4");
    let lib = document.getElementById("lib");
    let panel5 = document.getElementById("panel5");

    flying.addEventListener("click", () => {

        panel1.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        
    })

    panels.addEventListener("click", () => {

        svg.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
    })

    findx.addEventListener("click", () => {

        panel2.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        
    })

    gym.addEventListener("click", () => {

        panel3.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        
    })

    d2.addEventListener("click", () => {

        panel4.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        
    })

    lib.addEventListener("click", () => {

        panel5.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        
    })

})