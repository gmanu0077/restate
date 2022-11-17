import "./nav.css"
function Nav() {
  return (
    <div>
    <nav class="navbar">
    <div class="navbar-container ">
        
        <ul class="menu-items">
            <li><a href="/bookmark">Bookmark</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="#">Sell</a></li>
            <li><a href="#">Manage property</a></li>
            
            <li><a href="#">Resources</a></li>
        </ul>
        <h1 class="brand-logo right pink-text logo">Estatery</h1>
    </div>
</nav></div>
  );
}

export default Nav;
