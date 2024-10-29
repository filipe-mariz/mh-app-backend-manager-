export class BasesController {
	handleResponse(data: object) {
		return data
	}

	handleExeption(message: string) {
		return {
			skip: true,
			type: message
		}
	}

	handleError(dataError: any) {
		if (dataError?.errors) {
			return {
				code: 'BAD_REQUEST',
				name: dataError.name,
				message: dataError.errors[0].message,
				type: dataError.errors[0].type,
			}
		}

		return dataError
	}
}
