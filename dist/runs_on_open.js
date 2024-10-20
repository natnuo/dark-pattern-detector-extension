"use strict";
var _a;
const post = async (action, data) => {
    // console.log(JSON.stringify(data));
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open("POST", `https://dark-pattern-detector.xyz/${action}/`);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => {
            resolve(xhr.response);
        };
        xhr.send(JSON.stringify(data));
    });
};
const fix = async (items) => {
    var _a;
    const result = await post("check", {
        elements: items.map((text) => { return { text: text.replace(/[^\x00-\x7F]/g, "") }; }),
    });
    // console.log(result);
    const typeToColor = {
        "Social Proof": "#f805",
        "Misdirection": "#f085",
        "Urgency": "#8f05",
        // "Forced Action": "#0f85",
        // "Obstruction": "#80f5",
        // "Sneaking": "#08f5",
        "Scarcity": "#80f5",
        "None": "transparent"
    };
    let colors = [];
    for (let i = 0; i < items.length; i++) {
        let maxDP = { type: "None", probability: 0.5 };
        const dps = (_a = result.elements[i]) === null || _a === void 0 ? void 0 : _a.dark_patterns;
        if (!dps) {
            colors.push(typeToColor[maxDP.type]);
            continue;
        }
        for (let j = 0; j < dps.length; j++) {
            if (dps[j].probability > maxDP.probability) {
                maxDP = dps[j];
            }
        }
        if (maxDP.type !== "None")
            console.log(maxDP, items[i], typeToColor[maxDP.type]);
        colors.push(typeToColor[maxDP.type]);
        // colors.push(typeToColor[(Math.random() > 0.1) ? "Social Proof" : "None"]);
    }
    return colors;
};
const loadingBar = document.createElement("div");
(_a = document.querySelector("html")) === null || _a === void 0 ? void 0 : _a.appendChild(loadingBar);
loadingBar.style.display = "none";
loadingBar.style.position = "fixed";
loadingBar.style.margin = "0";
loadingBar.style.padding = "0";
loadingBar.style.top = "0px";
loadingBar.style.height = "2px";
loadingBar.style.left = "0px";
loadingBar.style.right = `100%`;
loadingBar.style.backgroundImage = "linear-gradient(to top right, #55f, #88f)";
loadingBar.style.transition = "right 0.5s";
loadingBar.style.zIndex = "9999999999";
const updateLoadingBar = (percent) => {
    loadingBar.style.right = `${100 - percent * 100}%`;
};
let lastUPD = -1;
const fixAll = async () => {
    if (Date.now() - lastUPD <= 301000)
        return;
    console.log("DARK PATTERN DETECTOR FIGHTING!!!");
    lastUPD = Date.now();
    loadingBar.style.display = "block";
    let cnlist = [];
    document.querySelectorAll("*").forEach(async (element) => {
        const skippedTags = new Set(["style", "script", "svg"]);
        if (skippedTags.has(element.tagName.toLowerCase()))
            return;
        let cald = [];
        for (let node of element.childNodes) {
            cald.push(node);
        }
        cnlist.push(cald);
    });
    const items = (await Promise.all(cnlist.map(async (childNodes) => {
        let st = "";
        if (!childNodes.length)
            return;
        for (let node of childNodes) {
            if (node.nodeType !== Node.TEXT_NODE || !node.parentElement || !node.textContent || !node.textContent.trim() || node.textContent.trim().split(" ").length < 3)
                continue;
            st += node.textContent.trim() + " ";
        }
        return [st.trim(), childNodes[0].parentElement];
    }))).filter((vv) => { return vv !== undefined && vv[0] !== ""; }); // casts are valid typescript bein werd mhmhmhmhm
    let itemssubgroups = [];
    for (let i = 0; i < items.length; i++) {
        if (i % 10 == 0)
            itemssubgroups.push([items[i]]);
        else
            itemssubgroups[itemssubgroups.length - 1].push(items[i]);
    }
    let is = 0;
    const resb = await Promise.all(itemssubgroups.map(async (isg) => {
        const fx = await fix(isg.map((vv) => { return vv[0]; }));
        console.log(`Dark pattern detector analyzing: ${++is}/${itemssubgroups.length} batches`);
        updateLoadingBar((is + 1) / itemssubgroups.length);
        return fx;
    }));
    let res = [];
    resb.forEach((ee) => { res = res.concat(ee); });
    for (let i = 0; i < res.length; i++) {
        const newColor = res[i];
        const cpe = items[i][1];
        // console.log(newColor, cpe);
        if (newColor === "transparent" || !cpe)
            continue;
        console.log("DARK PATTERN FOUND", cpe);
        cpe.style.backgroundColor = newColor;
        // cpe.style.border = "8px solid " + newColor;
        cpe.classList.add("__DPD__FLSH");
        // const rect = cpe.getBoundingClientRect();
        // const hlt = document.createElement("div");
        // console.log(`${cpe.scrollHeight}px`, cpe.scrollTop);
        // hlt.style.backgroundColor = newColor;
        // hlt.style.position = "absolute";
        // hlt.style.top = `${rect.top}px`;
        // hlt.style.left = `${rect.left}px`;
        // hlt.style.height = `${rect.height}px`;
        // hlt.style.width = `${rect.width}px`;
        // // hlt.style.padding = "16px";
        // // hlt.style.margin = "-16px";
        // hlt.style.pointerEvents = "none";
        // hlt.style.zIndex = "99999999";
        // document.querySelector("html")?.appendChild(hlt);
    }
    loadingBar.remove();
    lastUPD = Date.now() - 240000;
    loadingBar.style.display = "none";
};
setTimeout(() => {
    const sn = document.createElement("style");
    // could randomize flash class to avoid detector detection but whatevs, fun future problem
    sn.innerHTML = `
  @keyframes __DPD_FLSH_ANIM {
    0% {
      opacity: 50%;
    }

    40% {
      opacity: 100%;
    }

    60% {
      opacity: 100%;
    }

    100% {
      opacity: 50%;
    }
  }
  .__DPD__FLSH {
    animation: __DPD_FLSH_ANIM 2s infinite ease-in-out;
  }
  `;
    const root = document.querySelector("html");
    root === null || root === void 0 ? void 0 : root.appendChild(sn);
    // initial fixes
    window.addEventListener("load", fixAll);
    fixAll();
    // run fixes again after every change
    const onInnerHTMLChange = new MutationObserver(() => { fixAll(); });
    onInnerHTMLChange.observe(document, {
        attributes: false,
        childList: true,
        subtree: true,
        characterData: true
    });
}, 6969);
