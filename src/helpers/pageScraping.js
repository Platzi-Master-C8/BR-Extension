async function getUrl() {
  const queryOptions = { active: true, currentWindow: true };
  const tabs = await chrome.tabs.query(queryOptions);
  const tab = tabs[0]
  return tab.url;
}

export { getUrl };