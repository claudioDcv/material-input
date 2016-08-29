(function(){
  /* created by claudio.dcv@gmail.com */
  var MaterialInputCrrHaibu = function(){
    //atributos inicial
    this.selectorGeneral = ".crr-hb-input input";
    this.tagMsg = "div";
    this.colorError = "red";
    this.colorSuccess = "white";
    this.colorActive = "#FF9900";
    this.classOpen = "crr-hb-msg crr-hb-open-msg";
    this.classClose = "crr-hb-msg";
  //sleeciono el elemento general input
  var elmInput = document.querySelectorAll(this.selectorGeneral);
    //se recorre y se agregan los listeners
    for (var i = 0; i < elmInput.length; i++) {
      elmInput[i].addEventListener('change',elmInputFn.bind(this));
      elmInput[i].addEventListener('focus',focusFN.bind(this));
      elmInput[i].addEventListener('blur',elmInputFn.bind(this));
    }
    //Solo funciones privadas
    //COmportamiento para focus
    function focusFN(e){
      e.srcElement.style.borderBottomColor = this.colorActive;
      var padre = e.srcElement.parentElement;
      var msg = padre.getElementsByTagName(this.tagMsg)[0];
      msg.style.color = this.colorActive;
    }
    /**
    * @param txtLength {int} numero caracteres
    * @return {bool} retorna true si existen caracteres
    **/
    function validate(txtLength) {
       if (txtLength < 1) {
         return false;
       }
       return true;
      }
    //comportamiento para change / blur
    function elmInputFn(e){

      var colorSuccessData = e.srcElement.dataset.materialinputColor || this.colorSuccess;
      var padre = e.srcElement.parentElement;
      var msg = padre.getElementsByTagName(this.tagMsg)[0];
        var txt = e.srcElement.value.length || 0;
      msg.className = this.classOpen;

      if (validate(txt)) {
        msg.className = this.classOpen;
        e.srcElement.style.borderBottomColor = colorSuccessData;
        msg.style.color = colorSuccessData;
        console.log('texto');
      }else{
        console.log('vacio');
        e.srcElement.style.borderBottomColor = this.colorError;
        msg.style.color = this.colorError;
        msg.className = this.classClose;
      }
    }
  }
  //window.MaterialInput = MaterialInputCrrHaibu;
  //Objeto autoejecutable

  new MaterialInputCrrHaibu();
  console.log(1);
})();
