import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');

		// Basic email validation
		if (!email || !email.includes('@')) {
			return fail(400, {
				error: 'Please enter a valid email address',
				email
			});
		}

		// Here you would typically:
		// 1. Add email to your newsletter service (Mailchimp, ConvertKit, etc.)
		// 2. Store in database
		// 3. Send confirmation email
		
		console.log('Newsletter signup:', email);

		// For now, just redirect with success message
		throw redirect(303, '/?newsletter=success');
	}
};