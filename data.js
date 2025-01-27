// Save progress in localStorage
function saveProgress(id) {
    const checkbox = document.getElementById(id);
    localStorage.setItem(id, checkbox.checked ? "completed" : "not_completed");
  }
  
  // Restore progress on page load
  function restoreProgress() {
    const allCheckboxes = document.querySelectorAll("input[type='checkbox']");
    allCheckboxes.forEach((checkbox) => {
      const status = localStorage.getItem(checkbox.id);
      if (status === "completed") {
        checkbox.checked = true;
      }
    });
  }
  
  // Switch tabs
  function openTab(event, tabId) {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");
  
    // Deactivate all tabs and hide content
    tabLinks.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));
  
    // Activate clicked tab and show content
    event.currentTarget.classList.add("active");
    document.getElementById(tabId).classList.add("active");
  }
  
  // Restore progress when the page loads
  window.onload = restoreProgress;
  