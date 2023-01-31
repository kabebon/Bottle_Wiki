//Создайте всплывающее окно, которое спрашивает имя у пользователя и выводит его с помощью функции.

while(true)
{
    let username = prompt('Назови себя')
    if(CheckForValidUser(username) == true){
        let film = prompt('А теперь назови свой любимый фильм')
            if(CheckForValidFilm(film) == true){
                break;
            } 
            alert('Ты точно тот, кто мне нужен?')
    }
    alert('Не путай себя с железным человеком!')
}

function CheckForValidUser(username){
        if(username == 'Халк'){
            return true;
        } else{
            return false;
        }
}

function CheckForValidFilm(film){
    if(film == 'Мстители'){
        return true;
    } else{
        return false;
    }
}







