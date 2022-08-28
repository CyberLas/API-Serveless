<h1 align="center">
	<img src="https://cdn-icons-png.flaticon.com/512/2573/2573661.png" alt="Cloud" width="200">
	<br> Planet-API <br/>
		v.1.0.2
</h1>
<span>
Planet-API es una API de código abierto para la interacción de peticiones, ayudarlo a familiarizarse algunas peticiones y recursos que ofrece este servicio, además puede ser consumidos por solicitudes HTTP
</span>

<br/>

# Tabla de Contenidos
* [Herramientas Necesarias](#herramientas-necesarias)
* [Clonar Repositorio del Proyecto](#clonar-repositorio-del-proyecto)
* [Instalación del Proyecto](#instalación-del-proyecto)
* [Configuración de AWS](#configuración-de-aws)
* [Configuración de Deploy a Serverless de Producción](#configuración-de-deploy-a-serverless-de-producción)
* [Pruebas Unitarias](#pruebas-unitarias)
* [Pruebas Postman](#pruebas-postman)
* [Endpoints del Proyecto](#endpoints-del-proyecto)
* [Autor](#autor)

<br/>

### Herramientas Necesarias
| Nombre  | Versión  | 
| :------------: | :------------: |
| Visual Studio (Opcional) o Editor de Código Favorito  | La más Reciente   |
| Node.JS  | > 14.0.0   |
| AWS Command Line Interface  | La mas Reciente   |
| Git  | La más Reciente   |
| Postman (Opcional)  | La más Reciente   |

<br/>

### Clonar Repositorio del Proyecto
1. Abrir tu Terminal Bash o cmd 
2. Copiar la el siguiente comando en su terminal: _git clone https://github.com/CyberLas/api-serveless.git"_
3. Esperar la descarga del Repositorio
4. Ingresar al repositorio y Seguir los pasos de **Instalación del Proyecto**

<br/>

### Instalación del Proyecto
1. En la propia carpeta del proyecto abrir tu terminal 
2. Copiar la el siguiente comando en su terminal: _"npm install"_
3. Esperar que se descarguen la dependencias necesarias para el proyecto
4. Luego Instalar AWS comand Line Interface 
4. Y seguir los pasos de **Configuración de AWS**

<br/>

### Configuración de AWS
1. Ingresar a su cuenta de AWS.
2. Buscar en su la barra de busqueda: _iam_
3. Seleccionar la primera opción que encuentre.
![image](https://user-images.githubusercontent.com/33170529/187088268-af4ac507-0d38-4af1-98bc-19ed12634791.png)
3. Busque el aparatado usuario y de click.
![image](https://user-images.githubusercontent.com/33170529/187088336-95f8a087-f841-429e-9073-3a8e35bd9881.png)
5. Agrege un usuario.
![image](https://user-images.githubusercontent.com/33170529/187088349-b0b2a98f-5850-4043-8c75-f6324cd444ac.png)
6. Crear un usuario con el nombre de su preferencia y seleccione el primer accesso.
![image](https://user-images.githubusercontent.com/33170529/187088400-f1134f07-a624-4ce1-bb14-d2315d843ac6.png)
7. Crear un grupo para asignarle al usuario y asisgnele el primer permiso que ve.
![image](https://user-images.githubusercontent.com/33170529/187088437-664f8116-a114-41ed-a4f7-b23f4a01ea86.png)
8. Verifique sus credenciales si estan correrctas.
![image](https://user-images.githubusercontent.com/33170529/187088496-e7727541-59ef-4c29-9608-c17a6cf5e277.png)
7. Copiar las Access key ID y Secret Access Key del AWS
![image](https://user-images.githubusercontent.com/33170529/187088525-8d9d470f-4cda-4bd6-a568-a74f0ed64c80.png)
8. Luego abrir una nueva consola y escribir el siguiente comando: _aws configure_
9. Copiar su Access key ID y Secret Access Key.
![image](https://user-images.githubusercontent.com/33170529/187090307-2641a221-2ad1-4cbc-8661-948466c9a104.png)

<br/>

### Configuración de Deploy a Serverless de Producción
1. Ejecutar el Comando: _npm run deploy_
2. Copiar la url que salio despues de haber ejecutado el comando: 
![image](https://user-images.githubusercontent.com/33170529/187092223-aecc11d1-05a0-4b42-9075-3eba8b988598.png)
3. Cambiar el nombre de archivo de .env_example a .env
4. Agregar la url tal y como se en la imagen:
![image](https://user-images.githubusercontent.com/33170529/187093202-50c4080b-d361-4105-bbfb-227af7f6ecf1.png)
2. Ir al comando AWS y buscar dynamodb
![image](https://user-images.githubusercontent.com/33170529/187091334-615b1282-b93d-4382-9343-783f936022a9.png)
3. Ir al apartado de actualizar la configuración
![image](https://user-images.githubusercontent.com/33170529/187091430-c97a2d95-cb83-4786-9cb0-7bbca26b8159.png)
4. Luego dirigirse a la Configuración Adicional y Copiar el Nombre de Recurso de Amazon
![image](https://user-images.githubusercontent.com/33170529/187091459-97856436-cb94-44a0-88d8-b6c02c918848.png)
5. Luergo Configurar el archivo serveless.yml y agregar la siguientes lineas
<pre>
  iamRoleStatements: 
  - Effect: Allow
    Action:
      - dynamodb:*
    Resource:
      - [COPIAR TU NOMBRE DE RECURSO DE AMAZON]
</pre>

![image](https://user-images.githubusercontent.com/33170529/187091538-7d4723d1-7208-4a7a-a6cf-6f0ff1ba1f2b.png)

6. Ejecutar el Comando otra vez: _npm run deploy_

<br/>

### Pruebas Unitarias
1. Ejecutar el Comando: _npm run jest_

<br/>

### Pruebas Unitarias
1. Abrir su postman.
2. Crear un nuevo Espacio de Trabajo.
![image](https://user-images.githubusercontent.com/33170529/187094916-72f55390-90df-4160-b5bc-4ac54050cf0d.png)
3. Luego Dirigirse a exportar y seleccionar el Archivo _api-planet(serveless).postman_collection.json_
![image](https://user-images.githubusercontent.com/33170529/187095041-d6bd9a47-4b98-4f1b-aeaf-3154c6e47085.png)
4. Si se hizo bien la exportación saldra de esta forma:
![image](https://user-images.githubusercontent.com/33170529/187095102-47178c3c-d7ec-4dd1-b94a-b42b630a917a.png)

<br/>

### Endpoints del Proyecto
![image](https://user-images.githubusercontent.com/33170529/187092291-c330d9d0-0b9a-4d0d-961e-2edae24c6cbe.png)

<br/>

### Autor
* [CyberLas](https://github.com/CyberLas) -
  **Carlos Angeles** <<cyberlas@outlook.com>>