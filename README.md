<!doctype html>
<html lang="ka">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Viva Academy / ვივა აკადემია</title>

  <!-- Favicon / website icon -->
  <link rel="icon" href="potoebi/logo-png.png" type="image/png">

  <!-- Your CSS -->
  <link rel="stylesheet" href="academy.css">
</head>
<body>
  <header class="site-header">
    <div class="brand">
      <a class="brand-link" href="viva.html" aria-label="Viva Academy home">
        <h1 class="brand-title" data-ka>Viva Academy</h1>
        <h1 class="brand-title" data-en hidden>Viva Academy</h1>
      </a>
    </div>

    <nav class="main-nav" id="mainNav">
      <button class="hamburger" aria-label="Toggle menu">☰</button>
      <ul class="nav-list">
        <li><a href="viva.html" data-ka>მთავარი</a><a href="viva.html" data-en hidden>Home</a></li>
        <li><a href="programs.html" data-ka>კურსები</a><a href="programs.html" data-en hidden>Courses</a></li>
        <li><a href="gallery.html" data-ka>გალერეა</a><a href="gallery.html" data-en hidden>Gallery</a></li>
        <li><a href="about.html" data-ka>ჩვენს შესახებ</a><a href="about.html" data-en hidden>About us</a></li>
        <li><a href="contact.html" data-ka>კონტაქტი</a><a href="contact.html" data-en hidden>Contact us</a></li>
      </ul>
    </nav>

    <div class="lang-switch">
      <button id="btn-ka" class="active">GE</button>
      <button id="btn-en">EN</button>
    </div>
  </header>

  <main>
    <!-- Slideshow -->
    <section id="home" class="hero white-surface">
      <div class="slideshow" id="slideshow" role="region" aria-label="Main slideshow">
        <div class="slide active"><img src="potoebi/tata.jpg" alt="slide 1"></div>
        <div class="slide"><img src="potoebi/lukla.jpg" alt="slide 2"></div>
        <div class="slide"><img src="potoebi/imit.jpg" alt="slide 3"></div>
        <div class="slide"><img src="potoebi/davita.jpg" alt="slide 4"></div>
        <div class="slide"><img src="potoebi/doli.jpg" alt="slide 5"></div>
        <div class="slide"><img src="potoebi/lilu.jpg" alt="slide 6"></div>
      </div>

      <!-- Controls -->
      <div class="slideshow-controls" aria-hidden="true">
        <button id="prev" class="control-btn" aria-label="Previous slide">‹</button>
        <button id="next" class="control-btn" aria-label="Next slide">›</button>
      </div>

      <!-- Persistent overlay button -->
      <div class="center-overlay">
        <a href="#news" class="slide-open-btn" id="overlay-btn">გაიგე მეტი</a>
      </div>

    </section>

    <!-- News section -->
    <section id="news" class="white-surface news-section">
      <h2 data-ka>ბოლო პროექტები</h2>
      <h2 data-en hidden>Latest Projects</h2>

      <div class="news-grid">
        <article class="news-card">
          <img src="potoebi/ss.jpg" alt="news 1">
          <div class="news-text">
            <h3 data-ka>საერთაშორისო სამართლისა და საერთაშორისო ურთიერთობების კურსი </h3>
            <h3 data-en hidden>Final Event of International Law & International Relations Course</h3>
            <p data-ka>8 ივნისს გაიმართა საერთაშორისო სამართლისა…</p>
            <p data-en hidden>On June 8th, the final event of the International...</p>
            <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid034Eubp7iVc3MPqpUNMKDmdT21JEgPyc9ef5ABZYS4QN75S8Cwv37uZAtsDwxseKt4l&id=61566989541450" class="read-more" data-ka>გაიგე მეტი</a>
            
          </div>
        </article>

        <article class="news-card">
          <img src="potoebi/dim.jpg" alt="news 2">
          <div class="news-text">
            <h3 data-ka>ბავშვთა დაცვის საერთაშორისო დღე</h3>
            <h3 data-en hidden>International Children's Day</h3>
            <p data-ka>ვივა აკადემია ბავშვთა დაცვის საერთაშორისო დღესთან დაკავშირებით სოფელ გლდანის ბავშვთა საოჯახო…</p>
            <p data-en hidden>Viva Academy held an event for children in celebration of International Children's Day...</p>
            <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid02T6B33wxre2B8mgSacy9PRpsgrtyrmFW9zbVHP4c9AyKw1PK4A7oJUWSwHnRhFm1cl&id=61566989541450" class="read-more" data-ka>გაიგე მეტი</a>
          
          </div>
        </article>

        <article class="news-card">
          <img src="potoebi/nino.jpg" alt="news 3">
          <div class="news-text">
            <h3 data-ka>გაეროს მოდელირება 2025</h3>
            <h3 data-en hidden>UN Model 2025</h3>
            <p data-ka>გაეროს მოდელირების ფარგლებში 7 აპრილს გაიმართა პროექტის დასკვნითი ღონისძიება, სადაც 100-ზე მეტი...</p>
            <p data-en hidden>On April 7th, a UN Model simulation took place, engaging participants in UN procedures...</p>
            <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid02EzArwxtTErVkHTWBVDD8J1x5dvgVJ5yUpuEFSADweq9DQnTXdaqCi24bzDS4nJPrl&id=61566989541450" class="read-more" data-ka>გაიგე მეტი</a>
            
          </div>
        </article> 
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="socials">
      <a href="https://www.facebook.com/profile.php?id=61566989541450" target="_blank" rel="noopener">Facebook</a>
      <a href="https://www.instagram.com/academy.vivat/" target="_blank" rel="noopener">Instagram</a>
      <a href="https://www.linkedin.com/company/viva-academy-%E1%83%95%E1%83%98%E1%83%95%E1%83%90-%E1%83%90%E1%83%99%E1%83%90%E1%83%93%E1%83%94%E1%83%9B%E1%83%98%E1%83%90/?viewAsMember=true" target="_blank" rel="noopener">Linkedin</a>
    </div>
    <div class="legal">&copy; Viva Academy/ვივა აკადემია - 2025 <span id="year"></span></div>
  </footer>

  <script src="docendo.js"></script>
</body>
</html>
