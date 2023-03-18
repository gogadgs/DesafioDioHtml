// seção de entrada de dados cmo objetos // 

const data = {
    name: "Clinica ABC",
    children: [
        {
            name: "Gerência",
            children: [
                { name: "Gerente Geral", value: 1 },
                { name: "Gerente Financeiro", value: 1 },
                { name: "Gerente de Operações", value: 1 },
                { name: "Gerente de Marketing", value: 1 }
            ]
        },
        {
            name: "Atendimento",
            children: [
                { name: "Médico Veterinário", value: 10 },
                { name: "Atendente de Consultório", value: 5 },
                { name: "Técnico em Enfermagem Veterinária", value: 3 }
            ]
        },
        {
            name: "Serviços",
            children: [
                { name: "Banho e Tosa", value: 6 },
                { name: "Hospedagem", value: 4 }
            ]
        }
    ]
};


const treemap = data =>
    d3.treemap()
        .size([600, 400])
        .padding(3)
        .round(true)
        (d3.hierarchy(data)
            .sum(d => d.value)
            .sort((a, b) => b.value - a.value));


const svg = d3.select("#treemap")
    .append("svg")
    .attr("viewBox", [0, 100, 800, 400])
    .style("width", "100%")
    .style("margin-left", "0.5rem")
  .style("margin-right", "0%")
  .style("margin-top", "0.2%");
   

svg.selectAll("rect")
    .data(treemap(data).leaves())
    .join("rect")
    .attr("fill", d => d.parent.data.name === "Gerência" ? "#f04" : d.parent.data.name === "Atendimento" ? "#5cb85c": d.parent.data.name === "Serviços" ? "orange":"null")
    .attr("x", d => d.x0)
    .attr("y", d => d.y0)
    .attr("width", d => d.x1 - d.x0)
    .attr("height", d => d.y1 - d.y0);

svg.selectAll("text")
    .data(treemap(data).leaves())
    .join("text")




