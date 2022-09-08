// Как всегда, проверим готовность документа
$(function() {
    // Отлавливаем собымия "Нажатие на клавишу"
    $(this).keydown(function(event) {
        // Создаем переменную, в коморую помещаем div с подходящим data-key
        var key = $(this).find('.key[data-key='+event.which+']');
        // Находим на смранице тег audio с нужным data-key и помещаем макже в переменную для удобвства
        var audio = $(this).find('audio[data-key='+event.which+']')[0];
        // Присваиваим активный класс к клавише, чтобы подсветить ее
        key.toggleClass('playing');
        // Проверяем существует ли audio тег с таким data-key
        if(!audio) return;
        // Воспроизводим звук
        audio.play();
        // Сбрасываем таймер звуковой дорожки снова в 0
        audio.currentTime = 0;
    });
    // Отслеживаем событие, когда пользователь отпускает кнопку
    $(this).keyup(function(event) {
        // Снова создаем переменную с нужным data-key
        var key = $(this).find('.key[data-key='+event.which+']');
        // Убираем класс, который подсвечивает кнопку
        key.toggleClass('playing');
    });
});
