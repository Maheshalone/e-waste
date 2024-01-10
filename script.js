// Include the JSON data
var jsonData = [
 {
  "index": 1,
  "item id": "battery",
  "item description id": "this is my battery",
  "item image url id": "https:\/\/blogger.googleusercontent.com\/img\/b\/R29vZ2xl\/AVvXsEilljPC6F11Knb1rQC0PhS8OXJ94UgAbVQWJeSjSA4x90I-JxUmcbjv1LCTqrniFMrzikX5fE1Kx2F6YwfpWdI0-GqgQ1xQ9XzZYrcKH7zsx5WRXZcXAt44lhCUg0pUDqkzMPac40CfQsPI8R-yPlQaFg18yj-1BiQ4UccF0N3fAOm8MqgA5aEebu7_4-bR\/s274\/battery.jpeg"
 },
 {
  "index": 2,
  "item id": "printer",
  "item description id": "this is my printer",
  "item image url id": "https:\/\/blogger.googleusercontent.com\/img\/b\/R29vZ2xl\/AVvXsEgTDi7A_jkTaGJYOoEgRZhiI2pDt4vwKfPAZEDqJrIf0OFl5DZT-vBHdRJmhxDSCIfR1gOMQwyBdrZYhx0D-zzqw7BY5WRW5evRaWLRoGmZnVZcxbCxzFleLX6AE6lP0S7z2dEqTQfe8NE59fbsHBC1KZJDJktrw7pXfSf6KVMYRnkqAbtrxSsHCH6Qmb5y\/s500\/printer.jpg"
 },
 {
  "index": 3,
  "item id": "scanner",
  "item description id": "this is my scanner",
  "item image url id": "https:\/\/blogger.googleusercontent.com\/img\/b\/R29vZ2xl\/AVvXsEjZtblBHRn8I-8-TKdkR3FTkStLbJ96wQ9PmSPvb1caTNXuuI9vw973Uasye0wM_rLEJ2lUSVNTAWx0-nuqunxhpF1vQAXGzOvz2cclF6q3SJbruc6PjjwV9AV5FYc72J_ETN2Ojan7eyW7U59NniWyh1uoDsTUX-r3nJ5vaT0hvT3Ho3SwxZYeJkTq8Nu4\/s256\/Untitled%20design%20(16).png"
 },
 {
  "index": 4,
  "item id": "cpu",
  "item description id": "this is my cpu",
  "item image url id": "https:\/\/blogger.googleusercontent.com\/img\/b\/R29vZ2xl\/AVvXsEghs1GiVjfDnQzfeTta1ygI4gLWvy58BFUImE_yT9k3mXilQsbr-oX0XYYdKKeCGgFY2mM2mOdSIKg2px_3q48BMTil58UFkaPr5ezhOJMlTxcqDwVs0mfEqMhOMl0iAHR08Djw27uAo0mw3vWAgbQx8cjNwuPmlFTINfGSFvP9zJrSjpXJs7IaLWh5UKo2\/s256\/Untitled%20design%20(15).png"
 },
 {
  "index": 5,
  "item id": "tv",
  "item description id": "this is my tv",
  "item image url id": "https:\/\/blogger.googleusercontent.com\/img\/b\/R29vZ2xl\/AVvXsEhUxvknnHFtwHwgcli-7zEQmpT54AYryJeRvUJ9XMJc0J5s1NAl7apUiQ9Pv6Iuybzdl_tm56Q42LWI9x_goLulqrkm05GStzX31rZ6UictqHfnRIuJIPbUWSxXtewj4AIPbG1bVdTEO1ZJZCNcJPwtUDT851gUuF0z8L9NaZsZ-CC8xOO2_x4DeDMwflTA\/s256\/Untitled%20design%20(17).png"
 }
];

function submitImage() {
    var input = document.getElementById('chooseImage');
    var file = input.files[0];

    if (file) {
        // Get the file name without extension
        var fileName = file.name.split('.')[0];
        console.log('Selected File Name:', fileName);

        // Log the entire JSON data array
        console.log('JSON Data:', jsonData);

        // Find the corresponding item in the JSON data
        var selectedItem = jsonData.find(item => item.item_id === fileName);
        console.log('Selected Item:', selectedItem);

        // Display result
        var selectedItemInfoDiv = document.getElementById('selectedItemInfo');
        if (selectedItem) {
            selectedItemInfoDiv.innerHTML = `
                <p><strong>Item ID:</strong> ${selectedItem.item_id}</p>
                <p><strong>Item Description:</strong> ${selectedItem.item_description_id}</p>
                <!-- Add more details as needed -->
            `;
        } else {
            selectedItemInfoDiv.innerHTML = 'Item not found in the JSON data.';
        }
    } else {
        alert('Please choose an image.');
    }
}
