
import './drop.scss';
function Drop(){
    (function($) { 
        $(function() { 
      
          //  open and close nav 
          $('#navbar-toggle').click(function() {
            $('nav ul').slideToggle();
          });
      
      
          // Hamburger toggle
          $('#navbar-toggle').on('click', function() {
            this.classList.toggle('active');
          });
      
      
          // If a link has a dropdown, add sub menu toggle.
          $('nav ul li a:not(:only-child)').click(function(e) {
            $(this).siblings('.navbar-dropdown').slideToggle("slow");
      
            // Close dropdown when select another dropdown
            $('.navbar-dropdown').not($(this).siblings()).hide("slow");
            e.stopPropagation();
          });
      
      
          // Click outside the dropdown will remove the dropdown class
          $('html').click(function() {
            $('.navbar-dropdown').hide();
          });
        }); 
      })(jQuery); 
    return(

        <div id="drop">
<section class="navigation">
  <div class="nav-container">
    <div class="brand">
      <a href="#!">Logo</a>
    </div>
    <nav>
      <div class="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
      <ul class="nav-list">
        <li>
          <a href="#!">Home</a>
        </li>
        <li>
          <a href="#!">About</a>
        </li>
        <li>
          <a href="#!">Services</a>
          <ul class="navbar-dropdown">
            <li>
              <a href="#!">Sass</a>
            </li>
            <li>
              <a href="#!">Less</a>
            </li>
            <li>
              <a href="#!">Stylus</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#!">Portfolio</a>
        </li>
        <li>
          <a href="#!">Category</a>
          <ul class="navbar-dropdown">
            <li>
              <a href="#!">Sass</a>
            </li>
            <li>
              <a href="#!">Less</a>
            </li>
            <li>
              <a href="#!">Stylus</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#!">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</section>
        </div>

    );
}

export default Drop;