import { FC } from 'react';

interface ErrorMessageInterface {
	status?: number;
	message: string;
}

const ErrorMessage: FC<ErrorMessageInterface> = ({status, message}) => {
	return (
		<div className="error">
			<h1>Error {status ? status : 'unknown'}</h1>
			{message}
		</div>
	)
}

export { ErrorMessage };
