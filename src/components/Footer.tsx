const year = new Date().getFullYear();
const Footer = () => (
  <div className="mt-24 flex justify-center items-center">
    <p className="dark:text-gray-200 text-gray-700 text-center m-5 fixed bottom-0">
      {`Vertebra © ${year} Todos los derechos reservados || version 2.0.0`}
    </p>
  </div>
);

export default Footer;
