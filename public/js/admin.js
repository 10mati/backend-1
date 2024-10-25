const createProductForm = document.querySelector("#create-product-form");
const updateProductForm = document.querySelector("#update-product-form");
const deleteProductForm = document.querySelector("#delete-product-form");

// Crear producto
createProductForm.onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(createProductForm);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            window.location.reload(); // Recargar la página para ver el nuevo producto
        } else {
            alert("Error al crear el producto");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

// Actualizar producto
updateProductForm.onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(updateProductForm);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch(`/api/products/${data.pid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            window.location.reload(); 
        } else {
            alert("Error al actualizar el producto");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

deleteProductForm.onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(deleteProductForm);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch(`/api/products/${data.pid}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            window.location.reload(); 
        } else {
            alert("Error al borrar el producto");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};