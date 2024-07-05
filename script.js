// Sample data for product information
const productData = {
    "DPC20243217": { department: "Electronics", status: "Request Pending" },
    "DPC20243218": { department: "Civil Engineering", status: "No Request Pending" },
    "DPC20243219": { department: "Electrical engineering", status: "Request Pending" },
	"DPC20243220": { department: "Machine Engineering", status: "Request Served" },
	"DPC20243221": { department: "Medical", status: "Request Pending" },
	"DPC20243222": { department: "Personal", status: "Request Pending" },
	"DPC20243223": { department: "Stores", status: "Request Served" },
	"DPC20243224": { department: "Safety Department", status: "Request Pending" },
	"DPC20243225": { department: "TTC", status: "Request Served" },
    // Add more product data as needed
};

function getProductInfo() {
    const productId = document.getElementById("productId").value;
    const resultDiv = document.getElementById("result");
    const departmentP = document.getElementById("department");
    const statusP = document.getElementById("status");

    if (productData[productId]) {
        const productInfo = productData[productId];
        departmentP.textContent = "Department: " + productInfo.department;
        statusP.textContent = "Status: " + productInfo.status;
        resultDiv.style.display = "block";
    } else {
        departmentP.textContent = "Department: N/A";
        statusP.textContent = "Status: N/A";
        resultDiv.style.display = "block";
    }
}
