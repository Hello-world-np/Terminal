const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div")
    div.innerHTML = item;
    document.body.append(div)
}
const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random()
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}
async function main() {


    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length - 1]
        if (last.innerHTML.endsWith(".....")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 5)
        }
        else {
            last.innerHTML = last.innerHTML + "."
        }
    }, 100)

    let messages = [
        "Initializing program",
        "Scanning system",
        "Reading your files",
        "detecting password",
        "Sending all passwords and personal files to server",
        "Cleaning up"
    ];
    for (const item of messages) {
        await addItem(item)
    }
    await randomDelay()
    clearInterval(t)

    document.body.innerHTML = "";
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";

    document.body.append("Your data is safe with me!!!");

    alert("TASK COMPLETED SUCCESSFULLY")
}
document.querySelector(".btn").addEventListener("click", function () {
    this.style.display = "none";
main()
})