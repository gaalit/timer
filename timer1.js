const args = process.argv.slice(2).sort(function(a, b) {
  return a - b;
});

const alarm = function() {

  if (args.length === 0) {
    return "";
  }

  for (let minutes of args) {
    if (Math.sign(minutes) === 1) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, minutes);
    }
  }
};

alarm();
