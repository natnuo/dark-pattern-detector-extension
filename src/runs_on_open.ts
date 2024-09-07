const fix = async (text: string | null | undefined): Promise<string> => {
  if (!text) return "";

  text.replace(",", "--").split(/[.!?]/);
  
  const result = await post("/check", {
    elements: [ { text } ]
  });

  const typeToColor: { [dpType: string]: string } = {
    "": "transparent",
  };

  let maxDP = { type: "", probability: 0 };
  const dps = result.elements[0].dark_patterns;
  for (let i=0;i<dps.length;i++) {
    if (dps[i].probability > maxDP.probability) {
      maxDP = dps[i];
    }
  }

  const color = typeToColor[maxDP.type];

  return `<div style="background-color: ${color}; padding: 1rem; margin: -1rem;">${text}</div>`;
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
      if (childNode.nodeType !== Node.TEXT_NODE) return;
      childNode.textContent = await fix(childNode.textContent);
    }));
  
  });
};

// run fixes again after every change
const onInnerHTMLChange = new MutationObserver(fixAll);
const root = document.querySelector("html");
if (root) onInnerHTMLChange.observe(root, {characterData: false, childList: true, attributes: false});

// initial fixes
fixAll();
