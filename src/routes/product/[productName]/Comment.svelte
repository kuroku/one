<script lang="ts">
	import type { CommentType } from '$lib/interface/comment';
	import Avatar from '$lib/layouts/Avatar.svelte';
	import moment from 'moment';
	export let comment: CommentType;
</script>

<div class="comment">
	<header>
		<Avatar src={comment.user.image} alt={comment.user.name} --size="36px" />
		<hgroup>
			<p class="title-medium capitalize">{comment.user.name} {comment.user.lastname}</p>
			<p class="body-small">{moment(comment.created_at).format('HH:MM (DD/MM/YYYY)')}</p>
		</hgroup>
	</header>
	<p class="body-medium">{comment.comment}</p>
</div>

<style>
	.comment {
		display: grid;
		gap: 8px;
		background-color: var(--surface-100-color);
		border-radius: 16px;
		padding: 8px;
	}
	header {
		display: flex;
		align-items: center;
		gap: 16px;
	}
	header .capitalize {
		text-transform: capitalize;
	}
</style>
