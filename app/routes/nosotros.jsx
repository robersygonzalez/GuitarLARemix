import imagen from "../../public/img/nosotros.jpg";
import styles from '../styles/nosotros.css';


export function meta(){
  return[
    { title: 'GuitarLA - Sobre Nosotros' },
    { name: "description", content: 'Venta de guitarras, blog de música' },
  ]
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}


function Nosotros() {

 
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />

        <div>
          <p>
            In condimentum nunc arcu, fringilla aliquet mauris pellentesque vel.
            Nullam sit amet ornare lacus, in consequat felis. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Vestibulum cursus
            nibh cursus neque tincidunt, ac interdum metus fringilla. Aenean in
            ex ut nisi vehicula tempor.
          </p>
          <p>
            In condimentum nunc arcu, fringilla aliquet mauris pellentesque vel.
            Nullam sit amet ornare lacus, in consequat felis. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Vestibulum cursus
            nibh cursus neque tincidunt, ac interdum metus fringilla. Aenean in
            ex ut nisi vehicula tempor.
          </p>
          
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
