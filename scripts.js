const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 3,
        borderColor: "#51459E",
        tension: 0.4,
      },
      {
        label: "# of Votes",
        data: [14, 10, 6, 7, 1, 5],
        borderWidth: 3,
        borderColor: "#84E8F4",
        tension: 0.4,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const monthlySales = document.getElementById("monthly-sales");

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  datasets: [
    {
      label: "Monthly Sales",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: ["#51459E", "#84E8F4"],
      borderColor: ["#51459E", "#84E8F4"],
      borderWidth: 1,
    },
  ],
};
new Chart(monthlySales, {
  type: "bar",
  data: data,
  options: {
    borderRadius: "5px",
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

var firstCustomer = document.getElementById("1-customer").getContext("2d");
var firstCustomer1 = {
  label: "", // No labels on x-axis
  datasets: [
    {
      labels: [],
      borderColor: "rgb(75, 192, 192)", // Custom color
      data: [10, 20, 25, 18, 30, 40],
      fill: false,
    },
  ],
};

// Chart options
var options = {
  scales: {
    x: {
      display: false, // Hide x-axis
      title: {
        display: false,
      },
    },
    y: {
      display: false, // Hide y-axis
      title: {
        display: false,
      },
    },
  },
};

new Chart(firstCustomer, {
  type: "line",
  data: firstCustomer1,
  options: options,
});
