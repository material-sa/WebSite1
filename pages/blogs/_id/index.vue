<template>
	<div>
	 
	     <singleBlog />
	 
  </div>

</template>

<script>
import singleBlog from "@/components/blogs/single.vue";
import Layout from "@/layouts/main/index.vue";

export default {
  name: "Blogs",
  components: { singleBlog ,Layout },
};
</script>