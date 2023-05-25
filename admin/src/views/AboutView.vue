<script setup>
import NavbarDefault from "../components/layout/navbars/NavbarDefault.vue";
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
</script>
<template>
  <NavbarDefault :sticky="true" />
  <div class="about">
    <h1>This is an about page</h1>
    <MaterialButton variant="gradient" color="secondary" class="w-auto me-2">Primary</MaterialButton>
            <MaterialButton variant="gradient" color="primary" class="w-auto me-2">Secondary</MaterialButton>
            <MaterialButton variant="gradient" color="info" class="w-auto me-2">Info</MaterialButton>
            <MaterialButton variant="gradient" color="success" class="w-auto me-2">Success</MaterialButton>
            <MaterialButton variant="gradient" color="warning" class="w-auto me-2">Warning</MaterialButton>
            <MaterialButton variant="gradient" color="danger" class="w-auto me-2">Danger</MaterialButton>
            <MaterialButton variant="gradient" color="light" class="w-auto me-2">Light</MaterialButton>
            <MaterialButton variant="gradient" color="dark" class="w-auto me-2">Dark</MaterialButton>
            <MaterialButton variant="gradient" color="white" class="w-auto me-2">White</MaterialButton>
  </div>
  <section>
    <div class="container py-4">
      <div class="row">
        <div class="col-lg-7 mx-auto d-flex justify-content-center flex-column">
          <h3 class="text-center">Contact us</h3>
          <form role="form" id="contact-form" method="post" autocomplete="off">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <MaterialInput
                    class="input-group-dynamic mb-4"
                    :label="{ text: 'First Name', class: 'form-label' }"
                    type="text"
                  />
                </div>
                <div class="col-md-6 ps-2">
                  <MaterialInput
                    class="input-group-dynamic"
                    :label="{ text: 'Last Name', class: 'form-label' }"
                    type="text"
                  />
                </div>
              </div>
              <div class="mb-4">
                <MaterialInput
                  class="input-group-dynamic"
                  :label="{ text: 'Email Address', class: 'form-label' }"
                  type="email"
                />
              </div>
              <MaterialTextArea
                class="input-group-static mb-4"
                id="message"
                :rows="4"
                >Your message</MaterialTextArea
              >
            </div>
            <div class="row">
              <div class="col-md-12">
                <MaterialSwitch
                  class="mb-4 d-flex align-items-center"
                  id="flexSwitchCheckDefault"
                  checked
                  labelClass="ms-3 mb-0"
                >
                  I agree to the
                  <a href="javascript:;" class="text-dark"
                    ><u>Terms and Conditions</u></a
                  >.
                </MaterialSwitch>

                <div class="col-md-12">
                  <MaterialButton
                    type="submit"
                    variant="gradient"
                    color="dark"
                    fullWidth
                    >Send Message</MaterialButton
                  >
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
