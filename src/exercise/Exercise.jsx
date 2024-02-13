import React from "react";
import './exercise1.css' ;


    function Exercise1() {
    return (
        <div className="exercise">
        <h1 className="exercise__title">Задание 1</h1>
        <Alert type="success">Успешно!</Alert>
        <Alert type="error">Ошибка!</Alert>
        <Alert type="warning">Предупреждение</Alert>
        <Alert>Обычный текст</Alert>
        </div>
    );
    }
    
    function Alert({ type, children }) {
        let color = "black";
    
        if (type === "success") {
        color = "green";
        } else if (type === "error") {
        color = "red";
        } else if (type === "warning") {
        color = "yellow";
        }
    
        return  <div className="alert">{color},{children}</div>;
    }
    
    export default Exercise1;