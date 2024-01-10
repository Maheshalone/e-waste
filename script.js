// Include the Excel data
var excelData = [
    {
        itemId: 'battery',
        itemName: 'Battery.png',
        itemDescription: 'This is a battery.'
    },
    // Add more items as needed
];

function uploadImage() {
    var input = document.getElementById('imageInput');
    var file = input.files[0];

    if (file) {
        // Get the file name without extension
        var fileName = file.name.split('.')[0];

        // Find the corresponding item in the Excel data
        var selectedItem = excelData.find(item => item.itemName === fileName);

        // Display result
        if (selectedItem) {
            document.getElementById('result').innerHTML = `
                <p><strong>Item ID:</strong> ${selectedItem.itemId}</p>
                <p><strong>Item Description:</strong> ${selectedItem.itemDescription}</p>
                <!-- Add more details as needed -->
            `;
        } else {
            document.getElementById('result').innerHTML = 'Item not found in the Excel data.';
        }
    } else {
        document.getElementById('result').innerHTML = 'Please select an image.';
    }
}
