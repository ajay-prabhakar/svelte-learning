<body class="text-gray-600 font-body">
	<div class="grid grid-cols-3">
		<div class="grid grid-cols-1">
			<nav>
				<div>
					<h1 class="font-bold uppercase p-4 border-b border-gray-100">
						<a href="/">Food Ninja</a>
					</h1>
				</div>
				<ul>
					<li class="text-gray-700 font-bold">
						<a href="#">
							<span>Home</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>About</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Contact</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>

		<main class="px-16 py-6 bg-gray-200 col-span-2">
			<div class="flex justify-center md:justify-end">
				<a href="#" class="text-primary">Log in</a>
				<a href="#" class="text-primary ml-2">Sign up</a>
			</div>

			<header>
				<h2 class="text-gray-700 text-6xl font-semibold">Recipes</h2>
				<h3 class="text-2xl font-semibold">For Ninjas</h3>
			</header>

			<div>
				<h4 class="font-bold pb-2 mt-12 border-b border-gray-200">Latest Recipes</h4>

				<!-- <div class="mt-8 flex space-x-2"> -->
				<div class="mt-8 grid lg:grid-cols-3 gap-10">
					<!-- cards go here -->
					<div class="rounded bg-white border-gray-200 shadow-md overflow-hidden relative">
						<img src="favicon.png" alt="stew" class="h-32 sm:h-48 w-full object-cover" />
						<div class="m-4">
							<span class="font-bold">5 Bean Chili Stew</span>
							<span class="block text-gray-500 text-sm">Recipe by Mario</span>
						</div>
						<div
							class="absolute top-0 ml-2 mt-2 p-2 bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full"
						>
							<span>25 mins</span>
						</div>
					</div>

					<div class="rounded bg-white border-gray-200 shadow-md overflow-hidden relative">
						<img src="favicon.png" alt="stew" class="h-32 sm:h-48 w-full object-cover" />
						<div class="m-4">
							<span class="font-bold">5 Bean Chili Stew</span>
							<span class="block text-gray-500 text-sm">Recipe by Mario</span>
						</div>
						<div
							class="absolute top-0 ml-2 mt-2 p-2 bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full"
						>
							<span>25 mins</span>
						</div>
					</div>

					<div class="rounded bg-white border-gray-200 shadow-md overflow-hidden relative">
						<img src="favicon.png" alt="stew" class="h-32 sm:h-48 w-full object-cover" />
						<div class="m-4">
							<span class="font-bold">5 Bean Chili Stew</span>
							<span class="block text-gray-500 text-sm">Recipe by Mario</span>
						</div>
						<div
							class="absolute top-0 ml-2 mt-2 p-2 bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full"
						>
							<span>25 mins</span>
						</div>
					</div>
				</div>

				<h4 class="font-bold pb-2 mt-12 border-b border-gray-200">Most Popular</h4>

				<div class="mt-8">
					<!-- cards go here -->
				</div>
			</div>

			<div class="mt-12 flex justify-center">
				<div class="bg-secondary-100 text-secondary-200">Load more</div>
			</div>
		</main>
	</div>
</body>
