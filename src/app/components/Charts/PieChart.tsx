import React, { useState, useRef, useEffect } from "react";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";
import { Col } from "react-bootstrap";

const pieChartData = [
  {
    title: "Class Code (SIMS)",
    data: [
      {
        name: "Above Target",
        value: 300,
        group: [
          "Mathew Briggs",
          "Kelley Moss",
          "Darrin Poole",
          "Bert Bender",
          "Bettye Olson",
        ],
        color: "#1bba9c",
      },
      {
        name: "On Target",
        value: 300,
        group: [
          "Elisabeth Levine",
          "Rosemary Salas",
          "Terry Dunlap",
          "Elijah Vang",
          "Sheryl Cuevas",
        ],
        color: "#edd557",
      },
      {
        name: "Below Target",
        value: 300,
        group: [
          "Stephen Stepney",
          "Margaret Mulvaney",
          "Philippa Mustoe",
          "Gemma Martin",
          "Tom Hart",
        ],
        color: "#ed6e1d",
      },
    ],
  },
  {
    title: "Class Code",
    data: [
      {
        name: "Above Target",
        value: 300,
        group: [
          "Mathew Briggs",
          "Kelley Moss",
          "Darrin Poole",
          "Bert Bender",
          "Bettye Olson",
        ],
        color: "#1bba9c",
      },
      {
        name: "On Target",
        value: 300,
        group: [
          "Elisabeth Levine",
          "Rosemary Salas",
          "Terry Dunlap",
          "Elijah Vang",
          "Sheryl Cuevas",
        ],
        color: "#edd557",
      },
      {
        name: "Below Target",
        value: 300,
        group: [
          "Stephen Stepney",
          "Margaret Mulvaney",
          "Philippa Mustoe",
          "Gemma Martin",
          "Tom Hart",
        ],
        color: "#ed6e1d",
      },
    ],
  },
  {
    title: "Class Code",
    data: [
      {
        name: "Above Target",
        value: 300,
        group: [
          "Mathew Briggs",
          "Kelley Moss",
          "Darrin Poole",
          "Bert Bender",
          "Bettye Olson",
        ],
        color: "#1bba9c",
      },
      {
        name: "On Target",
        value: 300,
        group: [
          "Elisabeth Levine",
          "Rosemary Salas",
          "Terry Dunlap",
          "Elijah Vang",
          "Sheryl Cuevas",
        ],
        color: "#edd557",
      },
      {
        name: "Below Target",
        value: 300,
        group: [
          "Stephen Stepney",
          "Margaret Mulvaney",
          "Philippa Mustoe",
          "Gemma Martin",
          "Tom Hart",
        ],
        color: "#ed6e1d",
      },
    ],
  },
];

const DARK_COLOR = "#00013a";

export default function MyPieCharts() {
  const [popup, setPopup] = useState({
    visible: false,
    x: 0,
    y: 0,
    data: null,
    color: "",
    chartIndex: null,
  });

  const [activeIndex, setActiveIndex] = useState({
    chartIndex: null,
    index: null,
  });

  const handlePieEvent = (data, index, e, chartIndex) => {
    const boundingRect = e.currentTarget.getBoundingClientRect();

    setPopup({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      data: data.payload,
      color: data.color,
      chartIndex: chartIndex,
    });

    setActiveIndex({ chartIndex, index });
  };

  const handlePieMouseOut = () => {
    setPopup((prev) => ({
      ...prev,
      visible: false,
    }));
    setActiveIndex({ chartIndex: null, index: null });
  };

  const getFillColor = (index, chartIndex, data) => {
    if (activeIndex.chartIndex === chartIndex && activeIndex.index !== index) {
      return DARK_COLOR; // Inactive sectors will have DARK_COLOR as fill
    }
    return data.color; // Active sector or default state returns original color
  };

  const getStrokeColor = (index, chartIndex, data) => {
    if (activeIndex.chartIndex === chartIndex && activeIndex.index !== index) {
      return data.color; // Inactive sectors will have their original color as stroke
    }
    return DARK_COLOR; // Active sector or default state has DARK_COLOR as stroke
  };

  const getStrokeWidth = (index, chartIndex, data) => {
    if (activeIndex.chartIndex === chartIndex && activeIndex.index !== index) {
      return 1;
    }
    return 5;
  };

  return (
    <>
      {pieChartData.map((chart, chartIndex) => (
        <Col key={chartIndex} xs={4} className="mb-1">
          <ResponsiveContainer
            width="100%"
            height={400}
            className="text-center"
          >
            <>
              <p className="chart-title" style={{ textAlign: "center" }}>
                {chart.title}
              </p>
              <PieChart width={386} height={380}>
                <Pie
                  data={chart.data}
                  cx="50%"
                  cy="50%"
                  outerRadius={125}
                  fill="#8884d8"
                  stroke="#00013a"
                  strokeWidth={10}
                  dataKey="value"
                  onMouseOver={(data, index, e) =>
                    handlePieEvent(data, index, e, chartIndex)
                  }
                  onMouseOut={handlePieMouseOut}
                >
                  {chart.data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={getFillColor(index, chartIndex, entry)}
                      stroke={getStrokeColor(index, chartIndex, entry)}
                      strokeWidth={getStrokeWidth(index, chartIndex, entry)}
                    />
                  ))}
                </Pie>
                {chartIndex == 0 ? (
                  <Legend
                    layout="vertical"
                    verticalAlign="bottom"
                    align="center"
                    wrapperStyle={{
                      padding: "10px",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  />
                ) : (
                  <Legend
                    layout="vertical"
                    verticalAlign="bottom"
                    align="center"
                    wrapperStyle={{
                      padding: "10px",
                      fontSize: "14px",
                      visibility: "hidden",
                    }}
                  />
                )}
              </PieChart>
              {popup.visible && popup.chartIndex === chartIndex && (
                <div
                  className="chart-popover"
                  style={{
                    top: popup.y,
                    left: popup.x,
                  }}
                >
                  <p style={{ color: popup.color }} className="mb-3">
                    {popup.data ? popup.data.name : ""}
                  </p>
                  <ul>
                    {popup.data && popup.data.group ? (
                      popup.data.group.map((name, i) => (
                        <li key={i} className="mb-3">
                          {name}
                        </li>
                      ))
                    ) : (
                      <li className="mb-4">No group data available</li>
                    )}
                  </ul>
                </div>
              )}
            </>
          </ResponsiveContainer>
        </Col>
      ))}
    </>
  );
}
