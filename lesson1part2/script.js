document.body.onload = function(){
    let body = document.body;
    document.getElementById('transition').onclick = function(){
        window.location.href = 'https://youtu.be/Ggewc6YLfuk?t=53'
    };

    document.getElementById('changePageStyle').onclick = function(){
        body.style.cssText = 'background: url("sunshine.jpg")';
        document.getElementById('container').style.cssText = 'opacity: 0.4;\
        background: #fcbe85';      
    };

    document.getElementById('delete').onclick = function(){
        body.innerHTML = '';
        body.innerHTML = '<header id="header"> \
            <nav id="navigation"> \
                <ul> \
                    <li><a href="#">First Link</a></li>  \
                    <li><a href="#">Second Link</a></li> \
                    <li><a href="#">Third Link </a></li> \
                    <li><a href="#">Fourth Link</a></li> \
                </ul> \
            </nav> \
        </header> \
        <section id="section">  \
            <h1> \
                Lorem Ipsum \
            </h1> \
            <p> \
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. \
            </p> \
        </section> \
        <main id="main"> \
            <figure> \
                <img src="Founder.jpeg" alt="founder"> \
                <figcaption>Founder</figcaption> \
            </figure> \
            <figure> \
                <img src="seo.jpg" alt="seo"> \
                <figcaption>SEO</figcaption> \
            </figure> \
        </main> \
        <footer id="footer"> \
            <p>Phone</p> \
            <p>Address</p> \
        </footer> \
        '
        body.children.style.cssText = 'background: #808080'
        
    }


}