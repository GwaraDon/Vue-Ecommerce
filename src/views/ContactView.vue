<template>
  <div class="mx-auto mt-5 min-h-[calc(100vh-130px)] w-full max-w-2xl">
    <form class="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
      <div class="mb-4">
        <label class="mb-2 block text-sm font-bold text-gray-700" for="name">
          Name
        </label>
        <input
          class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id="name"
          type="text"
          placeholder="Your Name"
        />
      </div>
      <div class="mb-4">
        <label class="mb-2 block text-sm font-bold text-gray-700" for="email">
          Email
        </label>
        <input
          class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id="email"
          type="email"
          placeholder="Your Email"
        />
      </div>
      <div class="mb-6">
        <label class="mb-2 block text-sm font-bold text-gray-700" for="message">
          Message
        </label>
        <textarea
          class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id="message"
          placeholder="Your Message"
        ></textarea>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="button"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
