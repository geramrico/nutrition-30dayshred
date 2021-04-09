function calories() {
    const weight = document.querySelector("#weight").value;
    const aDays = weight * 12;
    const bDays = aDays * 0.85;
    const cDays = bDays * 0.85;
    document.querySelector('.results').innerHTML = `
    <table>
        <thead>
        <caption style="caption-side:bottom">*Proteins, Carbs & Fats in grams/day</caption>
          <tr>
            <th></th>
            <th>A Days</th>
            <th>A+ Days</th>
            <th>B Days</th>
            <th>C Days</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Calories</td>
            <td>${Math.floor(aDays)}</td>
            <td>${Math.floor(aDays * 1.15)}</td>
            <td>${Math.floor(bDays)}</td>
            <td>${Math.floor(cDays)}</td>
          </tr>
          <tr>
            <td>Proteins</td>
            <td>${Math.floor(aDays * 0.4/4)}</td>
            <td>${Math.floor(aDays * 1.15 * 0.4/4)}</td>
            <td>${Math.floor(bDays * 0.4/4)}</td>
            <td>${Math.floor(cDays * 0.4/4)}</td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td>${Math.floor(aDays * 0.3/4)}</td>
            <td>${Math.floor(aDays * 1.15 * 0.3/4)}</td>
            <td>${Math.floor(bDays * 0.3/4)}</td>
            <td>${Math.floor(cDays * 0.3/4)}</td>
          </tr>
          <tr>
            <td>Fats</td>
            <td>${Math.floor(aDays * 0.3/9)}</td>
            <td>${Math.floor(aDays * 1.15 * 0.3/9)}</td>
            <td>${Math.floor(bDays * 0.3/9)}</td>
            <td>${Math.floor(cDays * 0.3/9)}</td>
          </tr>
        </tbody>
        </table>`;
}

function reset() {
    
    document.querySelector('.results').innerHTML = "";
}