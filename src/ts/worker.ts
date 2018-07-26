const ctx: Worker = self as any;

ctx.addEventListener('message', eve => {
	console.log('HEYYY from the inside');
});

function printFunc(message?: string) {
	console.log(`printing message... ${message}`);
}
