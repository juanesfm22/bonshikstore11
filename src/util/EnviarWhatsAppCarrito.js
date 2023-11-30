import { eventosClick } from "../controllers/Analytics";

export default function EnviarWhatsAppCarrito(products, total) {
  eventosClick(total);
  const numeroCelular = "3186094667";
  let saltoLinea = "%0D%0A";
  var descripcionProductos = products.map(function (des) {
    return (
      "- " +
      des.Unidades +
      " unidad(es) de " +
      des.Nombre +
      " a S/. " +
      des.Precio +
      ".00" +
      saltoLinea
    );
  });
  const textoMensaje = `Hola BONSHIK, estoy intentando comprar: ${saltoLinea} ${saltoLinea}${descripcionProductos.join(
    ""
  )} ${saltoLinea}Necesito ayuda, para poder pagar el monto de S/. ${total}.00 `;
  const wspLink = `https://api.whatsapp.com/send/?phone=57${numeroCelular}&text=${textoMensaje}&app_absent=0`;
  window.open(wspLink, "_blank");
}
