<template>
  <q-layout view="lHh Lpr lFf" v-if="$q.platform.is.desktop">
    <q-parallax class="col-12" :height="450">
      <template v-slot:media>
        <img src="images/banner/farm.jpg" />
      </template>
      <template v-slot:content>
        <div
          class="absolute row items-center"
          :style="{
            left: 0,
            right: 0,
          }"
        >
          <div class="col-6 left">
            <div
              class="text-h5 text-weight-bold text-positive"
              style="
                background: rgba(255, 255, 255);
                margin-left: 70px;
                margin: 70px 30px 0px 70px;
                padding: 30px 30px 5px 30px;
                border-radius: 10px 10px 0px 0px;
              "
            >
              DEMETER, Sistem Manajemen Pertanian
            </div>
            <div
              class="text-body2 text-positive"
              style="
                background: rgba(255, 255, 255);
                margin-left: 70px;
                margin: 0px 30px 0px 70px;
                padding: 10px 30px 30px 30px;
                border-radius: 0px 0px 10px 10px;
              "
            >
              Selain hadir dengan maksud mendukung pertanian dilapangan, kami
              juga membantu para petani untuk memasarkan produk yang dimiliki
              lewat layanan digital.
            </div>
          </div>
          <div class="col flex flex-center right">
            <lottie
              style="width: 450px; margin-top: 80px"
              :options="defaultOptionsHeader"
            />
          </div>
        </div>
      </template>
    </q-parallax>
    <q-header
      reveal
      class="text-positive q-pl-lg q-pr-lg q-pt-md q-pb-md"
      style="background: rgba(255, 255, 255)"
    >
      <q-toolbar>
        <div class="text-h4 text-weight-bolder text-positive">DEMETER</div>
        <q-space />
        <div class="q-pl-md q-pr-md">
          <q-btn
            flat
            class="text-green"
            no-caps
            label="Dashboard"
            :to="{ name: 'dashboard' }"
          />
          <q-btn
            flat
            class="text-green"
            no-caps
            label="Produk"
            :to="{ name: 'product' }"
          />
          <q-btn flat class="text-green" no-caps label="Tentang Kami" />
        </div>
        <q-card class="q-pl-md q-pr-md q-ml-md">
          <q-btn flat class="text-green" no-caps label="Masuk" />
        </q-card>
      </q-toolbar>
    </q-header>

    <q-page-container style="margin-top: -80px" class="bg-green-1">
      <router-view />
    </q-page-container>

    <q-card class="my-card text-dark q-px-xl q-pt-md q-pb-sm bg-positive">
      <div class="text-white q-mt-md q-col-gutter-md row items-start">
        <div class="col-3">
          <div class="text-h5 text-weight-bold">DEMETER</div>
          <div class="text-caption q-mt-sm">
            Demeter merupakan sebuah layanan yang bergerak untuk membantu
            permasalahan pertanian, menyedia teknologi dukungan untuk dunia
            pertanian serta menyediakan wadah transaksional produk pertanian.
          </div>
          <div class="q-pt-sm">
            <q-avatar flat size="md" text-color="white"
              ><i class="fa-brands fa-facebook"></i
            ></q-avatar>
            <q-avatar flat size="md" text-color="white"
              ><i class="fa-brands fa-instagram"></i
            ></q-avatar>
            <q-avatar flat size="md" text-color="white"
              ><i class="fa-brands fa-twitter"></i
            ></q-avatar>
            <q-avatar flat size="md" text-color="white"
              ><i class="fa-brands fa-tiktok"></i
            ></q-avatar>
          </div>
        </div>

        <div class="col-3 q-ml-xl">
          <div class="text-h6 text-weight-medium">KONTAK INFORMASI</div>
          <div class="text-caption row q-mt-sm flex flex-center">
            <div class="col-2">
              <q-avatar flat size="md" text-color="white" icon="person_pin" />
            </div>
            <div class="col">
              Jl. ZA. Pagar Alam No.89, Gedong Meneng, Kec. Rajabasa, Kota
              Bandar Lampung, Lampung 35142
            </div>
          </div>
          <div class="text-caption row flex flex-center">
            <div class="col-2">
              <q-avatar flat size="md" text-color="white" icon="call" />
            </div>
            <div class="col">0821-8560-7040</div>
          </div>
          <div class="text-caption row flex flex-center">
            <div class="col-2">
              <q-avatar flat size="md" text-color="white" icon="email" />
            </div>
            <div class="col">demeter@mail.com</div>
          </div>
        </div>
      </div>
      <div class="text-white q-mt-lg">
        <q-separator color="white" />
        <div class="q-mt-lg q-mb-md flex flex-center">
          © Copyright 2023, DEMETER.
        </div>
      </div>
    </q-card>
  </q-layout>
</template>

<script>
import Lottie from "./../components/lottie.vue";
import * as animationDataAs from "./../../public/images/lottie/header.json";
export default {
  name: "MainLayout",
  components: {
    lottie: Lottie,
  },
  data() {
    return {
      drawerRight: false,
      defaultOptionsHeader: { animationData: animationDataAs.default },
      animationSpeed: 2,
    };
  },
};
</script>
