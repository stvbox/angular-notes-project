Необходимо создать приложение - заметки.

Оно должно уметь: 
1. выводить список заметок 
2. добавлять заметки 
3. удалять заметки 
4. помечать заметки выполненными / отменять пометку 
5. фильтровать / совершать поиск по заметкам 
6. должно быть более менее красиво оформленно (верстать нужно и можно flexbox'ами, желательно использовать методологию БЭМ). Если понадобиться использовать иконки - то font-awesome тебе поможет 
7. Файлы с js, html и css должны быть разделены
 ———— Вторая часть ———————— 
8. Разбить на компоненты (компонент для списка, компонент для заметки и т.д.) 
9. Использовать односторонний поток данных (события вверх, данные вниз). То есть, никакого двухстороннего байндинга 
10. Все действия теперь должны идти на сервер (пока имитацией, но если сделаешь быстро - пригодится работать с реальным http). 
11. Разделить на модули (shared, core, модули страниц). Модуль shared должен содержать то, что может многократно переиспользоваться, модуль core - то, что должно быть single-тоновским. И на каждый раздел сайта (так называемое РМ, рабочее место) должен быть свой модуль, со своим роутингом внутри 
12. Добавить модуль store и подключить ngrx 
13. Изучить что такое редакс (Redux). Научиться создавать action, reducer, actionCreator. Научиться получать нужный кусок стора
14. Перевести всё приложение на редакс-стиль

# StudTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
