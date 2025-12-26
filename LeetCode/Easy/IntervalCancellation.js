/**
 * Create a cancellable interval function.
 *
 * Given a function `fn`, an array of arguments `args`, and an interval time `t` (ms),
 * this function immediately invokes `fn` with `args` and continues to call it
 * repeatedly every `t` milliseconds. It returns a cancel function `cancelFn` 
 * that can be used to stop the repeated calls.
 *
 * @param {Function} fn - The function to be called repeatedly.
 * @param {Array} args - Array of arguments to pass to `fn`.
 * @param {number} t - Time interval in milliseconds between consecutive calls.
 * @returns {Function} cancelFn - Function to stop the interval when invoked.
 *
 * Example usage:
 *
 * const cancel = cancellable((x) => x * 2, [4], 35);
 * setTimeout(cancel, 190); // Stops repeated calls after 190ms
 *
 * Timeline:
 * 0ms    -> fn(4) called
 * 35ms   -> fn(4) called
 * 70ms   -> fn(4) called
 * ...
 * 190ms  -> cancelFn called, interval stops
 */
var cancellable = function(fn, args, t) {
    // Call the function immediately at time 0
    fn(...args);

    // Start a repeating interval to call `fn` every `t` milliseconds
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    // Return a function that can cancel the interval
    return function cancelFn() {
        clearInterval(intervalId);
    };
};
