// Импорт типов и хуков из React
import { type ChangeEvent, useEffect, useState } from "react";
// Импорт библиотеки для HTTP-запросов
import axios from "axios";

// Импорт компонента Input
import Input from "../../components/Input/Input";
// Импорт стилизованных компонентов
import {
  DataContainer,
  ErrorMessage,
  Homework10Wrapper,
  InputsWrapper,
} from "./styles";
// Импорт компонента спиннера (индикатора загрузки)
import Spinner from "components/Spinner/Spinner";

// Объявление функционального компонента Homework10
function Homework10() {
  // Состояние для поискового запроса
  const [search, setSearch] = useState<string>("");
  // Состояние для заметки
  const [note, setNote] = useState<string>("");
  // Состояние для хранения факта о котах
  const [fact, setFact] = useState<string>("");
  // Состояние для хранения ошибок
  const [error, setError] = useState<string | undefined>(undefined);
  // Состояние для отслеживания загрузки
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // Состояние для определения первого рендера компонента
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

  // URL API для получения фактов о котах
  const CAT_URL = "https://catfact.ninja/fact";

  // Обработчик изменения поискового поля
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  // Обработчик изменения поля заметки
  const onNoteChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  // Асинхронная функция для получения факта о котах
  const getCatFact = async () => {
    // Включаем индикатор загрузки
    setIsLoading(true);
    // Сбрасываем ошибки
    setError(undefined);
    // Очищаем предыдущий факт
    setFact("");

    try {
      // Выполняем GET-запрос к API
      const result = await axios.get(CAT_URL);
      // Сохраняем полученный факт в состояние
      setFact(result.data.fact);
    } catch (error: any) {
      // Логируем ошибку в консоль
      console.log(error);
      // Сохраняем сообщение об ошибке в состояние
      setError(error.message);
    } finally {
      // Выключаем индикатор загрузки в любом случае
      setIsLoading(false);
    }
  };

  // useEffect для определения первого рендера
  useEffect(() => {
    // Устанавливаем флаг, что первый рендер завершен
    setIsFirstRender(false);
  }, []); // Пустой массив зависимостей - выполняется только при монтировании

  // useEffect для отслеживания изменений поискового запроса
  useEffect(() => {
    // Проверяем, что это не первый рендер
    if (!isFirstRender) {
      // Вызываем функцию получения факта
      getCatFact();
    }
  }, [search]); // Зависимость от search - выполняется при изменении search

  // Возвращаем JSX разметку компонента
  return (
    <Homework10Wrapper>
      <InputsWrapper>
        {/* Поле поиска */}
        <Input
          name="search"
          placeholder="Enter value"
          value={search}
          onChange={onSearchChange}
        />
        {/* Поле заметки */}
        <Input
          name="note"
          placeholder="Enter note"
          value={note}
          onChange={onNoteChange}
        />
      </InputsWrapper>
      {/* Отображаем факт, если он есть */}
      {fact && <DataContainer>{fact}</DataContainer>}
      {/* Отображаем ошибку, если она есть */}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {/* Отображаем спиннер во время загрузки */}
      {isLoading && <Spinner />}
    </Homework10Wrapper>
  );
}

// Экспорт компонента по умолчанию
export default Homework10;