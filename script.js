function submitImage() {
    var input = document.getElementById('chooseImage');
    var file = input.files[0];

    if (file) {
        // Get the file name without extension
        var fileName = file.name.split('.')[0];
        console.log('Selected File Name:', fileName);

        // Find the corresponding item in the JSON data based on item ID
        var selectedItem = jsonData.find(item => item['item id'] === fileName);

        // Display result
        var selectedItemInfoDiv = document.getElementById('selectedItemInfo');
        if (selectedItem) {
            selectedItemInfoDiv.innerHTML = `
                <p><strong>Item ID:</strong> ${selectedItem['item id']}</p>
                <p><strong>Item Description:</strong> ${selectedItem['item description id']}</p>
                <p><strong>Item Image URL:</strong> ${selectedItem['item image url id']}</p>
                <!-- Add more details as needed -->
            `;
        } else {
            selectedItemInfoDiv.innerHTML = 'Item not found in the JSON data.';
        }
    } else {
        alert('Please choose an image.');
    }
}
