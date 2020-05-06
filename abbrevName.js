function abbrevName(name){
    let lastName = name.replace(/\w*\s/,'');
        let abb = name[0].toUpperCase()+'.'+lastName[0].toUpperCase()
        return abb;
    }
    console.log(abbrevName('Bruce Willis'));