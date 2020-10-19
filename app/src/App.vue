<template>
  <div>
    <div>
    <a-button type="primary">
      Primary
    </a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">
      Dashed
    </a-button>
    <a-button type="danger">
      Danger
    </a-button>
    <a-config-provider :auto-insert-space-in-button="false">
      <a-button type="primary">
        按钮
      </a-button>
    </a-config-provider>
    <a-button type="primary">
      按钮
    </a-button>
    <a-button type="link">
      Link
    </a-button>
  </div>
    <router-link
      v-for="item in menus"
      :key="item.path"
      :to="item.path">
      {{ item.name }}
    </router-link>

    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        { name: '模块一', path: '/module1' },
        { name: '模块二', path: '/module2' }
      ]
    }
  }
}
</script>