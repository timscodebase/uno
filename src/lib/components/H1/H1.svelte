<!-- Adding text-color property in h1 class -->
<h1
	class="antialiased hover:subpixel-antialiased text-8xl font-bold
mx-3 text-yellow shadow-prop"
>
	<slot />
</h1>

<style>
	/* Adding tailwind classes for being used in styled components */
@tailwind base;
  @tailwind components;
  @tailwind utilities;

	@layer utilities{
	 .shadow-prop {
    

    /* Apply text-shadow utility classes */
    text-shadow:
      -1px 1px 2px #000,
      -3px 3px 2px #000,
      -5px 5px 2px #000,
      -7px 7px 2px #000,
      -9px 9px 2px #000,
      -11px 11px 2px #000,
      -13px 13px 2px #000,
      -15px 15px 2px #000,
      -17px 17px 2px #000;


	
  }
	}
</style>
