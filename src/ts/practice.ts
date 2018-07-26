// import * as workerPath from 'file-loader?name=[name].js!./worker';
import Worker from 'worker-loader?name=[name].js?!./worker';

export class workerPractice {
	constructor() {
		console.log('Calling worker from main');
	}

	public startWorker() {
		const worker = new Worker();
		const message = { message: 'print', args: ['Hi from main'] };
		worker.postMessage('YOO');
	}
}
