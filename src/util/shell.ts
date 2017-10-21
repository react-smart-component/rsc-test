
import execa from 'execa';

export const execLog = (file, args) => {
    const promise = execa(file, args);
    promise.stdout.pipe(process.stdout);
    promise.stderr.pipe(process.stderr);
    return promise;
};
