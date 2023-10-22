/* __vue_virtual_code_placeholder__ */
//export default {
//  name: 'Header',
//  computed: {
//    availableLocales() {
//      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
//    },
//  },
//  methods: {
//    changeLocale() {
//      this.$i18n.locale == 'en'
//        ? (this.$i18n.setLocale('ar'), localStorage.setItem('locale', 'ar'))
//        : (this.$i18n.setLocale('en'), localStorage.setItem('locale', 'en'))
//    },
//  },
//}
export default (await import('vue')).defineComponent({
name: 'Header',
computed: {
availableLocales() {
return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
},
},
methods: changeLocale({
this: .$i18n.locale == 'en'
? (this.$i18n.setLocale('ar'), this.$localStorage.set('locale', 'ar'))
: (this.$i18n.setLocale('en'), this.$localStorage.set('locale', 'en'))
})
});
