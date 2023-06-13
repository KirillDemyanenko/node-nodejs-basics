const parseEnv = () => {
    const variables = Object.entries(process.env).filter(value =>
        value[0].indexOf('RSS_') === 0).map(val => (`${val[0]}=${val[1]};`))
    console.log(variables.join(' ').split('').slice(0, -1).join(''))
};

parseEnv();
