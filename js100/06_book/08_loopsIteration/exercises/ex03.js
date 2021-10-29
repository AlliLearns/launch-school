// The following code causes an infinite loop.
// Why?

let counter = 0;

while (counter = 1) {
    console.log(counter);
    counter += 1;

    if (counter > 2) break;
}

// Counter is always being reassigned to 1 in the condition.