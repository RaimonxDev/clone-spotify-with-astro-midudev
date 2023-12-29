<script lang="ts" >

const currentTime = new Date()
const currentHours = currentTime.getHours()
let greeting = ''

if (currentHours < 12) {
    greeting = 'Good morning'
} else if (currentHours < 18) {
    greeting = 'Good afternoon'
} else {
    greeting = 'Good evening'
}
</script>
<h1 class="text-4xl font-bold">{greeting}</h1>
