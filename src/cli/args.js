const parseArgs = () => {
    const args = process.argv.slice(2)
    const result = []
    let str = ''
    for (let i = 0; i < args.length; i += 2) {
        result.push([args[i],args[i + 1]])
    }
    result.forEach(value => str = str.concat(value[0].slice(2, value[0].length), ' is ', value[1], ', '))
    console.log(str.slice(0, -2))
};

parseArgs();
