import img from './error.gif';

const ErrorMessage = () => {
    //рассмотрим как работать со статичными файлами это те файлы которые находятся в папке- public
    //используются напрямую с html
    return (
        //1-вариант вставить картинку-
        <img style={{ display: 'block', width: "250px", height: "250px",objectFit: 'contain', margin: "0 auto"}}  src={img} alt="Error"/>
        //<img style={{ display: 'block', width: "250px", height: "250px",objectFit: 'contain', margin: "0 auto"} src={img} />

        /*
        //2-вариант вставить картинку
        //если нам понадобится статичный файл можем обратится через такую конструкцию-
        //используется редко лучше это делать как в других компонентах переместить изображение в нужную нашу папку
        //и импортировать прямо в компонент 
        //<img src = {process.env.PUBLIC_URL + '/error.gif'} />
        */
  
        //более менее общие картинки можем поместить в resources/img
        //но мы наш файлик переместим с папки public в папку errorMessage

    )
}

export default ErrorMessage;
