<template id="wzp">
 <div class='layout'>
    <!-- ommited -->
    <SocialChat
      icon
      :attendants="attendants"
    >
      <p slot="header">Elige tu ejecutivo de ventas y contactalo vía WhatsApp.</p>

      <template v-slot:button>
        <img
          src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/whatsapp.svg"
          alt="icon whatsapp"
          aria-hidden="true"
        >      
      </template>
      <small slot="footer">Horario de funcionamiento: 08:00 a 18:00 Hrs.</small>
    </SocialChat>
  </div>

</template>



<script>

export default {

  data: () => ({
    attendants: [
      {
        app: 'whatsapp',
        label: 'Ventas',
        name: 'Pedro Muñoz',
        number: '+56999893484',
        avatar: {
          src: 'https://pedromunozlopez86.github.io/Prueba-mi-portafolio/assets/img/bg-hero-pedro.png',
          alt: 'Pedro Muñoz'
        }
      },
      // ...
    ]
  })
}
</script>

<style >
.vsc-popup-button--default {
  background-color: #25D366 !important;
}

</style>


