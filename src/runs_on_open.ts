const fix = async (text: string | null | undefined): Promise<string> => {
  if (!text) return "";

  text.replace(",", "--").split(/[.!?]/);
  
  // const result = await post("/check", {
  //   elements: [ { text } ]
  // });

  // let maxDP = { type: "None", probability: 0.5 };
  // const dps = result.elements[0].dark_patterns;
  // for (let i=0;i<dps.length;i++) {
  //   if (dps[i].probability > maxDP.probability) {
  //     maxDP = dps[i];
  //   }
  // }

  const typeToColor: { [dpType: string]: string } = {
    "Social Proof": "#f0f",
    "Misdirection": "#f00",
    "Urgency": "#af0",
    "Forced Action": "#00f",
    "Obstruction": "#0ff",
    "Sneaking": "#0f0",
    "Scarcity": "#aa0",
    "None": "transparent"
  };

  // const color = typeToColor[maxDP.type];
  const color = typeToColor[(Math.random() > 0.99) ? "Social Proof" : "None"];

  return color;
};

const fixAll = async () => {
  document.querySelectorAll("*").forEach(async (element) => {
  
    const skippedTags = new Set(["style", "script", "svg"]);
    if (skippedTags.has(element.tagName.toLowerCase())) return;

    let cnlist = [];
    for (let node of element.childNodes) {
      cnlist.push(node);
    }
    
    await Promise.all(cnlist.map(async (childNode) => {
      if (childNode.nodeType !== Node.TEXT_NODE || !childNode.parentElement) return;

      const newColor = await fix(childNode.textContent);

      if (newColor === "transparent") return;

      childNode.parentElement.innerHTML = `<div style="background-color:${newColor};padding:16px;margin:-16px;border-radius:12px;">
        ${childNode.parentElement.innerHTML}
      </div>`;
    }));
  
  });
};

// run fixes again after every change
const onInnerHTMLChange = new MutationObserver(fixAll);
const root = document.querySelector("html");
if (root) onInnerHTMLChange.observe(root, {characterData: false, childList: true, attributes: false});

// initial fixes
fixAll();
