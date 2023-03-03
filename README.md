# Empresa_Airlines-Formulario
Este es un proyecto Frontend utilizando React y TypeScript.
## Estructura general del proyecto
Este proyecto es un formulario de registro de clientes de vuelo. Consta de tres páginas, en las rutas:
### http://localhost:5173/home
Esta es la ruta inicial, aquí el cliente tiene la opción de elegir el número de boletos que comprará. Y haciendo click en el botón Register, lo lleva a la página de registro de datos (formulario).
### http://localhost:5173/form
Aquí se registran los datos de los clientes. El número máximo de clientes es 4.
### http://localhost:5173/confirmation
Aquí se visualizan los datos registrados de los clientes. Si hay algún error en los datos de un cliente, este lo puede eliminar; y luego si se desea se puede volver a agregar dinámicamente los datos correctos del pasajero, puede hacer click en Agregar nuevo pasajero.

## Tecnologías utilizadas
### Lenguaje de programación
Este proyecto es desarrollado enteramente en TypeScript; desde la generación de la estructura de carpetas, hasta los tipos de datos utilizados.
### Manejo de estados
Para la gestión del estado de manera global, se utiliza la librería Zustand.
[Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
### Manejo de rutas
Para el enrutamiento se usa la librería React Router Dom.
[React Router](https://reactrouter.com/en/main/start/tutorial)
### Desarrollo del formulario
Para desarrollar el formulario se implementa la librería React Hook Form
[Hook Form](https://react-hook-form.com/get-started)
### Manejo de estilos
Para darle estilos al proyecto se maneja la librería Tailwind.
[Tailwindcss](https://tailwindcss.com/)
