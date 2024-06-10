document.addEventListener("DOMContentLoaded", function() {
  fetch('sidebar.html')
      .then(response => response.text())
      .then(data => {
          document.querySelector('.grid-container').insertAdjacentHTML('afterbegin', data);
          document.getElementById('closeSidebarBtn').classList.remove('hidden');
          
          // Attach event listener to close button after loading the sidebar
          document.getElementById('closeSidebarBtn').addEventListener('click', closeSidebar);
      });

  document.getElementById('openSidebarBtn').addEventListener('click', openSidebar);

  function openSidebar() {
      document.getElementById('sidebar').style.width = '250px';
      document.getElementById('openSidebarBtn').classList.add('hidden');
      document.getElementById('closeSidebarBtn').classList.remove('hidden');
  }

  window.closeSidebar = function() {
      document.getElementById('sidebar').style.width = '0';
      document.getElementById('openSidebarBtn').classList.remove('hidden');
      document.getElementById('closeSidebarBtn').classList.add('hidden');
  };
});
