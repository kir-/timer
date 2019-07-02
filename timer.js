let alarms = process.argv.slice(2);

alarms.forEach(alarm=> {
  if (!isNaN(alarm) && alarm > 0) {
    setTimeout(()=>{
      process.stdout.write('\x07');
      console.log('beep');
    }, (alarm * 1000));
  }
});