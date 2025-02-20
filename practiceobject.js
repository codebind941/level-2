function objectmethod(obj) {
    console.log(obj)
    let values = Object.values(obj)
    console.log(values)

    let entries = Object.entries(obj)
    console.log(entries)

    let hasProp = Object.hasOwnProperty("property")
    console.log(hasProp)

    let newobj = Object.assign({}, obj, {newpropert: "newuser"})
    console.log(newobj)
}

objectmethod({
    username : "name of the user",
    username2 : "name of the user",
    username3 : "name of the user"

})