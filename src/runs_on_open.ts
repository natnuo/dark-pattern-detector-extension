const fix = (text: string | null | undefined): string => {
  if (!text) return "";

  text.replace(",", "--").split(/[.!?]/);

  return "A";
};

const fixAll = () => {
  document.querySelectorAll("*").forEach((element) => {
  
    const skippedTags = new Set(["style", "script", "svg"]);
    if (skippedTags.has(element.tagName.toLowerCase())) return;

    element.childNodes.forEach((childNode) => {
      if (childNode.nodeType !== Node.TEXT_NODE) return;
      childNode.textContent = fix(childNode.textContent);
    });
  
  });
};

// run fixes again after every change
const onInnerHTMLChange = new MutationObserver(fixAll);
const root = document.querySelector("html");
if (root) onInnerHTMLChange.observe(root, {characterData: false, childList: true, attributes: false});

// initial fixes
fixAll();
