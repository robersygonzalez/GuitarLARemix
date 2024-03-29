import { Link } from "@remix-run/react";
import {formaterFecha } from '../utils/helpers.js';

export default function Post({ post }) {
  
  const { contenido, imagen, titulo, url, publishedAt } = post;
  return (
    <article className="post">
      <img
        className="imagen"
        src={imagen.data.attributes.formats.small.url}
        alt={`Imagen blog ${titulo}`}
      />

      <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{ formaterFecha(publishedAt)}</p>
            <p className="resumen">{contenido}</p>
            <Link className="enlace" to={`/blog/${url}`}>Leer Post</Link>
      </div>
    </article>
  );
}
