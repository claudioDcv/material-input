# material-input
material input, pure javascript


##...

contructor = new MaterialInput();

integration with angular class:

>.ng-invalid 
>.ng-pristine

Option:
data-materialinput-color = Type Color, set a color input success


```html
<div class="crr-hb-input">
      <input type="text" name="name" value="" disabled>
      <div class="crr-hb-msg">Usuario*</div>
    </div>
    <div class="crr-hb-input">
      <input type="text" name="name" value="" data-materialinput-color="#FFFFFF">
      <div class="crr-hb-msg">Contraseña*</div>
    </div>
    <div class="crr-hb-input crr-hb-input-alternative">
      <input type="text" name="name" value="" data-materialinput-color="#000000">
      <div class="crr-hb-msg">Contraseña*</div>
    </div>
    <div class="crr-hb-input crr-hb-input-alternative">
      <input type="text" name="name" value="Hola Mundo" data-materialinput-color="#000000">
      <div class="crr-hb-msg">Contraseña*</div>
    </div>
    <div class="crr-hb-input crr-hb-input-alternative">
      <input type="text" name="name" value="Hola Mundo" data-materialinput-color="#FFFFFF">
      <div class="crr-hb-msg">Contraseña*</div>
    </div>
    <div class="crr-hb-input crr-hb-input-alternative">
      <input type="text" name="name" value="Hola Mundo" data-materialinput-color="#FFFFFF" disabled>
      <div class="crr-hb-msg">Contraseña*</div>
    </div>
    <div class="crr-hb-input crr-hb-input-alternative">
      <input type="text" class="ng-invalid" name="name" value="Hola Mundo" data-materialinput-color="#FFFFFF">
      <div class="crr-hb-msg">Contraseña*</div>
    </div>

    <div class="crr-hb-input crr-hb-input-alternative">
      <input type="text" class="ng-invalid ng-pristine" name="name" value="Hola Mundo" data-materialinput-color="#FFFFFF">
      <div class="crr-hb-msg">Contraseña*</div>
    </div>
```
