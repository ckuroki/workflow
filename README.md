# Workflow forms

## Requerimientos

* nodejs

`apt-get install nodejs`

## Scripts disponibles

### `npm start` o `yarn start` 

Corre la aplicacion en modo desarrollo.<br>

Abrir [http://localhost:3000](http://localhost:3000)  para verlo en el browser.

La pagina se recarga al editarla.<br>
Los errores se muestran en la consola.

### `npm run build` or `yarn build` 

Construye la app en el directorio `build`.<br>
La app esta lista para el deploy

## Configuracion

Configurar el servidor de schemas en el archivo `.env` en el directorio principal.

Ejemplo:
```
REACT_APP_SCHEMA_URL=http://server
```

Cada url ingresada en la app va a buscar el schema de acuerdo al path ingresado en el browser.

Suponiendo que el servidor donde esta deployada la app es `http://app` y el servidor de schemas es `http://server` :

`http://app/#/formu1` trae el schema de `http://server/formu1.json`<br>
`http://app/#/formu2` trae el schema de `http://server/formu2.json`<br>


## Deployment

Copiar el contenido del directorio build al web server.

Ej: `scp -r build/* usuario@webserver:/usr/share/nginx/html`

