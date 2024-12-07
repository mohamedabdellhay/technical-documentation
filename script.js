// let code = document.querySelectorAll("pre");

// console.log(code);

// let copyElement = document.createElement("div");
// // copyElement.style.position = "absolute";
// copyElement.style.top = "0px";
// copyElement.style.left = "0px";
// copyElement.style.zIndex = "1000";
// copyElement.style.color = "#fff";
// copyElement.textContent = "copy";
// console.log(copyElement);

// async function test() {
//   // for (let i = 0; i < code.length; i++) {
//   // }
//   for (ele of code) {
//     ele.style.position = "relative";
//     console.log(ele);
//     await ele.insertAdjacentElement("beforeend", copyElement);
//   }
// }

// test();

let code = document.querySelectorAll("pre");

function createCopyButton() {
  let copyButton = document.createElement("button");
  copyButton.textContent = "Copy";
  copyButton.style.position = "absolute";
  copyButton.style.top = "5px";
  copyButton.style.right = "5px";
  copyButton.style.zIndex = "1000";
  copyButton.style.backgroundColor = "#808080c7";
  copyButton.style.color = "white";
  copyButton.style.border = "none";
  copyButton.style.padding = "5px 10px";
  copyButton.style.cursor = "pointer";
  copyButton.style.borderRadius = "3px";

  return copyButton;
}

async function addCopyButtons() {
  for (let codeBlock of code) {
    // Ensure relative positioning for absolute button placement
    codeBlock.style.position = "relative";
    codeBlock.style.minWidth = "calc(100%/2)";

    // Create copy button
    let copyButton = createCopyButton();

    // Add click event to copy content
    copyButton.addEventListener("click", async () => {
      try {
        // Get the text content of the pre element
        await navigator.clipboard.writeText(codeBlock.textContent);

        // Temporary visual feedback
        copyButton.textContent = "Copied!";
        // copyButton.style.backgroundColor = "#45a049";

        // Reset button after 2 seconds
        setTimeout(() => {
          copyButton.textContent = "Copy";
          //   copyButton.style.backgroundColor = "#4CAF50";
        }, 2000);
      } catch (err) {
        console.error("Failed to copy: ", err);
        copyButton.textContent = "Copy failed";
      }
    });

    // Add button to the code block
    codeBlock.appendChild(copyButton);
  }
}

// Call the function to add copy buttons
addCopyButtons();
