window.addEventListener('load', (event) => {
  const observerElement = document.querySelector('.element');
  const markersElement = document.querySelectorAll('.highlight');
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0
  };
  
  const observer = new IntersectionObserver(handleIntersect, observerOptions);
  function handleIntersect(entry) {
    markersElement.forEach((element) => {
      element.classList.add('highlights')
      element.classList.remove('no-highlights')
      window.addEventListener('scroll', (event) => {
        if(window.scrollY >= 0 && window.scrollY <= 350){
          element.classList.add('highlights')
          element.classList.remove('no-highlights')
        } else if(window.scrollY > 350){
          element.classList.remove('highlights')
          element.classList.add('no-highlights')
        }
      })
    })
  }
  observer.observe(observerElement);

  function addText(p){
    let textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
    const box = p.getBBox();
    p.parentNode.insertBefore(textElement, p.nextSibling);
    if(p.getAttribute('id') === 'first-line'){
      textElement.setAttribute("transform", "translate(" + (box.width / 2) + " " + (box.width / 2.1) + ")");
      textElement.textContent = "תרגיל בית";
      textElement.setAttribute("fill", "black");
      textElement.setAttribute("font-size", "4rem");
      textElement.setAttribute("font-weight", "bold");
      
    }
    if(p.getAttribute('id') === 'second-line'){
      textElement.setAttribute("transform", "translate(" + (box.width / 2) + " " + (box.width - box.height) + ")");
      textElement.textContent = "עיתון הארץ";
      textElement.setAttribute("fill", "black");
      textElement.setAttribute("font-size", "4rem");
      textElement.setAttribute("font-weight", "bold");
    }
  }

  const paths = document.querySelectorAll("path");
  paths.forEach((path) => {
    addText(path)
  })

})

