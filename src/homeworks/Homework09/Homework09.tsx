import { useState, type ChangeEvent } from "react";
// Импорт React хуков: useState для управления состоянием и ChangeEvent для типизации событий

import Input from "../../components/Input/Input";
// Импорт кастомного компонента Input из указанного пути

import {
  FormWrapper,
  Homework09Wrapper,
  Result,
  ResultWrapper,
} from "./styles";
// Импорт стилизованных компонентов для верстки

import Button from "../../components/Button/Button";
// Импорт кастомного компонента Button

function Homework09() {
  // Объявление функционального компонента Homework09

  const [firstNote, setFirstNote] = useState<string>("");
  // State для первого поля ввода: начальное значение - пустая строка

  const [secondNote, setSecondNote] = useState<string>("");
  // State для второго поля ввода: начальное значение - пустая строка

  const [firstResult, setFirstResult] = useState<string>("");
  // State для отображения результата первого поля

  const [secondResult, setSecondResult] = useState<string>("");
  // State для отображения результата второго поля

  const [isShowResult, setIsShowResult] = useState<boolean>(false);
  // State для управления видимостью блока с результатами

  //   отправка запроса
  console.log("fetch data ");
  // Комментарий и console.log - возможно, остаток от предыдущей логики или заглушка

  const firstNoteOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Обработчик изменения первого поля ввода
    setFirstNote(event.target.value);
    // Обновление state первого поля значением из input
  };

  const secondNoteOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Обработчик изменения второго поля ввода
    setSecondNote(event.target.value);
    // Обновление state второго поля значением из input
  };

  const showResult = () => {
    // Функция для показа/скрытия результатов
    setFirstResult(firstNote);
    // Сохранение текущего значения первого поля в результат
    setSecondResult(secondNote);
    // Сохранение текущего значения второго поля в результат

    setIsShowResult(!isShowResult);
    // Переключение состояния видимости результатов
    // !false -> true (показать)
    // !true -> false (скрыть)
  };

  return (
    // JSX разметка компонента
    <Homework09Wrapper>
      {/* Основной контейнер компонента */}
      <FormWrapper>
        {/* Контейнер для формы с полями ввода */}
        <Input
          name="first-note"
          placeholder="Enter first note"
          label="First note"
          id="first-note-id"
          value={firstNote}
          onChange={firstNoteOnChange}
          // Компонент Input для первого поля:
          // name - идентификатор поля
          // placeholder - текст-подсказка
          // label - метка поля
          // id - уникальный идентификатор
          // value - привязка к state
          // onChange - обработчик изменения
        />
        <Input
          name="second-note"
          placeholder="Enter second note"
          label="Second note"
          id="second-note-id"
          value={secondNote}
          onChange={secondNoteOnChange}
          // Аналогичный компонент Input для второго поля
        />
        <Button name="SHOW/HIDE" onClick={showResult} />
        {/* Кнопка для переключения видимости результатов */}
      </FormWrapper>
 
      <ResultWrapper isShow={isShowResult}>
        {/* Контейнер для результатов с пропсом isShow для условного отображения */}
        <Result>{firstResult ? firstResult : "-"}</Result>
        {/* Отображение первого результата или дефиса если пусто */}
        <Result>{secondResult ? secondResult : "-"}</Result>
        {/* Отображение второго результата или дефиса если пусто */}
      </ResultWrapper>
    </Homework09Wrapper>
  );
}

export default Homework09;
// Экспорт компонента для использования в других частях приложения