// Show selected tab
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
  
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
      activeTab.classList.add('active');
    }
  }
  
  // Handle search input and display suggestions
  document.getElementById('searchBar').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const links = document.querySelectorAll('.nav ul li a');
    links.forEach(link => {
      const text = link.textContent.toLowerCase();
      if (text.includes(searchQuery)) {
        link.parentElement.style.display = 'block';
      } else {
        link.parentElement.style.display = 'none';
      }
    });
  });
  
  // Show the Overview tab by default when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    showTab('overview');
  });
  