import { useLoaderData,useRouteError, isRouteErrorResponse, Link } from '@remix-run/react'
import { getPost } from '../models/posts.server'
import {formaterFecha } from '../utils/helpers.js';


  /*** Manejo de errores */
export function ErrorBoundary() {
    const error = useRouteError();
     if (isRouteErrorResponse(error)) {
      return (
          <>
            <p className="error">{error.status} {error.statusText}</p>
            <Link to='/' className='error-enlace'>Tal vez quieras volver a la página principal</Link>
          </>
      );
     }
     return <p className="error">Error desconocido</p>
  }

  export function meta({data}) {
  
  
    if(!data) {
      return [
        {title: 'GuitarLA - Entrada no encontrada'},
        {description: 'Guitarras, venta de guitarras, Entrada no encontrada'},
      ]
    } 
  
    return [
      {title: `GuitarLA - ${data.data[0].attributes.titulo}`},
      {description: `Guitarras, venta de guitarras, entrada ${data.data[0].attributes.titulo}`},
    ]
  }

export async function loader({params}) {
  const { postUrl } = params;
  const post = await getPost(postUrl);

  if(post.data.length === 0) {
    throw new Response('', {
     status: 404,
     statusText: 'Entrada no encontrada',    
   })
  }
  return post
}

export default function Post() {
    const post = useLoaderData();
    const { titulo, contenido, imagen, publishedAt
    } = post?.data[0]?.attributes;
  return (
    <article className='post mt-3'>
              <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`Imagen blog ${titulo}`}
      />

      <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{ formaterFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
            
      </div>
      
    </article>
  )
}
