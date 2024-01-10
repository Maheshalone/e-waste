function submitImage() {
    var input = document.getElementById('chooseImage');
    var file = input.files[0];
    if (file) {
        var fileName = file.name.split('.')[0];
        var selectedItem = jsonData.find(item => item['item id'] === fileName);
        var selectedItemInfoDiv = document.getElementById('selectedItemInfo');
        if (selectedItem) {
            // Display result
            selectedItemInfoDiv.innerHTML = `
                <p><strong>Item ID:</strong> ${selectedItem['item id']}</p>
                <p><strong>Item Description:</strong> ${selectedItem['item description id']}</p>
                <p><strong>Item Image URL:</strong> ${selectedItem['item image url id']}</p>
            `;
        } else {
            // Display message if item not found
            selectedItemInfoDiv.innerHTML = 'Item not found in the JSON data.';
        }
    } else {
        // Alert if no image is chosen
        alert('Please choose an image.');
    }
}
