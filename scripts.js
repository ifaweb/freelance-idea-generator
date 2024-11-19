document.getElementById("generate").addEventListener("click", () => {
    const skills = document.getElementById("skills").value;
    const time = document.getElementById("time").value;
    fetch("generate-idea.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skills, time }),
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById("ideaResult").innerHTML = `
                <h4>${data.title}</h4>
                <p>${data.description}</p>
                <p><strong>Skills:</strong> ${data.skills}</p>
            `;
        });
});
