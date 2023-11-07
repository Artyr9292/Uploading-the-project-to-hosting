import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import './style/style.scss';



//Для того чтобы это сделать переходим в наш конструктор запросов и смотрим как мы можем 
//их лимитировать- https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0
//есть специальное свойство limit которое мы можем указать поставим 9 как и нужно в нашем приложении
//limit-9
//и рядом там есть offset(отступ, сколько персонажей мы пропустим)
//offset-9
//но персонажей у нас много- "total": 1562,
//Нажимаем кнопку- Try it out! делая запрос получим другие параметры
//Копируем теперь нашу строку с API- в Request URL- https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=46453012769cbfce017eefbdb2234108


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />    
  //</React.StrictMode>
);




