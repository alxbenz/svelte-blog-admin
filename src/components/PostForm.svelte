<script lang="ts">
	import { marked } from 'marked';
	import type { Post, PostResponse } from '../types';
	import { goto } from '$app/navigation';

	let post: PostResponse = {
        title: '',
        slug: '',
        content: '',
        published: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        _id: ''
    };
	let savePost: (post: Post) => void;
	let headline: string;
	let subline: string;

	let {
		title = '',
		slug = '',
		content = '',
		published = false,
		createdAt = new Date().toISOString(),
		updatedAt = new Date().toISOString()
	} = post;
	let markedContent = marked(content);

	const handleTitleChange = (event: any) => {
		title = event.target.value;

		if (slug === '') {
			slug = title.toLowerCase().replace(/ /g, '-');
		}
	};

	const handleContentChange = (event: any) => {
		content = event.target.value;
		markedContent = marked(content);
	};

	const handleToggle = (event: any) => {
		published = event.target.checked;
	};

	const handleCancel = () => {
		goto(`/posts`);
	};

	const handleSave = () => {
		savePost({
			title,
			slug,
			content,
			published
		});
	};

	export { post, savePost, headline, subline };
</script>

<form class="h-full overflow-auto">
	<div
		class="sticky top-0 z-10 m-auto grid max-w-6xl grid-cols-4 gap-x-6 gap-y-8 rounded-md bg-gray-50 px-16 py-4 shadow-sm"
	>
		<div class="col-span-1 flex flex-col justify-center">
			<h2 class="text-base font-semibold leading-7 text-gray-900">{headline}</h2>
			<p class="text-xs leading-6 text-gray-600">{subline}</p>
		</div>
		<div class="col-span-2 flex items-center justify-end">
			<div class="flex flex-col justify-end text-right text-sm">
				<span class="text-xs">created:</span>
				{new Date(createdAt).toLocaleDateString()}
			</div>
			<div class="ml-8 flex flex-col justify-end text-right text-sm">
				<span class="text-xs">updated:</span>
				{new Date(updatedAt).toLocaleDateString()}
			</div>
			<div class="ml-16 flex flex-col justify-end text-right text-sm">
				<label class="relative inline-flex cursor-pointer items-center">
					<input
						type="checkbox"
						value=""
						class="peer sr-only"
						checked={published}
						on:change={handleToggle}
					/>
					<div
						class="group h-6 w-11 rounded-full bg-red-400 peer-checked:bg-lime-400 peer-focus:outline-none"
					>
						<div
							class="absolute left-[2px] top-[2px] h-5 w-5 rounded-full bg-white transition-all content-[''] peer-checked:group-[]:translate-x-full"
						/>
					</div>
					<span class="ml-3 text-xs text-gray-900">is published</span>
				</label>
			</div>
		</div>
		<div class="col-span-1 flex items-center justify-end gap-x-6">
			<button
				type="button"
				class="text-sm font-light leading-6 text-gray-900"
				on:click={handleCancel}>Cancel</button
			>
			<button
				type="submit"
				class="rounded-md bg-cyan-300 px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm transition-all hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
				on:click={handleSave}>Save</button
			>
		</div>
	</div>
	<div class="my-12">
		<div class="m-auto max-w-5xl">
			<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
				<!-- title -->
				<div class="col-span-3">
					<label for="title" class="block text-sm font-medium leading-6 text-gray-900">Title</label>
					<div class="mt-2">
						<input
							type="text"
							name="title"
							id="title"
							class="block w-full flex-1 rounded-md border border-gray-300 bg-transparent px-2 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-cyan-400 sm:text-sm sm:leading-6"
							placeholder="Title of this post"
							value={title}
							on:change={handleTitleChange}
						/>
					</div>
				</div>
				<!-- slug -->
				<div class="col-span-2">
					<label for="slug" class="block text-sm font-medium leading-6 text-gray-900">Slug</label>
					<div class="mt-2">
						<div
							class="relative flex rounded-md bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-400 sm:max-w-full"
						>
							<span
								class="m-[2px] flex select-none items-center rounded-l-md bg-gray-100 px-3 text-gray-500 sm:text-sm"
								>/</span
							>
							<input
								type="text"
								name="slug"
								id="slug"
								value={slug}
								class="block flex-1 border-0 bg-transparent px-2 py-1.5 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
								placeholder="title-of-this-post"
							/>
						</div>
					</div>
				</div>
				<div class="col-span-3">
					<label for="content" class="block text-sm font-medium leading-6 text-gray-900"
						>Content <span class="ml-6 text-xs text-gray-400">uses markdown</span></label
					>
					<div class="mt-2">
						<textarea
							id="content"
							name="content"
							rows="16"
							value={content}
							class="block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-cyan-400 focus:ring-cyan-400 sm:text-sm"
							placeholder="Write something amazing..."
							on:keyup={handleContentChange}
						/>
					</div>
				</div>
				<div class="col-span-3">
					<!-- md output -->
					<div class="mt-8">
						<div
							class="block min-h-[21.5rem] w-full rounded-md bg-gray-50 p-3 shadow-sm sm:text-sm"
						>
							<div class="prose prose-sm">
								{@html markedContent}
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-5 flex gap-x-6">
					<span class="text-xs">TODO add tags ...</span>
				</div>
			</div>
		</div>
	</div>
</form>
