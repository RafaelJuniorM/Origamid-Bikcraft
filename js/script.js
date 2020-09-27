
if(window.SimpleSlide){
  new SimpleSlide({
    slide: 'quote', // nome do atributo data-slide="principal"
    //nav: true,  se deve ou não mostrar a navegação 
    // auto: true, // se o slide deve passar automaticamente por ser padrao pode retirar
    time: 5000, // tempo de transição dos slides
    //pauseOnHover: true, // pausa a transição automática
  });

  new SimpleSlide({
    slide: 'portfolio', 
    time: 5000,
    nav:true, 
  
  });
}

if(window.SimpleAnime) {
  new SimpleAnime();
}

if(window.SimpleSlide){
  new SimpleForm ({
    form: ".formphp",
    button: "#enviar",
    erro:"<div id='form-erro'> <h2> Erro no envio!!!</h2><p> um erro ocorreu, tente para o email rafaelj.contato@gmail.com.Em breve entrarei em contato</p>",
    sucesso: "<div id='form-erro'><h2>Formularioenviado com sucesso </h2> <p>Em breve entrarei em contato</p>"
  });
}