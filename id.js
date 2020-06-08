function generateRef(node) {
    var stack = [];
    stack.push(node);

    var currNode;
    while (stack.length != 0) {
        currNode = stack.pop();
        if (typeof(currNode.id) !== 'undefined' && currNode.id !== null && currNode.id !== '') {
            window[currNode.id] = currNode;
        }
        if (currNode.children) {
            stack.push(...currNode.children);
        }
    }
}

function registerObserver() {
    var observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach((node) => {
                    generateRef(node);
                })
            }
        });
    });
    observer.observe(document.body, {childList: true, subtree: true});
}

generateRef(document);
registerObserver();