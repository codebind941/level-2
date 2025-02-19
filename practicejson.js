function jsonmethod(jsonString) {
    console.log(jsonString)
    let objectparse = JSON.parse(jsonString)
    console.log(objectparse)
    let jsonstringfy = JSON.stringify(jsonString)
    console.log(jsonstringfy)
}

jsonmethod(`{"key" : "value", "number": 42, "nested": {"nestedkey" : "nestedvalue"}}`)

