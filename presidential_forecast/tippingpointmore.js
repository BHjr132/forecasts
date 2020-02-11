var category = ["Trump", "Democrats", "3rd Party"]
// since Category B and E are really close to each other, assign them diverging colors
var colorScale = d3.scaleOrdinal()
  .domain(category)
  .range(["#FF6060", "#0091FF", "#FFE130"])

d3.csv("Sheet2.csv", function (error, data) {



  var svg = d3.select("#more").append("svg")
    .attr("viewBox", '0 552.5 1000 1200')
    .append('g')


  svg.append("text")
    .text("State")
    .attr("x", 0)
    .attr("y", 60)
    .style("fill", "Black")
    .style("font-size", 15)
    .attr("font-weight", 300)

  svg.append("text")
    .text("Margin")
    .attr("x", 850)
    .attr("y", 60)
    .style("fill", "Black")
    .style("font-size", 15)
    .attr("font-weight", 300)
    .attr("text-anchor", "middle")

  svg.append("text")
    .text("Tipping Point")
    .attr("x", 950)
    .attr("y", 60)
    .style("fill", "Black")
    .style("font-size", 15)
    .attr("font-weight", 300)
    .attr("text-anchor", "middle")

  svg.append("text")
    .text("+100")
    .attr("x", 200)
    .attr("y", 60)
    .style("fill", "#0091FF")
    .style("font-size", 10)
    .attr("font-weight", 700)
    .attr("text-anchor", "middle")

  svg.append("text")
    .text("+75")
    .attr("x", 275)
    .attr("y", 60)
    .style("fill", "#0091FF")
    .style("font-size", 10)
    .attr("font-weight", 700)
    .attr("text-anchor", "middle")

  svg.append("text")
    .text("+50")
    .attr("x", 350)
    .attr("y", 60)
    .style("fill", "#0091FF")
    .style("font-size", 10)
    .attr("font-weight", 700)
    .attr("text-anchor", "middle")

  svg.append("text")
    .text("+25")
    .attr("x", 425)
    .attr("y", 60)
    .style("fill", "#0091FF")
    .style("font-size", 10)
    .attr("font-weight", 700)
    .attr("text-anchor", "middle")

  svg.append("text")
    .text("EVEN")
    .attr("x", 500)
    .attr("y", 60)
    .style("fill", "black")
    .style("font-size", 10)
    .attr("font-weight", 700)
    .attr("text-anchor", "middle")

  svg.append("text")
    .text("+100")
    .attr("x", 800)
    .attr("y", 60)
    .style("fill", "#FF6060")
    .style("font-size", 10)
    .attr("font-weight", 700)
    .attr("text-anchor", "middle")

  svg.append("text")
    .text("+75")
    .attr("x", 725)
    .attr("y", 60)
    .style("fill", "#FF6060")
    .style("font-size", 10)
    .attr("font-weight", 700)
    .attr("text-anchor", "middle")

  svg.append("text")
    .text("+50")
    .attr("x", 650)
    .attr("y", 60)
    .style("fill", "#FF6060")
    .style("font-size", 10)
    .attr("font-weight", 700)
    .attr("text-anchor", "middle")

  svg.append("text")
    .text("+25")
    .attr("x", 575)
    .attr("y", 60)
    .style("fill", "#FF6060")
    .style("font-size", 10)
    .attr("font-weight", 700)
    .attr("text-anchor", "middle")

  svg.append("line")
    .attr("x1", 500)
    .attr("x2", 500)
    .attr("y1", 70)
    .attr("y2", 2500)
    .attr("stroke-width", 1)
    .attr("stroke", "black")


  svg.append("line")
    .attr("x1", 0)
    .attr("x2", 1000)
    .attr("y1", 70)
    .attr("y2", 70)
    .attr("stroke-width", 1)
    .attr("stroke", "black")

    svg.append("line")
    .attr("x1", 200)
    .attr("x2", 200)
    .attr("y1", 70)
    .attr("y2", 2500)
    .attr("stroke-width", .7)
    .attr("stroke", "#E2E2E2")
    svg.append("line")
    .attr("x1", 275)
    .attr("x2", 275)
    .attr("y1", 70)
    .attr("y2", 2500)
    .attr("stroke-width", .7)
    .attr("stroke", "#E2E2E2")
    svg.append("line")
    .attr("x1", 350)
    .attr("x2", 350)
    .attr("y1", 70)
    .attr("y2", 2500)
    .attr("stroke-width", .7)
    .attr("stroke", "#E2E2E2")

    svg.append("line")
    .attr("x1", 435)
    .attr("x2", 425)
    .attr("y1", 70)
    .attr("y2", 2500)
    .attr("stroke-width", .7)
    .attr("stroke", "#E2E2E2")

    svg.append("line")
    .attr("x1", 575)
    .attr("x2", 575)
    .attr("y1", 70)
    .attr("y2", 2500)
    .attr("stroke-width", .7)
    .attr("stroke", "#E2E2E2")

    svg.append("line")
    .attr("x1", 650)
    .attr("x2", 650)
    .attr("y1", 70)
    .attr("y2", 2500)
    .attr("stroke-width", .7)
    .attr("stroke", "#E2E2E2")

    svg.append("line")
    .attr("x1", 725)
    .attr("x2", 725)
    .attr("y1", 70)
    .attr("y2", 2500)
    .attr("stroke-width", .7)
    .attr("stroke", "#E2E2E2")

    svg.append("line")
    .attr("x1", 800)
    .attr("x2", 800)
    .attr("y1", 70)
    .attr("y2", 2500)
    .attr("stroke-width", .7)
    .attr("stroke", "#E2E2E2")

  var svgLegend = svg.append('g')
    .attr('class', 'gLegend')
    .attr("transform", "translate(" + 0 + "," + 90 + ")")



  var legend = svgLegend.selectAll('.legend')
    .data(data)
    .enter().append('g')
    .attr("class", "legend")
    .attr("transform", function (d, i) { return "translate(0," + i * 30 + ")" })



  legend.append("text")
    .attr("class", "legend-text")
    .attr("x", 0)
    .attr("y", 0)
    .style("fill", "Black")
    .style("font-size", 15)
    .attr("font-weight", 700)
    .text(d => d.state)
    .attr("text-anchor", "start")


  legend.append("rect")
    .attr("x", d => d.lmargin)
    .attr("y", -17.5)
    .attr("width", d => d.width)
    .attr("height", 25)
    .attr("fill", d => d.actmargin > 0 ? "#FF6060" : "#0091FF")
    .attr("opacity", .5)






  legend.append("text")
    .attr("class", "legend-text")
    .attr("x", 850)
    .attr("y", 0)
    .style("fill", d => d.actmargin > 0 ? "#FF6060" : "#0091FF")
    .style("font-size", 15)
    .attr("font-weight", 700)
    .text(d => d.actmargin > 0 ? "R+" + d.actmargin : "D+" + Math.abs(d.actmargin))
    .attr("text-anchor", "middle")

  legend.append("text")
    .attr("class", "legend-text")
    .attr("x", 950)
    .attr("y", 0)
    .style("fill", "black")
    .style("font-size", 15)
    .attr("font-weight", 700)
    .text(d => d.tippingPoint >.1 ? d.tippingPoint + "%":"<0.1%")
    .attr("text-anchor", "middle")

  legend.append("line")
    .attr("x1", 0)
    .attr("x2", 1000)
    .attr("y1", 10)
    .attr("y2", 10)
    .attr("stroke-width", 1)
    .attr("stroke", "#E2E2E2")

  svg.append("line")
    .attr("x1", 500)
    .attr("x2", 500)
    .attr("y1", 70)
    .attr("y2", 2500)
    .attr("stroke-width", 1)
    .attr("stroke", "black")


  legend.append("circle")
    .attr("cx", d => d.absmargin)
    .attr("cy", -5)
    .attr("r", 5)
    .attr("stroke", "Black")
    .attr("stroke-width", 2)
    .attr("fill", d => d.actmargin > 0 ? "#FF6060" : "#0091FF")
    .attr("opacity", 1)
    legend.append("a")
    .attr("xlink:href", function(d) {return d.state})
    .append("rect")
    .attr("x", 0)
    .attr("y", -20)
    .attr("width", 1000)
    .attr("height", 30)
    .attr("fill", "white")
    .attr("opacity", 0)
});