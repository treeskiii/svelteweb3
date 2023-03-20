<script lang="ts">
	import {
		accountChainId,
		connected,
		connectMetamask,
		disconnect,
		walletAddress
	} from '$lib/stores/provider';
	import { balanceOnBlock } from '$lib/stores/state';
	import { formatEther } from 'ethers/lib/utils';
	import Logo from "$lib/public/piolabslogo.png";
</script>

<header>
	<div class="navbar py-4  bg-black">
		<div class="navbar-start">
			<div class="btn btn-ghost normal-case text-xl text-white">Piolabs</div>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1 text-white">
				<li><a>Nav Link 1</a></li>
				<li><a>Nav Link 2</a></li>
			</ul>
		</div>
		<div class="navbar-end">
			{#if !$connected}
				<div class="btn mr-6 " on:click={connectMetamask}>Connect Wallet</div>
			{:else}
				<div class="btn mr-6" on:click={disconnect}>Disconnect</div>
			{/if}
		</div>
	</div>
	<div
		class="relative isolate flex items-center gap-x-6 overflow-hidden bg-blue-900 py-2.5 px-6 sm:px-3.5 sm:before:flex-1"
	>
		<svg
			viewBox="0 0 577 310"
			aria-hidden="true"
			class="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl"
		>
			<path
				id="1d77c128-3ec1-4660-a7f6-26c7006705ad"
				fill="url(#49a52b64-16c6-4eb9-931b-8e24bf34e053)"
				fill-opacity=".3"
				d="m142.787 168.697-75.331 62.132L.016 88.702l142.771 79.995 135.671-111.9c-16.495 64.083-23.088 173.257 82.496 97.291C492.935 59.13 494.936-54.366 549.339 30.385c43.523 67.8 24.892 159.548 10.136 196.946l-128.493-95.28-36.628 177.599-251.567-140.953Z"
			/>
			<defs>
				<linearGradient
					id="49a52b64-16c6-4eb9-931b-8e24bf34e053"
					x1="614.778"
					x2="-42.453"
					y1="26.617"
					y2="96.115"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#9089FC" />
					<stop offset="1" stop-color="#FF80B5" />
				</linearGradient>
			</defs>
		</svg>
		<svg
			viewBox="0 0 577 310"
			aria-hidden="true"
			class="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl"
		>
			<use href="#1d77c128-3ec1-4660-a7f6-26c7006705ad" />
		</svg>
		<div class="flex flex-wrap items-center gap-y-2 gap-x-4">
			<p class="text-sm leading-6 text-gray-400">
				<strong class="font-semibold text-white">Piolabs</strong><svg
					viewBox="0 0 2 2"
					class="mx-2 inline h-0.5 w-0.5 fill-current"
					aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg
				>Piolabs Web 3 Template for Svelte
			</p>
			<a
				href="#"
				class="flex-none rounded-full bg-gray-900 py-1 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
				>Start <span aria-hidden="true">&rarr;</span></a
			>
		</div>
		<div class="flex flex-1 justify-end">
			<button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
				<span class="sr-only">ESGETIT</span>
				<svg
					class="h-5 w-5 text-gray-400"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
					/>
				</svg>
			</button>
		</div>
	</div>
</header>

<main class="flex flex-col p-6 w-screen h-screen items-center gap-5 font-serif  bg-gradient-to-r from-[#0d0d0d] to-black">
	<h1 class="text-5xl text-white font-bold">Treeski's Web3 Starter Dapp</h1>
	<div class="stats  glass ">
		<div class="stat">
		  <div class="stat-figure text-primary">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
		  </div>
		  <div class="stat-title text-white">Connected Wallet</div>
		  <div class="stat-value text-blue-300">{$walletAddress.substr(-4)}</div>
		  <div class="stat-desc text-white">Connected: {$connected}</div>
		</div>
		
		<div class="stat">
		  <div class="stat-figure text-secondary">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
		  </div>
		  <div class="stat-title text-white">Eth Balance</div>
		  <div class="stat-value text-blue-300">{parseFloat(formatEther($balanceOnBlock)).toFixed(4)} ETH</div>
		  <div class="stat-desc text-white">21% more than last month</div>
		</div>
		
		<div class="stat">
		  <div class="stat-figure text-blue-300">
		  </div>
		  <div class="stat-value text-white">86%</div>
		  <div class="stat-title text-white">Tasks done</div>
		  <div class="stat-desc text-blue-300">31 tasks remaining</div>
		</div>
		
	  </div>
	<div class="card w-96 glass mt-4">
		<figure>
			<img
				src={Logo}
				alt="piolabslogo"
			/>
		</figure>
		<div class="card-body">
			<p class="text-white">Wallet Address: {$walletAddress.substr(-4)}</p>
			<h1  class="text-gray-300" >Eth Balance:</h1>
			<h2 class="card-title text-white ">{formatEther($balanceOnBlock)} ETH</h2>
			
			<div class="card-actions justify-end mt-4">
				{#if !$connected}
					<button class="btn btn-primary" on:click={connectMetamask}>Connect Wallet</button>
				{:else}
					<button class="btn btn-primary" on:click={disconnect}>Disconnect </button>
				{/if}
			</div>
		</div>
	</div>
	<div class="countdown" />

	<div class="card" />
	
</main>


<style>
	
</style>