var goku = document.getElementById("goku"),
  goku_2 = document.getElementById("goku_2"),
  contador=0;

  function cambio()

  {
    if(contador==0)
    {
        card.classList.add("super");
        contador=1
    }
    else{
        card.classList.remove("super");
        contador=0
    }
  }


  goku.addEventListener("click",cambio)