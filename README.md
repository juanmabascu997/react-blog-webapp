# Blog Application

## Descripcion

Este es un proyecto de aplicación de blog que permite a los usuarios ver publicaciones, filtrar publicaciones por etiquetas, y autenticar usuarios utilizando Google Sign-In. La aplicación muestra una lista de publicaciones con imágenes, títulos, autores y etiquetas. Los usuarios pueden ver los detalles de cada publicación, incluidos los comentarios, y también pueden gestionar su sesión mediante Google.

## Tecnologías Utilizadas-**React 18**: Biblioteca para construir la interfaz de usuario.

-**React Router DOM**: Enrutamiento para aplicaciones React.

-**Axios**: Cliente HTTP para realizar solicitudes a la API.

-**CSS Grid**: Diseño de cuadrícula para la disposición de elementos.

-**Google Identity Services**: Autenticación con Google.

-**Auth0**: Autenticación de usuarios.

-**Pexels API**: Para obtener imágenes.

## Requisitos- Node.js (versión 20.16 o superior)

- npm (gestor de paquetes de Node.js)
- Una cuenta de Google y credenciales de API para Google Sign-In.
- Claves API de Pexels para obtener imágenes.

## Instalación1.**Clona el repositorio:**

```bash
   git clone https://github.com/juanmabascu997/react-blog-webapp
   cd tu-repositorio
```

2.**Instala las dependencias:**  
 `bash
    npm install --legacy-peer-deps
    `

3.**Configura las variables de entorno:**

Crea un archivo `.env` en la raíz del proyecto y añade tus variables de entorno:
`env
    REACT_APP_GOOGLE_CLIENT_ID=tu_cliente_id_de_google
    REACT_APP_PEXELS_API_KEY=tu_clave_de_api_de_pexels
    API_URL=la_url_de_tu_api`

4.**Inicia el servidor de desarrollo:**  
 `bash
    npm start
    `

## Uso

1.**Visita la aplicación en tu navegador:**

Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en funcionamiento.

2.**Autenticación:**

Usa el botón "Login with Google" para autenticarte. Una vez autenticado, el botón de inicio de sesión se reemplaza por un botón de cierre de sesión.

3.**Navegación:**  
 -**Inicio:** Muestra la lista de publicaciones con una vista previa. -**Detalles de la publicación:** Haz clic en una publicación para ver los detalles completos y los comentarios. -**Usuarios:** Consulta la lista de usuarios. -**Filtrado por etiqueta:** Usa el botón de filtro de etiquetas para seleccionar múltiples etiquetas y filtrar las publicaciones en la vista principal.

## Estructura del Proyecto
-**src/** 
-**components/**: Componentes reutilizables como `Navbar`, `PostItem`, `PostDetail`, etc.

-**pages/**: Páginas principales de la aplicación como `Home`, `PostPage`, `UserList`, etc. 
-**services/**: Servicios para manejar solicitudes API, como `api.js`. 
-**styles/**: Archivos CSS para estilos globales y específicos. 
-**App.js**: Componente principal que define las rutas y estructura de la aplicación. 
-**index.js**: Punto de entrada de la aplicación React.

-**public/** 
-**index.html**: Archivo HTML principal.

## Enlaces Útiles- [Google Identity Services](https://developers.google.com/identity)

- [Pexels API](https://www.pexels.com/api/)
- [Auth0](https://auth0.com/)
