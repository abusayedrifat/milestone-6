

function greeting(greetingHandlers ,name) {
    greetingHandlers(name)
}

function  greetingHandlers(name) {
    console.log('good morning', name);
}

greeting(greetingHandlers, 'tom hanks')








