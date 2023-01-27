<template>
    <section v-editable="blok" class="contact">
          <div class="container">
            <div class="contact-manager">
              <h1 class="contact-title">Managment</h1>
              <NuxtImg 
                class="contact-manager-logo"
                provider="storyblok"
                format="webp"
                width="150"
                height="150"
                :src="blok.managerLogo?.filename"
                :name="blok.managerLogo.name"
                :alt="blok.managerLogo.alt" />
              <p class="contact-manager-company">A Piacere Musik</p>
              <p class="contact-manager-name">{{ blok.managerName }}</p>
              <p class="contact-manager-phone">+{{ blok.managerPhone }}</p>
              <a class="contact-manager-email" :href="`mailto:${blok.managerEmail}`">{{ blok.managerEmail }}</a>
            </div>
            <div class="contact-social-media">
              <h1 class="contact-title">Redes Sociales</h1>
              <div class="contact-social-media-icons">
                <a :href="blok.instagramLink.url" 
                  target="_blank" 
                  :title="blok.instagramLink.title" 
                  rel="noopener noreferrer"> 
                  <img src="@/assets/images/instagram.png" alt="instagramLogo" width="30" height="30"/>
                </a>
                <a :href="blok.FacebookLink.url" 
                  target="_blank" 
                  :title="blok.FacebookLink.title" 
                  rel="noopener noreferrer"> 
                  <img src="@/assets/images/facebook.png" alt="facebook logo" width="30" height="30"/>
                </a>
                <a :href="blok.spotifyLink.url" 
                  target="_blank" 
                  :title="blok.spotifyLink.title" 
                  rel="noopener noreferrer"> 
                  <img src="@/assets/images/spotify.png" alt="spotify logo" width="30" height="30"/>
                </a>
                <a :href="blok.appleMusicLink.url" 
                  target="_blank" 
                  :title="blok.appleMusicLink.title" 
                  rel="noopener noreferrer"> 
                  <img src="@/assets/images/itunes.png" alt="itunes logo" width="30" height="30"/>
                </a>
              </div>
            </div>
          </div>
    </section>
  </template>
  <style>
    .contact{
        display: flex;
        justify-content: center;
    }
    .contact .container{
      display: flex;
      justify-content: center;
    }
    .contact-manager, .contact-social-media {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 40%;
    }
    .contact-title{
      font-size: var(--font-size-xl);
      font-weight: lighter;
      margin-bottom: 2rem;
    }
    .contact-manager-company {
      font-size: var(--font-size-l);
    }
    .contact-social-media-icons a{
      margin: 0 10px;
    }
    .contact-manager-name, 
    .contact-manager-phone, 
    .contact-manager-email {
      font-size: var(--font-size-l);
      font-weight: lighter;
      text-decoration: none;
      color: var(--secondary-color);
      padding: 4px 0;
    }
    @media (max-width: 1021px) {
        .event-list{
            justify-content: space-around;
        }
    }
    @media (max-width: 600px) {
      .contact .container{
        flex-wrap: wrap;
      }
        .contact-manager, .contact-social-media{
          width: 100%;
          margin-top: 2rem;
        }
    }
  </style>
 <script setup>
 const props = defineProps({ blok: Object })
</script>