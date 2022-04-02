async function getUrl() {
  const queryOptions = { active: true, currentWindow: true };
  const tabs = await chrome.tabs.query(queryOptions);
  const url = tabs[0].url;
  const position = await getPosition(tabs[0]);
  return {
    link: url,
    position: position.trim(),
  };
}

const getPosition = async tab => {
  const tabId = tab.id;
  const text = await chrome.scripting.executeScript({
    target: { tabId: tabId },
    function: () => {
      const scrapedName = document
        .evaluate("//h1/text()", document, null, XPathResult.ANY_TYPE, null)
        .iterateNext().textContent;
      return scrapedName;
    },
  });
  return text[0].result;
};

export { getUrl };
