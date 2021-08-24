const mongoose = require('mongoose')

//configurando o mongoose
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/aprendendo',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log('conectado com sucesso')
}).catch((erro) => {
    console.log("houve um erro" +erro)
})


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    surname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    country: {
        type: String
    }
})


mongoose.model('users', UserSchema )

const Raquel = mongoose.model('users')

new Raquel({
    name: "Raquel",
    surname: "Penteado",
    email: "email@qualquer",
    age: 18,
    country: "Brasil"
}).save().then(() => {
    console.log("cadastrado")
}).catch((erro) => {
    console.log('erro'+erro)
})