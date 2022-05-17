### PEC 5
## Alejandro Criado Gonzalez

# Ejercicio 1 
Los formularios dirigidos por el template en Angular se crean y trabajan como los componentes, a continuación veremos las principales diferencias con los formularios reactivos.

- Los formularios basados ​​en plantillas utilizan el “FormsModule”, mientras que los formularios reactivos se basan en “ReactiveFormsModule”.
- Los formularios basados ​​en plantillas son de naturaleza asincrónica, mientras que los formularios reactivos son en su mayoría sincrónicos.
- En un enfoque basado en plantillas, la mayor parte de la lógica se basa en la plantilla, mientras que en el enfoque basado en reactivos, la lógica reside principalmente en el componente .

# Ejercicio 2
ngModel : La directiva ngModel y su sintaxis especial abstraen las partes internas de todos y cada uno de los tipos de entrada de nosotros, los desarrolladores, lo que nos facilita el desarrollo rápido de aplicaciones basadas en formularios. 

Aqui tenemos un ejemplo para ver como utilizar la directiva: 
<code>
        <input type="text"
             placeholder="Stock Name"
             name="stockName"
             [ngModel]="stock.name"
             (ngModelChange)="stock.name=$event">
</code>

ngModelChange : "ngModelChange" se ejecuta cuando cambia el valor en la propiedad asociada a un ngModel, con el que podríamos conseguir un comportamiento idéntico al visto en el punto anterior del doble binding, pero sin usar el binding doble.

<code>
        <input type="number" [ngModel]="lado" (ngModelChange)="lado = $event">
</code>

# Ejercicio 3
  true     --      false
ng-touched - ng-untouched : para saber si el usuario ha clickado o ha "tocado el input".
ng-dirty --- ng-pristine : para saber si el valor del input ha cambiado.
ng-valid --- ng-invalid : para saber si el valor del input es valido o no.

Nos ayudan a dar estilo a los inputs según su estado.

# Ejercicio 4
Te permite tener tu formulario agrupado y así poder manejarlo y crear estilo de una manera mas sencilla.