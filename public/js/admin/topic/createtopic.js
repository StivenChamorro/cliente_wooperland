document
    .getElementById("create-topic-form")
    .addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;
        const image = document.getElementById("image").files[0];
        const token = localStorage.getItem("token");

        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("image", image);

        try {
            const response = await fetch(
                "https://backend-production-40d8.up.railway.app/v1/topic/store",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: formData,
                }
            );

            if (response.ok) {
                const data = await response.json();
                alert("Topic created successfully");
                window.location.href = `/topics`
                console.log(data);
            } else {
                const error = await response.json();
                alert("Error creating topic: " + error.message);
                console.error(error);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            alert("An error occurred while creating the topic.");
        }
    });
