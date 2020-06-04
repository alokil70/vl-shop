<template>
    <v-app id="inspire">
        <v-navigation-drawer
            v-model="drawer"
            :clipped="$vuetify.breakpoint.smAndUp"
            app
        >
            <v-list dense>
                <v-list-item
                    v-for="link in links"
                    :key="link.title"
                    :to="link.url"
                    link
                >
                    <v-list-item-action>
                        <v-icon>{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ link.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar
            :clipped-left="$vuetify.breakpoint.smAndUp"
            app
            dark
        >
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
                class="hidden-md-and-up"
            ></v-app-bar-nav-icon>
            <v-toolbar-title
                style="width: 300px"
                class="ml-0 pl-4"
            >
                <span class="hidden-sm-and-down">Google Contacts</span>
            </v-toolbar-title>
            <!--<v-text-field
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Search"
                class="hidden-sm-and-down"
            ></v-text-field>-->
            <v-spacer></v-spacer>
            <v-btn
                v-for="link in links"
                :key="link.title"
                :to="link.url"
                class="hidden-sm-and-down"
                icon
            >{{ link.title }}
                <v-icon>{{ link.icon}}</v-icon>
            </v-btn>
        </v-app-bar>

        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {},

  data () {
    return {
      drawer: false,
      links: [
        {
          title: 'Login', icon: 'mdi-lock', url: '/login'
        },
        {
          title: 'Registration', icon: 'mdi-face', url: '/registration'
        },
        {
          title: 'Order', icon: 'mdi-order', url: '/orders'
        },
        {
          title: 'New add', icon: 'mdi-new', url: '/new'
        },
        {
          title: 'My add', icon: 'mdi-list', url: '/list'
        }
      ]
    }
  }
}
</script>
