### PEC 5
## Alejandro Criado Gonzalez

# Ejercicio 1 
- FormControl : FormControl es un objeto qué se usa en los formularios para tener un control sobre su valor y su estado en el formulario. 
- FormGroup : FormGroup es un cojunto de FormControls, el estado de este objeto depende del estado de todos sus objetos, es decir, si uno de los FormControl es inválido, el grupo entero es inválido.
- FormBuilder : Formbuilder nos permite utilizar FormControl y FormGroup de una manera más sencilla ya que la sintaxis es mucho más sencilla.
  
# Ejercicio 2
Estos són todos los validadores que incluye angular:
-  static min(min: number): ValidatorFn
-  static max(max: number): ValidatorFn
-  static required(control: AbstractControl): ValidationErrors | null
-  static requiredTrue(control: AbstractControl): ValidationErrors | null
-  static email(control: AbstractControl): ValidationErrors | null
-  static minLength(minLength: number): ValidatorFn
-  static maxLength(maxLength: number): ValidatorFn
-  static pattern(pattern: string | RegExp): ValidatorFn
-  static nullValidator(control: AbstractControl): ValidationErrors | null
-  static compose(validators: ValidatorFn[]): ValidatorFn | null
-  static composeAsync(validators: AsyncValidatorFn[]): AsyncValidatorFn | null

# Ejercicio 3
  true     --      false
ng-touched - ng-untouched : para saber si el usuario ha clickado o ha "tocado el input".
ng-dirty --- ng-pristine : para saber si el valor del input ha cambiado.
ng-valid --- ng-invalid : para saber si el valor del input es valido o no.

Nos ayudan a dar estilo a los inputs según su estado.