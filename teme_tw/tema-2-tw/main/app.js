function addTokens(input, tokens) {
    if (typeof input !== 'string') {
        throw Error("Invalid input");
    }
    else {
        if (input.length < 6) {
            throw Error('Input should have at least 6 characters');
        }
    }
    //verific daca vectorul respecta formatul
    for (let t = 0; t < tokens.length; t++) {
        if (typeof (tokens[t].tokenName) !== 'string') {
            throw Error('Invalid array format');
        }
    }
    if (input.includes('...') != true) {
        return input;
    }
    else {
        console.log(input);


        for (let t = 0; t < tokens.length; t++) {
            let token = tokens[t]["tokenName"];
            // console.log(typeof token);
            token = "${" + token + "}";
            let deInlocuit = "...";
            //indexOf returneaza prima pozitie la care se gaseste '...'
            let pozitie = input.indexOf(deInlocuit);
            if (pozitie !== -1) {
                input = input.replace(deInlocuit, token);
            }

        }
    }


    return input;
}

const app = {
    addTokens: addTokens
}

module.exports = app;