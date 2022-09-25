import React from 'react';
import { serverFunctions } from '../../utils/serverFunctions';
import { Button } from '@mui/material';

export const HelloWorld = () => {
	return (
		<div>
			<p>
				<b>☀️ React demo! ☀️</b>
			</p>
			<p>
				Hello, World!
				<Button>Say Hello</Button>
			</p>
		</div>
	)
}