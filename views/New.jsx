const react = require('react')

export default function New(){
    <form action="/logs" method="POST">
        <input type='text' name="title"></input>
        <input type = 'textarea' name = 'entry'></input>
        <input type="checkbox" name='shipIsBroken'></input>
        <input type='submit' name="submit"></input>

    </form>
}

module.exports = New;
