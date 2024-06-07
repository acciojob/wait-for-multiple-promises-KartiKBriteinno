//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const outputElement = document.getElementById("output");

  // Helper function to create a promise that resolves after a random time between 1 and 3 seconds
  function createPromise(name) {
    const time = Math.random() * 2 + 1;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name, time });
      }, time * 1000);
    });
  }

  // Create three promises
  const promises = [
    createPromise("Promise 1"),
    createPromise("Promise 2"),
    createPromise("Promise 3"),
  ];

  const startTime = performance.now();

  // Use Promise.all() to wait for all promises to resolve
  Promise.all(promises).then((results) => {
    const endTime = performance.now();
    const totalTime = ((endTime - startTime) / 1000).toFixed(3);

    // Clear the loading text
    outputElement.innerHTML = "";

    // Add rows for each promise result
    results.forEach((result) => {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const timeCell = document.createElement("td");

      nameCell.textContent = result.name;
      timeCell.textContent = result.time.toFixed(3);

      row.appendChild(nameCell);
      row.appendChild(timeCell);
      outputElement.appendChild(row);
    });

    // Add the total time row
    const totalRow = document.createElement("tr");
    const totalNameCell = document.createElement("td");
    const totalTimeCell = document.createElement("td");

    totalNameCell.textContent = "Total";
    totalTimeCell.textContent = totalTime;

    totalRow.appendChild(totalNameCell);
    totalRow.appendChild(totalTimeCell);
    outputElement.appendChild(totalRow);
  });
});
